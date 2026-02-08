import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "./types";
import type { RootState } from "../../../app/store";
import { seedTasks } from "./mock";

const LS_KEY = "tasks";

const loadInitial = (): Task[] => {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return seedTasks;
    const parsed = JSON.parse(raw) as Task[];
    return parsed.length ? parsed : seedTasks;
  } catch {
    return seedTasks;
  }
};

interface TasksState {
  list: Task[];
}

const initialState: TasksState = { list: loadInitial() };

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, { payload }: PayloadAction<Task>) {
      state.list.unshift(payload);
    },
    updateTask(state, { payload }: PayloadAction<Task>) {
      const i = state.list.findIndex((t) => t.id === payload.id);
      if (i !== -1) state.list[i] = payload;
    },
    deleteTask(state, { payload }: PayloadAction<string>) {
      state.list = state.list.filter((t) => t.id !== payload);
    },
    replaceAll(state, { payload }: PayloadAction<Task[]>) {
      state.list = payload;
    },
  },
});

export const { addTask, updateTask, deleteTask, replaceAll } =
  tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
export const selectAllTasks = (s: RootState) => s.tasks.list;
