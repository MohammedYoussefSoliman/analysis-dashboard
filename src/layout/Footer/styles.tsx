import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "components/Grids";

const Wrapper = styled(Flex)`
  label: app-footer;
  height: 40px;
  z-index: 1000;
  ${({ theme }) => css`
    background: ${theme.colors.shades[200]};
    border-top: 1px solid ${theme.colors.shades[400]};
  `}
`;

export default Wrapper;
