import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingScreen from "components/LoadingScreen";
import AppProvider from "components/AppProvider";

it("main button renders in the dom", () => {
  render(
    <AppProvider>
      <LoadingScreen />
    </AppProvider>,
  );

  const loader = screen.getByTestId("spinner-wrapper");

  expect(loader).toBeInTheDocument();
});
