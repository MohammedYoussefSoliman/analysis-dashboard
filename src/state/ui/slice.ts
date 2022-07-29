import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "i18next";
import { UIState } from "../types";

const initialState: UIState = {
  mode: "light",
  language: "en",
};

const slice = createSlice({
  name: "app/ui",
  initialState,
  reducers: {
    changeThemeMode(state, action: PayloadAction<"dark" | "light">) {
      return { ...state, mode: action.payload };
    },
    toggleLanguage(state, action: PayloadAction<"ar" | "en">) {
      i18n.changeLanguage(action.payload);
      return { ...state, language: action.payload };
    },
  },
});

export const { changeThemeMode, toggleLanguage } = slice.actions;
export default slice.reducer;
