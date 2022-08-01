import { css } from "@emotion/react";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { resolveColorStyles, mangeIconButtonSize } from "../mixins";
import { StyledIconButtonPropsType } from "../types";

const shouldForwardProp = (prop: string) =>
  isPropValid(prop) && !["color"].includes(prop);

const StyledIconButton = styled("button", {
  shouldForwardProp,
})<StyledIconButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  ${({ color, withBorder }) => resolveColorStyles(color, withBorder)};
  ${({ size }) => mangeIconButtonSize(size || "md")};
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
    `};
`;

export default StyledIconButton;
