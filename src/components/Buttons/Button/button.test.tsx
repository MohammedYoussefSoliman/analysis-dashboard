import React from "react";
import { render } from "@testing-library/react";
import { Button } from "components/Buttons";
import AppProvider from "components/AppProvider";

it("renders in the dom", () => {
  render(
    <AppProvider>
      <Button>This is button</Button>
    </AppProvider>,
  );
});
