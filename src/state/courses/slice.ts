import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import tinycolor from "tinycolor2";
import { extractUniqueValues, randomColorsGenerator } from "helpers/functions";
import { filterCourses, listCourses } from "./actions";
import {
  CoursesState,
  CoursesFilterConfig,
  CheckedSchoolsConfig,
  Course,
} from "../types";

const initialState: CoursesState = {
  courses: [],
  error: null,
  filteredCourses: [],
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
  schoolsExtras: [],
};

const slice = createSlice({
  name: "app/courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      return { ...state, courses: action.payload };
    },
    setFilterCourses: (
      state: CoursesState,
      action: PayloadAction<
        Omit<CoursesFilterConfig, "country" | "camp" | "school">
      >,
    ) => filterCourses(state, action),
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
      const schoolsExtras = extractUniqueValues(action.payload, "school").map(
        (school) => {
          const color = randomColorsGenerator("bright");
          return {
            name: school,
            color: {
              light: color,
              dark: tinycolor(color).lighten(10).toString(),
            },
          };
        },
      );
      return {
        ...state,
        courses: action.payload,
        countries,
        camps,
        schools,
        schoolsExtras,
      };
    },
    [listCourses.rejected.type]: (state: CoursesState) => {
      return { ...state, error: "unableToFetchCourses" };
    },
  },
});

export const { setCourses, setFilterCourses, setCheckedSchool } = slice.actions;
export default slice.reducer;
