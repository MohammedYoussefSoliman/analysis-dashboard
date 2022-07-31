import React from "react";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Grids";
import Card from "components/Card";
import Wrapper from "./styles";

type AsideProps = {
  flex: number;
  children: React.ReactNode;
  header: React.ReactNode;
};
export default function Aside({ children, flex, header }: AsideProps) {
  const theme = useTheme();

  return (
    <Wrapper ph={20} as="aside" direction="column" gap="32px" flex={flex}>
      <Card color={theme.colors.success} variant="filled">
        {header}
      </Card>
      <Flex className="aside--content" direction="column" gap="16px" fullWidth>
        {children}
      </Flex>
    </Wrapper>
  );
}
