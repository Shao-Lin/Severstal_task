import { TaskCategory, TaskStatus } from "@/entities/TaskItem/model/types";

export interface FiltersState {
  search: string;
  status: TaskStatus | "";
  category: TaskCategory | "";
}
