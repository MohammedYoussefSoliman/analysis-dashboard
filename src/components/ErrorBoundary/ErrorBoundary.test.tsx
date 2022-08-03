import React from "react";
import { render, screen } from "@testing-library/react";
import withAppProviders from "components/AppProvider/withAppProvider";
import Component from "components/ErrorBoundary";
import { ErrorBoundaryProps } from "./types";

const ErrorBoundary = withAppProviders<ErrorBoundaryProps>(Component);

it("component has no error and renders in the dom", () => {
  render(
    <ErrorBoundary error={false}>
      <div>rendered without errors</div>
    </ErrorBoundary>,
  );

  const element = screen.getByText(/rendered without errors/i);

  expect(element).toBeInTheDocument();
});

it("error boundary navigates to error page", () => {
  render(
    <ErrorBoundary error>
      <div>rendered without errors</div>
    </ErrorBoundary>,
  );

  const element = screen.queryByText(/rendered without errors/i);

  expect(element).not.toBeTruthy();
});
