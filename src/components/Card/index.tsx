import React from "react";
import Wrapper from "./styles";
import { CardType } from "./types";

export default function Card({
  children,
  onClick,
  variant = "outlined",
  ...rest
}: CardType) {
  return (
    <Wrapper
      onClick={onClick}
      data-testid="app-card"
      gap="16px"
      direction="column"
      variant={variant}
      p={18}
      as="button"
      {...rest}
    >
      {children}
    </Wrapper>
  );
}
