import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../entities/TaskItem/model/slice";
import { taskFiltersReducer } from "@features/taskFilters/model/slice";

const LS_KEY = "tasks";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    taskFilters: taskFiltersReducer,
  },
});

/* ---- ПERSIST ---- */
let prev = store.getState().tasks.list;
store.subscribe(() => {
  const curr = store.getState().tasks.list;
  if (curr !== prev) {
    localStorage.setItem(LS_KEY, JSON.stringify(curr));
    prev = curr;
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
