import React from "react";
import Select from "react-select";
import { render, screen, fireEvent } from "@testing-library/react";
import { OptionType } from "../types";

const courses = [
  {
    label: "biology",
    value: "biology",
  },
  {
    label: "chemistry",
    value: "chemistry",
  },
  {
    label: "physics",
    value: "physics",
  },
  {
    label: "math",
    value: "math",
  },
];

function MySelector() {
  const [course, setCourse] = React.useState(courses[0]);

  return (
    <>
      <h1>current course is {course.label}</h1>
      <Select
        options={courses}
        value={course}
        onChange={(value: any) => {
          setCourse(value);
        }}
      />
    </>
  );
}

jest.mock(
  "react-select",
  () =>
    function factory({ options, value, onChange }: any) {
      function handleChange(event: any) {
        const option = (options as any[]).find(
          (opt) => opt.value === event.currentTarget.value,
        );
        if (onChange) onChange(option);
      }

      return (
        <select data-testid="select" value={value} onChange={handleChange}>
          {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
          {(options as OptionType[]).map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      );
    },
);

it("testing selectInput", () => {
  render(<MySelector />);

  expect(screen.getByText("current course is biology")).toBeInTheDocument();

  fireEvent.change(screen.getByTestId("select"), {
    target: { value: "physics" },
  });

  expect(screen.getByText("current course is physics")).toBeInTheDocument();
});
