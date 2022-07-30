import React from "react";
import Paper from "components/Paper";
import { Container, Flex } from "components/Grids";
import { useAppDispatch, useAsync } from "hooks";
import ErrorBoundary from "components/ErrorBoundary";
import { listCourses } from "state/courses/actions";
import LoadingScreen from "components/LoadingScreen";
import Filter from "components/Filter";
import Typography from "components/Typography";
import Aside from "./Aside";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAsync({
    callFunction: () => dispatch(listCourses()),
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <ErrorBoundary error={error}>
      <Container>
        <Flex gap="32px" direction="column" mv={36} fullWidth fullHeight>
          <Paper fullWidth>
            <Filter />
          </Paper>
          <Flex gap="16px" fullWidth flex={1}>
            <Paper flex={5}>
              <Typography.P3 text="chart" />
            </Paper>
            <Aside />
          </Flex>
        </Flex>
      </Container>
    </ErrorBoundary>
  );
}
