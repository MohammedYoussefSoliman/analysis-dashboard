import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { extractUniqueValues } from "helpers/functions";
import fetchCourses from "app/services/fetchCourses";
import { CoursesState, CoursesFilterConfig } from "../types";

export const listCourses = createAsyncThunk(
  "courses/list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCourses();

      return response;
    } catch (error) {
      return rejectWithValue([]);
    }
  },
);

export const filterCourses = (
  state: CoursesState,
  action: PayloadAction<
    Omit<CoursesFilterConfig, "country" | "camp" | "school">
  >,
) => {
  const { selection, value } = { ...action.payload };
  const { filterConfig, courses } = state;
  let camps = [...state.camps];
  let filteredCourses = [...courses];
  let currentConfig = {
    country: filterConfig.country,
    camp: filterConfig.camp,
    school: filterConfig.school,
  };

  currentConfig = { ...currentConfig, [selection]: value };

  if (value) {
    switch (selection) {
      case "school":
        if (currentConfig.country) {
          filteredCourses = courses.filter(
            (course) => course.country === currentConfig.country,
          );
        }
        if (currentConfig.camp) {
          filteredCourses = filteredCourses.filter(
            (course) => course.camp === currentConfig.camp,
          );
        }
        if (value !== "showAll")
          filteredCourses = filteredCourses.filter(
            (course) => course.school === value,
          );
        break;
      case "camp":
        if (currentConfig.country) {
          filteredCourses = courses
            .filter((course) => course.country === currentConfig.country)
            .filter((course) => course.camp === value);
        }
        camps = extractUniqueValues(
          courses.filter((course) => course.country === currentConfig.country),
          "camp",
        );
        break;
      case "country":
      default:
        filteredCourses = courses.filter((course) => course.country === value);
        break;
    }
  }
  camps = extractUniqueValues(
    courses.filter((course) => course.country === currentConfig.country),
    "camp",
  );
  const schools = extractUniqueValues(filteredCourses, "school");
  return {
    ...state,
    filteredCourses,
    camps,
    schools,
    filterConfig: { ...state.filterConfig, ...currentConfig, selection, value },
  };
};
