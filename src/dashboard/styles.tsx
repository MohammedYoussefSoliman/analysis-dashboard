import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Flex } from "components/Grids";
import devices from "theme/sizes";

const Paper = styled(Flex)`
  label: paper;
  ${({ theme }) => css`
    background-color: ${theme.colors.shades[300]};
  `}
  border-radius: 5px;
  padding: 16px;
  ${devices.md} {
    border-radius: 7.5px;
    padding: 24px;
  }
  ${devices.xl} {
    border-radius: 10px;
    padding: 36px;
  }
`;

export default Paper;
