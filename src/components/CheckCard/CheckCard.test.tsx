import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import withAppProviders from "components/AppProvider/withAppProvider";
import CheckCard from "components/CheckCard";
import { CheckedCardType } from "./types";

const testCase: CheckedCardType = {
  value: "Management School ESSCA",
  count: 100,
  label: "lessons",
  city: "kakuma",
  color: {
    dark: "#333",
    light: "#eee",
  },
};
const Card = withAppProviders<CheckedCardType>(CheckCard);

it("check card renders in the dom", () => {
  render(<Card {...testCase} />);

  const card = screen.getByText(testCase.label);

  expect(card).toBeInTheDocument();
});

it("click card behavior", () => {
  render(<Card {...testCase} />);

  const card = screen.getByTestId("check-card");
  userEvent.click(card);
  const checkedIcon = screen.queryByTestId("checked-icon");
  expect(checkedIcon).toBeInTheDocument();
});
