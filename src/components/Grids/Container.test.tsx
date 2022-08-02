import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from "components/Grids";
import AppProvider from "components/AppProvider";

it("container renders in the dom", () => {
  render(
    <AppProvider>
      <Container>
        <div>container children</div>
      </Container>
    </AppProvider>,
  );

  const element = screen.getByTestId("app-container");

  expect(element).toBeInTheDocument();
});
