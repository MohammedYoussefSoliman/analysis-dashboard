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
    toggleLanguage(state) {
      if (state.language === "ar") {
        i18n.changeLanguage("en");
        return { ...state, language: "en" };
      }
      i18n.changeLanguage("ar");
      return { ...state, language: "ar" };
    },
  },
});

export const { changeThemeMode, toggleLanguage } = slice.actions;
export default slice.reducer;
