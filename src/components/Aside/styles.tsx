import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "components/Grids";

const Wrapper = styled(Flex)`
  overflow-y: auto;
  height: 100%;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    ${({ theme }) => css`
      background: ${theme.colors.opposite[100]};
    `}
  }
  &::-webkit-scrollbar-thumb:hover {
    ${({ theme }) => css`
      background: ${theme.colors.opposite[200]};
    `}
  }
`;

export default Wrapper;
