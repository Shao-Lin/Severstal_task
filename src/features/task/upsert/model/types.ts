import { TaskCategory, TaskStatus } from "@/entities/TaskItem/model/types";
import { Editor } from "@tiptap/react";
import { FormikErrors, FormikTouched } from "formik";

export type TaskFormValues = {
  id: string;
  title: string;
  description: string;
  status?: TaskStatus;
  category?: TaskCategory;
  date: string;
  image?: string;
  imageFile: File | null;
};

type TaskDraft = Omit<TaskFormValues, "imageFile">;

export type TaskFormProps = {
  task?: TaskDraft;
};

type SetFieldValueStrict<V> = <K extends keyof V>(
  field: K,
  value: V[K],
  shouldValidate?: boolean,
) => void;

export type UseTaskEditorArgs = {
  description: TaskFormValues["description"];
  setFieldValue: SetFieldValueStrict<TaskFormValues>;
};

export type ReachTextFieldProps = {
  editor: Editor | null;
  touched: FormikTouched<TaskFormValues>;
  errors: FormikErrors<TaskFormValues>;
};
