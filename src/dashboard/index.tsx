import React from "react";
import Paper from "components/Paper";
import { Container, Flex } from "components/Grids";
import { useAppDispatch, useAsync } from "hooks";
import ErrorBoundary from "components/ErrorBoundary";
import { listCourses } from "state/courses/actions";
import LoadingScreen from "components/LoadingScreen";
import Filter from "components/Filter";
import Chart from "components/Chart";
import Aside from "./Aside";
import Wrapper from "./styles";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAsync({
    callFunction: () => dispatch(listCourses()),
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <ErrorBoundary error={error}>
      <Wrapper>
        <Container>
          <Flex
            gap="32px"
            direction="column"
            mv={24}
            fullWidth
            // height="calc(100% - 60px)"
          >
            <Paper fullWidth>
              <Filter />
            </Paper>
            <Flex className="content" gap="16px" fullWidth flex={1}>
              <Paper className="content--paper" flex={5}>
                <Chart />
              </Paper>
              <Aside />
            </Flex>
          </Flex>
        </Container>
      </Wrapper>
    </ErrorBoundary>
  );
}
