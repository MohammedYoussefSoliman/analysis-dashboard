import React from "react";
import Wrapper from "./styles";

type AsideProps = {
  flex: number;
  children: React.ReactNode;
};
export default function Aside({ children, flex }: AsideProps) {
  return (
    <Wrapper as="aside" direction="column" gap="32px" flex={flex}>
      {children}
    </Wrapper>
  );
}
