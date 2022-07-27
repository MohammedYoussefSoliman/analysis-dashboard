import colors from "./colors";
import { ThemeType } from "./types";

const getTheme = (mode: "dark" | "light"): ThemeType => ({
  font: "segeoUI",
  colors: colors[mode],
});

export default getTheme;
