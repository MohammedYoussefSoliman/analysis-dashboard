import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "components/Card";
import AppProvider from "components/AppProvider";

it("card renders in the dom", () => {
  render(
    <AppProvider>
      <Card>
        <div>card element</div>
      </Card>
    </AppProvider>,
  );

  const card = screen.getByTestId("app-card");

  expect(card).toBeInTheDocument();
});
