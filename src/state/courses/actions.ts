import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchCourses from "app/services/fetchCourses";

const listCourses = createAsyncThunk(
  "courses/list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCourses();
      return response.data;
    } catch (error) {
      return rejectWithValue([]);
    }
  },
);

export default listCourses;
