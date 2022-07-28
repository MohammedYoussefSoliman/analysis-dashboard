import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.svg`
  animation: ${rotate} 1.6s linear infinite;
  & .path {
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

export default StyledSpinner;
