import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "components/Loader";
import AppProvider from "components/AppProvider";

it("main button renders in the dom", () => {
  render(
    <AppProvider>
      <Loader />
    </AppProvider>,
  );

  const loader = screen.getByTestId("spinner-wrapper");

  expect(loader).toBeInTheDocument();
});
