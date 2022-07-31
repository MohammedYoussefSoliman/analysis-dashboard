import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useAppSelector } from "hooks";
import { reduceLessonsCount, extractUniqueValues } from "helpers/functions";
import { Container, Flex } from "components/Grids";
import Typography from "components/Typography";
import { Button } from "components/Buttons";
import Paper from "components/Paper";
import Wrapper from "./styles";

export default function School() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const { coursesState } = useAppSelector((state) => state);
  const { courses } = coursesState;
  const [schoolCourses, setSchoolCourses] = React.useState<any>([]);

  React.useEffect(() => {
    if (slug) {
      const schoolName = slug.split("-").join(" ");
      setSchoolCourses(
        courses.filter(
          (course) => course.school.toLocaleLowerCase() === schoolName,
        ),
      );
    }
  }, [courses, slug]);

  const camps = React.useMemo(
    () => extractUniqueValues(schoolCourses, "camp"),
    [schoolCourses],
  );
  const countries = React.useMemo(
    () => extractUniqueValues(schoolCourses, "country"),
    [schoolCourses],
  );

  if (!slug) return null;
  return (
    <Container>
      <Wrapper gap="32px" direction="column" mv={32} fullWidth>
        <Flex justify="space-between" fullWidth>
          <Typography.H4
            capitalizeFirstLetter
            text={`${
              slug.includes("-") ? slug.split("-").join(" ") : slug
            } school`}
          />

          <Button onClick={() => navigate("/")}>go back</Button>
        </Flex>
        {schoolCourses.length > 0 && (
          <Flex gap="24px" fullWidth withWrap>
            <Paper className="card" flex={1}>
              <Flex direction="column">
                <Typography.H2
                  text={reduceLessonsCount(schoolCourses)}
                  color={theme.colors.info}
                />
                <Typography.P3 text="lessons" />
              </Flex>
            </Paper>
            <Paper className="card" flex={1}>
              <Flex direction="column">
                <Typography.H2
                  text={camps.join(", ")}
                  color={theme.colors.error}
                />
                <Typography.P3 text="camps" />
              </Flex>
            </Paper>
            <Paper className="card" flex={1}>
              <Flex direction="column">
                <Typography.H2
                  text={countries.join(", ")}
                  color={theme.colors.success}
                />
                <Typography.P3 text="countries" />
              </Flex>
            </Paper>
          </Flex>
        )}
      </Wrapper>
    </Container>
  );
}
