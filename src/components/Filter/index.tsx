import React from "react";
import { useAppSelector, useAppDispatch } from "hooks";
import { setFilterCourses } from "state/courses/slice";
import { CoursesFilterConfig } from "state/types";
import { SelectInput } from "components/Inputs";
import { Flex } from "components/Grids";

const mapOptions = (item: string) => ({
  label: item,
  value: item,
});

export default function Filter() {
  const { coursesState } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleFilter = React.useCallback(
    (result: Omit<CoursesFilterConfig, "country" | "camp" | "school">) => {
      dispatch(setFilterCourses(result));
    },
    [dispatch],
  );

  const { countries, camps, schools, filterConfig } = coursesState;

  return (
    <Flex direction="column" gap="32px" fullWidth>
      <Flex gap="32px" fullWidth>
        <SelectInput
          isSearchable
          options={countries.map(mapOptions)}
          name="country"
          label="select country"
          value={
            filterConfig.country
              ? [
                  {
                    label: filterConfig.country,
                    value: filterConfig.country,
                  },
                ]
              : undefined
          }
          onChange={(option) => {
            handleFilter({
              selection: "country",
              value: option.value,
            });
          }}
        />
        <SelectInput
          isSearchable
          options={camps.map(mapOptions)}
          name="camp"
          label="select camp"
          value={
            filterConfig.camp
              ? [
                  {
                    label: filterConfig.camp,
                    value: filterConfig.camp,
                  },
                ]
              : undefined
          }
          onChange={(option) => {
            handleFilter({
              selection: "camp",
              value: option.value,
            });
          }}
        />
        <SelectInput
          isSearchable
          options={[
            {
              label: "showAll",
              value: "showAll",
            },
            ...schools.map(mapOptions),
          ]}
          name="school"
          label="select school"
          value={
            filterConfig.school
              ? [
                  {
                    label: filterConfig.school,
                    value: filterConfig.school,
                  },
                ]
              : undefined
          }
          onChange={(option) => {
            handleFilter({
              selection: "school",
              value: option.value,
            });
          }}
        />
      </Flex>
    </Flex>
  );
}
