import { TaskCategory, TaskStatus } from "@/entities/TaskItem/model/types";

export type TaskFormValues = {
  id: string;
  title: string;
  description: string;
  status?: TaskStatus;
  category?: TaskCategory;
  date: string; // у тебя сейчас строка
  image?: string; // base64
  imageFile: File | null; // чтобы FileInput показывал выбранный файл
};

type TaskDraft = Omit<TaskFormValues, "imageFile">;

export type TaskFormProps = {
  task?: TaskDraft;
};

export const statusOptions: TaskStatus[] = ["Favorite"];
export const categoryOptions: TaskCategory[] = [
  "Home",
  "Office",
  "Trip",
  "Project",
  "Other",
];
