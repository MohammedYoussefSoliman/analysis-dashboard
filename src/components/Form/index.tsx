import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormProps } from "./types";

export default function Form<T>({
  defaultValues,
  controlledValues,
  listenToChange,
  onSubmit,
  children,
  validateOn = "onSubmit",
  reValidateOn = "onChange",
  className,
  ...htmlProps
}: FormProps<T>) {
  const methods = useForm<T>({
    mode: validateOn,
    reValidateMode: reValidateOn,
    defaultValues,
  });

  React.useEffect(() => {
    if (controlledValues) {
      const keys = Object(controlledValues).keys() as any[];
      keys.forEach((key) => {
        methods.setValue(key as any, controlledValues[key]);
      });
    }
  }, [controlledValues, methods]);
  React.useEffect(() => {
    if (listenToChange) {
      methods.watch((data) => {
        listenToChange(data);
      });
    }
  }, [listenToChange, methods]);
  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={methods.handleSubmit(onSubmit)}
        {...htmlProps}
        data-testid="hook-form"
      >
        {typeof children === "function"
          ? children({
              ...methods,
            })
          : children}
      </form>
    </FormProvider>
  );
}
