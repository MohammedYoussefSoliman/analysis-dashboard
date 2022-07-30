import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { extractUniqueValues } from "helpers/functions";
import listCourses from "./actions";
import {
  CoursesState,
  CoursesFilterConfig,
  CheckedSchoolsConfig,
  Course,
} from "../types";

const initialState: CoursesState = {
  courses: [],
  filteredCourses: [],
  error: null,
  filterConfig: {
    selection: "country",
    value: "",
    country: "",
    camp: "",
    school: "",
  },
  checkedSchool: [],
  countries: [],
  camps: [],
  schools: [],
};

const slice = createSlice({
  name: "app/courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      return { ...state, courses: action.payload };
    },
    filterCourses: (
      state: CoursesState,
      action: PayloadAction<
        Omit<CoursesFilterConfig, "country" | "camp" | "school">
      >,
    ) => {
      let config = { ...action.payload };
      let courses = [...state.courses];
      const filteredCourses = [...state.filteredCourses];
      if (config.value) {
        if (config.selection === "country") {
          courses = courses.filter(
            (course) => course[config.selection] === config.value,
          );
        } else if (
          config.value === "showAll" &&
          config.selection === "school"
        ) {
          courses = courses.filter((course) => {
            if (state.filterConfig.country && state.filterConfig.camp)
              return (
                course.country === state.filterConfig.country &&
                course.camp === state.filterConfig.camp
              );
            return true;
          });
        } else {
          courses = filteredCourses.filter(
            (course) => course[config.selection] === config.value,
          );
        }
        config = { ...config, [config.selection]: config.value };
      }
      const camps = extractUniqueValues(courses, "camp");
      const schools = extractUniqueValues(courses, "school");
      return {
        ...state,
        filteredCourses: courses,
        camps,
        schools,
        filterConfig: { ...state.filterConfig, ...config },
      };
    },
    setCheckedSchool: (
      state: CoursesState,
      action: PayloadAction<CheckedSchoolsConfig>,
    ) => {
      let currentSchools = state.checkedSchool;
      const { checked, value } = action.payload;

      if (checked) {
        currentSchools = [...new Set([...currentSchools, value])];
      } else {
        currentSchools = currentSchools.filter((school) => school !== value);
      }

      return { ...state, checkedSchool: currentSchools };
    },
  },
  extraReducers: {
    [listCourses.fulfilled.type]: (
      state: CoursesState,
      action: PayloadAction<Course[]>,
    ) => {
      const countries = extractUniqueValues(action.payload, "country");
      const camps = extractUniqueValues(action.payload, "camp");
      const schools = extractUniqueValues(action.payload, "school");
      return { ...state, courses: action.payload, countries, camps, schools };
    },
    [listCourses.rejected.type]: (state: CoursesState) => {
      return { ...state, error: "unableToFetchCourses" };
    },
  },
});

export const { setCourses, filterCourses, setCheckedSchool } = slice.actions;
export default slice.reducer;
