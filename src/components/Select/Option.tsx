import { useTheme } from "@emotion/react";

import Typography from "components/Typography";
import { OptionProps, components } from "react-select";
import { OptionType } from "./types";

export default function Option(props: OptionProps<OptionType, true>) {
  const theme = useTheme();

  const { children, isSelected, isFocused } = props;
  return (
    <components.Option {...props}>
      <Typography.P2
        text={children as string}
        color={
          isSelected && !isFocused
            ? theme.colors.shades[100]
            : theme.colors.text.primary
        }
      />
    </components.Option>
  );
}
