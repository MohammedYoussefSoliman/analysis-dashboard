import React from "react";
import { Props, GroupBase } from "react-select";

export type OptionType = {
  label: React.ReactNode;
  value: string | number;
};

export interface SelectProps
  extends Props<OptionType, boolean, GroupBase<OptionType>> {
  name: string;
  options: OptionType[];
  label?: React.ReactNode;
  error?: string;
  small?: boolean;
  changeHandler?: (value: any) => void;
}
