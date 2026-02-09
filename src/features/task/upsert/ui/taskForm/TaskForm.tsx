import { useEffect } from "react";
import { Formik, Form } from "formik";
import { Button, FileInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

import SearchInput from "@/shared/ui/SearchInput/SearchInput";
import SelectInput from "@/shared/ui/SelectInput/SelectInput";
import styles from "./TaskForm.module.css";

import { addTask, updateTask } from "@/entities/TaskItem/model/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import dateHelper from "@/shared/lib/dateHelper";
import { v4 as uuidv4 } from "uuid";

import { TaskFormProps, TaskFormValues } from "../../model/types";

import { handleImageChange } from "@/features/task/upsert/lib/handleImageChange";
import { schema } from "../../model/validation";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import { normalizeHtml } from "../../lib/normalizeHtml";
import { useTaskEditor } from "../../lib/createEditor";
import { ReachTextField } from "../RichTextField/RichTextField";
import {
  categoryOptions,
  statusOptions,
} from "@/entities/TaskItem/const/optionsConst";

const TaskForm = ({ task }: TaskFormProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues: TaskFormValues = task
    ? {
        ...task,
        status: task.status ?? undefined,
        category: task.category ?? undefined,
        image: task.image ?? undefined,
        imageFile: null,
      }
    : {
        id: uuidv4(),
        title: "",
        description: "",
        status: undefined,
        category: undefined,
        date: dateHelper(),
        image: undefined,
        imageFile: null,
      };

  return (
    <Formik<TaskFormValues>
      initialValues={initialValues}
      validationSchema={schema}
      enableReinitialize
      onSubmit={(values) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { imageFile: _imageFile, ...taskPayload } = values;

        if (task) {
          dispatch(updateTask(taskPayload));
        } else {
          dispatch(addTask(taskPayload));
        }

        navigate("/");
      }}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => {
        const editor = useTaskEditor({
          description: values.description,
          setFieldValue: setFieldValue,
        });

        useEffect(() => {
          if (!editor) return;

          const current = normalizeHtml(editor.getHTML());
          const next = normalizeHtml(values.description || "");

          if (current !== next) {
            editor.commands.setContent(next || "<p></p>");
          }
        }, [editor, values.description]);

        return (
          <Form onSubmit={handleSubmit} className={styles.main}>
            <section className={styles.fields}>
              <SearchInput
                value={values.title}
                placeholder="Название заметки"
                onChange={(v) => setFieldValue("title", v)}
                error={touched.title && errors.title}
              />

              <ReachTextField
                touched={touched}
                errors={errors}
                editor={editor}
              />

              <SelectInput
                value={values.status}
                data={statusOptions}
                placeholder="Статус"
                onChange={(v) => setFieldValue("status", v)}
                error={touched.status && errors.status}
              />

              <SelectInput
                value={values.category}
                data={categoryOptions}
                placeholder="Категория"
                onChange={(v) => setFieldValue("category", v)}
                error={touched.category && errors.category}
              />

              <FileInput
                accept="image/png,image/jpeg"
                clearable
                placeholder="Upload image"
                value={values.imageFile}
                onChange={handleImageChange(setFieldValue)}
                error={touched.image ? errors.image : undefined}
              />

              {values.image && (
                <img
                  className={styles.image}
                  src={values.image}
                  alt="preview"
                />
              )}

              <DatePickerInput
                placeholder="Выберите день"
                value={values.date}
                valueFormat="MMM D YYYY"
                disabled={true}
              />
            </section>

            <section className={styles.actions}>
              <Button onClick={() => navigate("/")} variant="default">
                Отмена
              </Button>

              <Button variant="filled" color="rgba(0,0,0,1)" type="submit">
                Сохранить
              </Button>
            </section>
          </Form>
        );
      }}
    </Formik>
  );
};

export default TaskForm;
