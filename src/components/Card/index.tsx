import React from "react";
import Wrapper from "./styles";
import { CardType } from "./types";

export default function Card({ children, onClick, ...rest }: CardType) {
  return (
    <Wrapper
      onClick={onClick}
      gap="16px"
      direction="column"
      p={24}
      as="button"
      {...rest}
    >
      {children}
    </Wrapper>
  );
}
