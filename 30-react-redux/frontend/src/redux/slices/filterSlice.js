import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
      // return { ...state, title: action.payload };
    },
    resetFilters: (state) => initialState,
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
  },
});

export const { setTitleFilter, setAuthorFilter, resetFilters } =
  filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;

export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;
