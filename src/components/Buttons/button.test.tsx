import React from "react";
import { CampIcon } from "assets/svgs";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, IconButton } from "components/Buttons";
import AppProvider from "components/AppProvider";
import { ButtonPropsType } from "./types";

type ButtonTestActionsType = {
  ButtonElement: React.ComponentType<ButtonPropsType>;
  disabled?: boolean;
};

function ButtonTestAction({ ButtonElement, disabled }: ButtonTestActionsType) {
  const [action, setAction] = React.useState<boolean>(false);

  return (
    <>
      <ButtonElement onClick={() => setAction(true)} disabled={disabled}>
        click me
      </ButtonElement>
      {action && (
        <div data-testid="btn-action-element">clicked successfully</div>
      )}
    </>
  );
}

it("main button renders in the dom", () => {
  render(
    <AppProvider>
      <Button>This is button</Button>
    </AppProvider>,
  );

  const mainButton = screen.getByTestId("main-button");

  expect(mainButton).toBeInTheDocument();
});

it("icon button renders in the dom", () => {
  render(
    <AppProvider>
      <IconButton color="green" Icon={CampIcon} />
    </AppProvider>,
  );

  const iconButton = screen.getByTestId("button-icon");

  expect(iconButton).toBeInTheDocument();
});

it("button responds to click action", () => {
  render(
    <AppProvider>
      <ButtonTestAction ButtonElement={Button} />
    </AppProvider>,
  );

  const button = screen.getByTestId("main-button");
  userEvent.click(button);
  const affectedElement = screen.getByTestId("btn-action-element");

  expect(affectedElement).toBeInTheDocument();
});

it("button not responding when disabled", () => {
  render(
    <AppProvider>
      <ButtonTestAction ButtonElement={Button} disabled />
    </AppProvider>,
  );

  const button = screen.getByTestId("main-button");
  userEvent.click(button);
  const affectedElement = screen.queryByTestId("btn-action-element");

  expect(affectedElement).not.toBeInTheDocument();
});
