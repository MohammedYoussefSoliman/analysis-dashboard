import React from "react";
import Typography from "components/Typography";
import Paper from "components/Paper";
import Aside from "components/Aside";
import { Container, Flex } from "components/Grids";

export default function Dashboard() {
  return (
    <Container>
      <Flex gap="32px" direction="column" mv={36} fullWidth fullHeight>
        <Paper fullWidth>
          <Typography.H2 text="filter" />
        </Paper>
        <Flex gap="32px" fullWidth flex={1}>
          <Paper flex={5}>chart</Paper>
          <Aside flex={2}>sidebar</Aside>
        </Flex>
      </Flex>
    </Container>
  );
}
