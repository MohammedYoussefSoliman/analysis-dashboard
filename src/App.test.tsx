import React from "react";
import { render, screen, act } from "@testing-library/react";
import withAppProviders from "components/AppProvider/withAppProvider";
import App from "./App";

test("renders learn react link", async () => {
  const Application = withAppProviders(App);

  await act(async () => {
    render(<Application />);
  });
  const linkElement = screen.getByTestId("app-layout");
  expect(linkElement).toBeInTheDocument();
});
