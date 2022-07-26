import React from "react";
import Select, { SingleValue as SingleValueType } from "react-select";
import { useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { Flex } from "components/Grids";
import Typography from "components/Typography";
import useSelectStyles from "./useSelectStyles";
import { SelectProps } from "../types";
import Option from "./Option";
import Placeholder from "./Placeholder";
import SingleValue from "./SingleValue";
import DropdownIndicator from "./DropdownIndicator";

export default function SelectInput({
  name,
  label,
  options,
  error,
  small,
  onChange,
  value,
}: SelectProps) {
  const theme = useTheme();
  const styles = useSelectStyles({
    error: Boolean(error),
    small,
  });

  let selectLabel;
  const { t } = useTranslation();

  if (typeof label === "string") {
    selectLabel = t(label);
  } else {
    selectLabel = label;
  }

  return (
    <Flex direction="column" gap="6px" fullWidth>
      <Select
        name={name}
        placeholder={selectLabel || name}
        styles={styles}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator,
          Placeholder,
          Option,
          SingleValue,
        }}
        options={options}
        onChange={(val) => {
          const opt = val as SingleValueType<any>;
          if (onChange) onChange(opt);
        }}
        value={value}
      />
      {error && (
        <Typography.Small
          text={error}
          color={theme.colors.error}
          weight={500}
        />
      )}
    </Flex>
  );
}
