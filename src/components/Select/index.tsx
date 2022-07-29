import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { Flex } from "components/Grids";
import InputError from "./InputError";
import useSelectStyles from "./useSelectStyles";
import { SelectProps } from "./types";
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
        onChange={onChange}
        value={value}
      />
      {error && <InputError error={error} />}
    </Flex>
  );
}
