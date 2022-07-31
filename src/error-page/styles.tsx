import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  ${({ theme }) => css`
    background-color: ${theme.colors.shades[100]};
  `}
`;

export default Wrapper;
