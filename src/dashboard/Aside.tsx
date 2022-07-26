import React from "react";
import Wrapper from "components/Aside";
import { Flex } from "components/Grids";
import { reduceLessonsCount } from "helpers/functions";
import { useAppSelector } from "hooks";
import CheckCard from "components/CheckCard";
import Typography from "components/Typography";

export default function Aside() {
  const { coursesState } = useAppSelector((state) => state);
  const { filteredCourses, courses, schoolsExtras, filterConfig } =
    coursesState;

  const lessonsCount = React.useMemo(
    () =>
      reduceLessonsCount(
        filteredCourses.length > 0 ? filteredCourses : courses,
      ),
    [filteredCourses, courses],
  );

  return (
    <Wrapper
      header={
        <Flex p={20} direction="column" gap="6px">
          <Flex gap="4px" align="flex-end">
            <Typography.H2 text={lessonsCount} />
            <Typography.H4 text="lessons" />
          </Flex>
          <Flex gap="4px">
            <Typography.P3 text="in" />
            <Typography.P3
              text={
                filterConfig.camp ||
                filterConfig.country ||
                filterConfig.school ||
                "allCamps"
              }
            />
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
          color={
            schoolsExtras.find((extra) => extra.name === course.school)?.color
          }
        />
      ))}
    </Wrapper>
  );
}
