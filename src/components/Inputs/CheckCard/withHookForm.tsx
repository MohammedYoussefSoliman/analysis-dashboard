import React from "react";
import { Controller } from "react-hook-form";
import { InputControllerProps, CommonInputProps } from "../types";

export default function WithHookFormController<
  T extends CommonInputProps & InputControllerProps,
>(WrappedComponent: React.ComponentType<T>) {
  return function Component({ control, ...props }: T) {
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
          />
        )}
      />
    );
  };
}
