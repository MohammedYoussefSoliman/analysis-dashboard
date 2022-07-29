import React from "react";
import _ from "lodash";
import { Controller } from "react-hook-form";
import { SingleValue } from "react-select";
import { SelectProps, InputControllerProps } from "../types";

export default function WithHookFormController<
  T extends SelectProps & InputControllerProps,
>(WrappedComponent: React.ComponentType<T>) {
  return function Component({ control, changeHandler, ...props }: T) {
    return (
      <Controller
        control={control}
        name={props.name}
        rules={{ ...props.validationRules }}
        render={({ field, fieldState: { error } }) => (
          <WrappedComponent
            {...(props as T)}
            {...field}
            error={error?.message}
            value={props.options.find((option) => option.value === field.value)}
            onChange={(val) => {
              if (val) {
                if (_.isArray(val)) {
                  field.onChange(val.map((c) => c.value));
                  if (changeHandler) changeHandler(val.map((c) => c.value));
                } else {
                  const value = val as SingleValue<any>;
                  field.onChange(value.value);
                  if (changeHandler) changeHandler(value.value);
                }
              }
            }}
          />
        )}
      />
    );
  };
}
