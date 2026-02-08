import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../../../app/store";
import { FiltersState } from "./types";

const initialState: FiltersState = {
  search: "",
  status: "",
  category: "",
};

const taskFiltersSlice = createSlice({
  name: "taskFilters",
  initialState,
  reducers: {
    setSearch: (s, a: PayloadAction<string>) => void (s.search = a.payload),
    setStatus: (s, a: PayloadAction<FiltersState["status"]>) =>
      void (s.status = a.payload),
    setCategory: (s, a: PayloadAction<FiltersState["category"]>) =>
      void (s.category = a.payload),

    resetFilters: () => initialState,
  },
});

export const { setSearch, setStatus, setCategory, resetFilters } =
  taskFiltersSlice.actions;
export const taskFiltersReducer = taskFiltersSlice.reducer;
export const selectTaskFilters = (state: RootState): FiltersState =>
  state.taskFilters;
