import styled from "@emotion/styled";
import CSS from "csstype";
import { css } from "@emotion/react";

type SpinnerWrapperProps = {
  wrapperPadding?: CSS.Property.Padding;
  size?: CSS.Property.Width;
};

const SpinnerWrapper = styled("div")<SpinnerWrapperProps>`
  position: relative;
  ${({ wrapperPadding }) =>
    wrapperPadding &&
    css`
      padding: ${wrapperPadding};
    `}
  ${({ size }) =>
    size &&
    css`
      width: ${size};
      height: ${size};
    `}
`;

export default SpinnerWrapper;
