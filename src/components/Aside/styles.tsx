import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "components/Grids";

const Wrapper = styled(Flex)`
  overflow-x: hidden;
  max-height: calc(73vh - 100px);
  .content {
    overflow-y: auto;
    flex: 1;
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
  }
`;

export default Wrapper;
