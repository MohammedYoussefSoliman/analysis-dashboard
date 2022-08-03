import React from "react";
import { render, screen } from "@testing-library/react";
import Typography from "components/Typography";
import AppProvider from "components/AppProvider";

it("typography renders in the dom", () => {
  render(
    <AppProvider>
      <Typography text="this is a typography test" />
    </AppProvider>,
  );

  const element = screen.getByText(/this is a typography test/i);

  expect(element).toBeInTheDocument();
});
