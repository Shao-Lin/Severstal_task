import { TaskCategory, TaskStatus } from "@/entities/TaskItem/model/types";

export const STATUS_OPTIONS: (TaskStatus | "")[] = ["", "Favorite"];
export const CATEGORY_OPTIONS: (TaskCategory | "")[] = [
  "",
  "Home",
  "Office",
  "Trip",
  "Project",
  "Other",
];
