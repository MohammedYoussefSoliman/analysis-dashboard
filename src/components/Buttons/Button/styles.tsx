import { css } from "@emotion/react";
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { StyledIconButtonPropsType } from "../types";
import { resolveColorStyles } from "../mixins";

const shouldForwardProp = (prop: string) =>
  isPropValid(prop) && !["color"].includes(prop);

const StyledButton = styled("button", {
  shouldForwardProp,
})<StyledIconButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  min-width: 120px;
  padding: 8px 32px;
  height: 40px;
  border-radius: 10px;
  ${({ theme, color }) =>
    resolveColorStyles(color || theme.colors.text.primary, true)}
  cursor: pointer;
  ${({ size }) =>
    size === "lg" &&
    css`
      height: 60px;
    `};
  ${({ size }) =>
    size === "sm" &&
    css`
      height: 30px;
    `};
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 20px;
    `};
  &:disabled {
    ${({ theme }) => css`
      color: ${theme.colors.text.disabled};
      border: 1px solid ${theme.colors.shades[400]};
    `}
  }
`;

export default StyledButton;
