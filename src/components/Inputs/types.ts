import React from "react";
import { Props, GroupBase } from "react-select";
import {
  ValidationRule,
  FieldValue,
  FieldValues,
  ValidateResult,
  Control,
} from "react-hook-form";
import { Property } from "csstype";

export type OptionType = {
  label: React.ReactNode;
  value: string | number;
};

export type FormValidationRules = {
  required: string | ValidationRule<boolean>;
  pattern: ValidationRule<RegExp>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number>;
  minLength: ValidationRule<number>;
  validate: (
    value: FieldValue<FieldValues>,
  ) => ValidateResult | Promise<ValidateResult>;
};

export interface SelectProps
  extends Props<OptionType, boolean, GroupBase<OptionType>> {
  name: string;
  options: OptionType[];
  label?: React.ReactNode;
  error?: string;
  small?: boolean;
  onChange?: (value: any) => void;
}

export type InputControllerProps = {
  control: Control<any, any>;
  validationRules?: Partial<FormValidationRules>;
};

export interface CheckedCardType {
  active: boolean;
  name: string;
  count: number;
  label: string;
  city: string;
  color: Property.Color;
}

export interface CommonInputProps {
  name: string;
  label?: string;
  error?: string;
}
