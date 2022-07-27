export type ResponsiveSettings = {
  xs: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
  hd?: string;
};

export type FontSizes = {
  [key: string]: {
    sizes: ResponsiveSettings;
    weight: string | number;
  };
};

type ColorType = {
  [key: number]: string;
};

export type ColorsPalletType = {
  shades: ColorType;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  success: string;
  error: string;
  info: string;
};

export interface ThemeType {
  colors: ColorsPalletType;
  font: string;
}
