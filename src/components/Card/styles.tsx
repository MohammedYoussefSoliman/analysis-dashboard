import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Flex } from "components/Grids";
import tinycolor from "tinycolor2";
import { StyledCardType } from "./types";

const Wrapper = styled(Flex)<StyledCardType>`
  all: unset;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  ${({ variant, color, theme }) =>
    variant === "outlined"
      ? css`
          border: 2px solid ${color || theme.colors.shades[500]};
        `
      : css`
          border: none;
        `}
  ${({ color, theme, variant }) =>
    css`
      background-color: ${variant === "filled"
        ? color
        : theme.colors.shades[200]};
      &:hover {
        background-color: ${tinycolor(color || theme.colors.shades[500])
          .darken(5)
          .setAlpha(0.4)
          .toString()};
        color: ${theme.colors.shades[100]};
      }
    `}
`;

export default Wrapper;
