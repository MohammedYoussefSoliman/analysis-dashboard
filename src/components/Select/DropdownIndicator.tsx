import { SelectIcon } from "assets/svgs";
import { DropdownIndicatorProps, components } from "react-select";
import { useTheme } from "@emotion/react";
import { OptionType } from "./types";

const { DropdownIndicator } = components;

export default function Dropdown(
  props: DropdownIndicatorProps<OptionType, true>,
) {
  const theme = useTheme();

  return (
    <DropdownIndicator {...props}>
      <SelectIcon color={theme.colors.opposite[300]} />
    </DropdownIndicator>
  );
}
