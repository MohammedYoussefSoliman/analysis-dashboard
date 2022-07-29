import React, { HTMLProps } from "react";
import {
  Mode,
  SubmitHandler,
  UseFormReturn,
  DefaultValues,
} from "react-hook-form";

export interface FormProps<T>
  extends Omit<HTMLProps<HTMLFormElement>, "onSubmit" | "children"> {
  validateOn?: Mode;
  reValidateOn?: Exclude<Mode, "onTouched" | "all">;
  defaultValues?: DefaultValues<any>;
  controlledValues?: DefaultValues<any>;
  listenToChange?: (value: any) => void;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode | ((api: UseFormReturn<T>) => React.ReactNode);
  className?: string;
}
