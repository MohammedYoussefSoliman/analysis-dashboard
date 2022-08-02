import React from "react";
import { render, screen } from "@testing-library/react";
import Aside from "components/Aside";
import AppProvider from "components/AppProvider";

it("aside renders in the dom", () => {
  render(
    <AppProvider>
      <Aside header={<div>this is aside header</div>}>
        <div>aside children</div>
      </Aside>
    </AppProvider>,
  );

  const aside = screen.getByTestId("aside");

  expect(aside).toBeInTheDocument();
});
