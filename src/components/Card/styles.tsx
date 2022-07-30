import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Flex } from "components/Grids";
import tinycolor from "tinycolor2";
import { StyledCardType } from "./types";

const Wrapper = styled(Flex)<StyledCardType>`
  all: unset;
  position: relative;
  border-radius: 5px;
  ${({ withBorder, color, theme }) =>
    withBorder &&
    css`
      border: 2px solid ${color || theme.colors.shades[500]};
    `}
  ${({ color, theme }) =>
    css`
      background-color: ${theme.colors.shades[200]};
      &:hover {
        background-color: ${tinycolor(color || theme.colors.shades[500])
          .setAlpha(0.2)
          .toString()};
      }
    `}
`;

export default Wrapper;
