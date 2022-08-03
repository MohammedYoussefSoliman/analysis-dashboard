import React from "react";
import { render, screen } from "@testing-library/react";
import Tooltip from "components/Tooltip";
import AppProvider from "components/AppProvider";

it("tooltip renders in the dom", () => {
  render(
    <AppProvider>
      <Tooltip title="element title">
        <div>element</div>
      </Tooltip>
    </AppProvider>,
  );

  const tooltip = screen.getByTestId("tooltip");
  const element = screen.getByText(/element/i);

  expect(tooltip).toBeInTheDocument();
  expect(element).toBeInTheDocument();
});
