import { useTheme } from "@emotion/react";
import devices from "theme/sizes";
import tinycolor from "tinycolor2";

type SelectStyleSettingsType = {
  error?: boolean;
  small?: boolean;
};

function useSelectStyles({ error, small }: SelectStyleSettingsType) {
  const theme = useTheme();

  return {
    control: (base: any) => ({
      ...base,
      flexDirection: "row-reverse",
      borderRadius: "16px",
      border: `1px solid ${
        error ? theme.colors.error[300] : theme.colors.opposite[100]
      }`,
      padding: small ? "0.5re," : "1rem",
      height: small ? "fit-content" : "70px",
      boxShadow: "none",
      "&:hover": {
        border: `1px solid ${theme.colors.opposite[200]}`,
      },
      "&:focus-within": {
        border: `2px solid ${theme.colors.opposite[300]}`,
      },
      [devices.md]: {
        padding: "0.5rem",
      },
    }),
    option: (base: any, state: any) => ({
      ...base,
      padding: "1rem",
      height: "100%",
      background: `${
        // eslint-disable-next-line no-nested-ternary
        state.isSelected
          ? theme.colors.info
          : state.isFocused
          ? tinycolor(theme.colors.info).darken(10).toString()
          : "transparent"
      }`,
      color: `${state.isSelected && theme.colors.shades[100]}`,
      p: {
        color: `${state.isSelected && theme.colors.shades[100]}`,
      },
      "&:hover": {
        background: theme.colors.shades[200],
      },
    }),
  };
}

export default useSelectStyles;
