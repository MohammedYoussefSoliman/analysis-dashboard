import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { TooltipPosition } from "./types";
import { calculateElementPosition } from "./mixins";

type WrapperType = {
  position: TooltipPosition;
  forcedConfigs: Array<TooltipPosition>;
};

const Wrapper = styled("div")<WrapperType>`
  label: tooltip-wrapper;
  position: relative;
  height: fit-content;
  .content {
    position: absolute;
    height: 30px;
    border-radius: 4px;
    z-index: 3000;
    width: max-content;
    max-width: 200px;
    ${({ theme }) => css`
      background-color: ${theme.colors.opposite[300]};
      color: ${theme.colors.shades[100]};
    `}
    ${({ position, forcedConfigs }) =>
      calculateElementPosition(position, forcedConfigs)}
  }
`;

export default Wrapper;
