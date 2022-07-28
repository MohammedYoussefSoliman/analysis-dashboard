import React from "react";
import Typography from "components/Typography";
import { Container, Flex } from "components/Grids";

export default function Dashboard() {
  return (
    <Container>
      <Flex mv={24}>
        <Typography.H2 text="unknownError" />
      </Flex>
    </Container>
  );
}
