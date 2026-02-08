import { createSelector } from "@reduxjs/toolkit";
import { selectAllTasks } from "@entities/TaskItem/model/slice";
import { selectTaskFilters } from "./slice";
import type { Task } from "@entities/TaskItem/model/types";

const passesSingleFilter = <T>(
  filterValue: T | "" | undefined,
  taskValue: T | undefined,
): boolean => {
  if (filterValue === "" || filterValue === undefined) return true;

  return taskValue === filterValue;
};

const passesSearch = (task: Task, query: string) => {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    task.title.toLowerCase().includes(q) ||
    task.description?.toLowerCase().includes(q)
  );
};

export const selectFilteredTasks = createSelector(
  [selectAllTasks, selectTaskFilters],
  (tasks, filters) =>
    tasks.filter(
      (t) =>
        passesSingleFilter(filters.status, t.status) &&
        passesSingleFilter(filters.category, t.category) &&
        passesSearch(t, filters.search),
    ),
);
