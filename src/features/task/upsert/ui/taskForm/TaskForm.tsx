import { useEffect } from "react";
import { Button, FileInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SearchInput from "@/shared/ui/SearchInput/SearchInput";
import SelectInput from "@/shared/ui/SelectInput/SelectInput";
import { ReachTextField } from "../RichTextField/RichTextField";

import styles from "./TaskForm.module.css";

import { addTask, updateTask } from "@/entities/TaskItem/model/slice";
import {
  CATEGORY_OPTIONS,
  STATUS_OPTIONS,
} from "@/entities/TaskItem/constants/optionsConst";

import dateHelper from "@/shared/lib/dateHelper";
import { fileToBase64 } from "@/shared/lib/fileHelper";
import { normalizeHtml } from "../../lib/normalizeHtml";
import { useTaskEditor } from "../../lib/createEditor";

import { schema, FormData } from "../../model/validation";
import { TaskFormProps } from "../../model/types";

import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";

const TaskForm = ({ task }: TaskFormProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultValues: FormData = task
    ? {
        ...task,
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

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues,
  });

  const values = watch();

  // 🔁 если редактируем существующую задачу
  useEffect(() => {
    reset(defaultValues);
  }, [task]);

  // 📝 Rich text editor
  const editor = useTaskEditor({
    description: values.description,
    setFieldValue: (field: string, value: unknown) =>
      setValue(field as keyof FormData, value as never),
  });

  useEffect(() => {
    if (!editor) return;

    const current = normalizeHtml(editor.getHTML());
    const next = normalizeHtml(values.description || "");

    if (current !== next) {
      editor.commands.setContent(next || "<p></p>");
    }
  }, [editor, values.description]);

  // 🖼 обработка изображения
  const handleImageChange = async (file: File | null) => {
    setValue("imageFile", file);

    if (!file) {
      setValue("image", undefined);
      return;
    }

    const base64 = await fileToBase64(file);
    setValue("image", base64);
  };

  // 🚀 submit
  const onSubmit = (data: FormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { imageFile, ...taskPayload } = data;

    if (task) {
      dispatch(updateTask(taskPayload));
    } else {
      dispatch(addTask(taskPayload));
    }

    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.main}>
      <section className={styles.fields}>
        {/* TITLE */}
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <SearchInput
              value={field.value}
              placeholder="Название заметки"
              onChange={field.onChange}
              error={errors.title?.message}
            />
          )}
        />

        {/* DESCRIPTION */}
        <ReachTextField editor={editor} errors={errors} />

        {/* STATUS */}
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <SelectInput
              value={field.value}
              data={STATUS_OPTIONS}
              placeholder="Статус"
              onChange={field.onChange}
              error={errors.status?.message}
            />
          )}
        />

        {/* CATEGORY */}
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <SelectInput
              value={field.value}
              data={CATEGORY_OPTIONS}
              placeholder="Категория"
              onChange={field.onChange}
              error={errors.category?.message}
            />
          )}
        />

        {/* IMAGE */}
        <Controller
          name="imageFile"
          control={control}
          render={({ field }) => (
            <FileInput
              accept="image/png,image/jpeg"
              clearable
              placeholder="Upload image"
              value={field.value ?? null}
              onChange={(file) => {
                field.onChange(file);
                handleImageChange(file);
              }}
              error={errors.imageFile?.message}
            />
          )}
        />

        {values.image && (
          <img className={styles.image} src={values.image} alt="preview" />
        )}

        {/* DATE */}
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePickerInput
              placeholder="Выберите день"
              value={field.value}
              valueFormat="MMM D YYYY"
              disabled
            />
          )}
        />
      </section>

      <section className={styles.actions}>
        <Button onClick={() => navigate("/")} variant="default">
          Отмена
        </Button>

        <Button type="submit" variant="filled" color="rgba(0,0,0,1)">
          Сохранить
        </Button>
      </section>
    </form>
  );
};

export default TaskForm;
