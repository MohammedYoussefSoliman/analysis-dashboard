import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import listCourses from "./actions";
import { CourseState } from "../types";

type State = {
  courses: CourseState[];
  error: string | null;
  filterConfig: {
    selection: "country" | "type";
    checkedSchool: string;
  };
};

const initialState: State = {
  courses: [],
  error: null,
  filterConfig: {
    selection: "country",
    checkedSchool: "",
  },
};

const slice = createSlice({
  name: "app/courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<CourseState[]>) => {
      return { ...state, courses: action.payload };
    },
  },
  extraReducers: {
    [listCourses.fulfilled.type]: (
      state: State,
      action: PayloadAction<CourseState[]>,
    ) => {
      return { ...state, courses: action.payload };
    },
    [listCourses.rejected.type]: (state: State) => {
      return { ...state, error: "unableToFetchCourses" };
    },
  },
});

export const { setCourses } = slice.actions;
export default slice.reducer;
