import SearchInput from "@/shared/UI/SeatchInput";
import styles from "./TaskForm.module.css";
import SelectInput from "@/shared/UI/SelectInput";
import { Button, FileInput, Textarea } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

import { Formik, Form } from "formik";
import { addTask, updateTask } from "@/entities/TaskItem/model/slice";
import { useDispatch } from "react-redux";
import dateHelper from "@/shared/lib/dateHelper";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import {
  categoryOptions,
  statusOptions,
  TaskFormProps,
  TaskFormValues,
} from "./types";
import { handleImageChange } from "@/features/createTask/lib/handleImageChange";
import { schema } from "./validation";

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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { imageFile, ...taskPayload } = values;

        if (task) {
          dispatch(updateTask(taskPayload));
        } else {
          dispatch(addTask(taskPayload));
        }

        navigate("/");
      }}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className={styles.main}>
          <section className={styles.fields}>
            <SearchInput
              value={values.title}
              placeholder="Название задачи"
              onChange={(v) => setFieldValue("title", v)}
              error={touched.title && errors.title}
            />

            <Textarea
              placeholder="Опишите задачу"
              value={values.description}
              onChange={(e) =>
                setFieldValue("description", e.currentTarget.value)
              }
              autosize
              minRows={1}
              maxRows={15}
              error={touched.description && errors.description}
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
              <img className={styles.image} src={values.image} alt="preview" />
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
      )}
    </Formik>
  );
};

export default TaskForm;
