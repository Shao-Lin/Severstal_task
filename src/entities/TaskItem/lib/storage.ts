import { seedTasks } from "@/entities/TaskItem/lib/seed";
import { Task } from "../model/types";

const LS_KEY = "tasks";

export const loadInitial = (): Task[] => {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return seedTasks;
    const parsed = JSON.parse(raw) as Task[];
    return parsed.length ? parsed : seedTasks;
  } catch {
    return seedTasks;
  }
};
