import { TaskCategory, TaskStatus } from "@/entities/TaskItem/model/types";

export const statusOptions: (TaskStatus | "")[] = ["", "Favorite"];
export const categoryOptions: (TaskCategory | "")[] = [
  "",
  "Home",
  "Office",
  "Trip",
  "Project",
  "Other",
];
