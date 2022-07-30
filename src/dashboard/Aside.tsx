import React from "react";
import Wrapper from "components/Aside";
import { Flex } from "components/Grids";
import { useAppSelector } from "hooks";
import CheckCard from "components/CheckCard";
import Typography from "components/Typography";
import { Course } from "state/types";

const reduceLessonsCount = (array: Course[]) => {
  return array.map((item) => item.lessons).reduce((prev, cur) => prev + cur, 0);
};

export default function Aside() {
  const { coursesState } = useAppSelector((state) => state);

  const { filteredCourses, filterConfig } = coursesState;

  return (
    <Wrapper
      header={
        <Flex p={20} direction="column" gap="6px">
          <Flex gap="4px" align="flex-end">
            <Typography.H4 text={reduceLessonsCount(filteredCourses)} />
            <Typography.P1 text="lessons" />
          </Flex>
          <Flex gap="4px">
            <Typography.P3 text="in" />
            <Typography.P3 text={filterConfig.camp || filterConfig.country} />
          </Flex>
        </Flex>
      }
      flex={2}
    >
      {filteredCourses.map((course) => (
        <CheckCard
          key={course.id}
          value={course.school}
          count={course.lessons}
          label="lessons"
          city={course.school}
        />
      ))}
    </Wrapper>
  );
}
