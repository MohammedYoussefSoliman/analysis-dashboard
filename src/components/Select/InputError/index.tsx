import React from "react";
import { useTheme } from "@emotion/react";
import Typography from "components/Typography";

type InputErrorProps = {
  error: string;
};

export default function InputError({ error }: InputErrorProps) {
  const theme = useTheme();

  return (
    <Typography.Small text={error} color={theme.colors.error} weight={500} />
  );
}
