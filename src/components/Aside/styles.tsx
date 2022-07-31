import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "components/Grids";
import devices from "theme/sizes";

const Wrapper = styled(Flex)`
  overflow-x: hidden;
  max-height: 420px;
  width: 100%;
  ${devices.md} {
    max-height: calc(73vh - 100px);
  }
  .aside--content {
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
