import isPropValid from "@emotion/is-prop-valid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  configureAdornment,
  configureFontSize,
  configureHover,
  configureTruncation,
  manageFontSize,
} from "./mixins";
import { StyledTextType } from "./types";

const shouldForwardProp = (prop: string) =>
  isPropValid(prop) && !["fontSize", "height", "color"].includes(prop);

// eslint-disable-next-line prettier/prettier
const StyledText = styled("span", { shouldForwardProp })<StyledTextType>`
  ${({
    fontFamily,
    weight,
    color,
    textDecoration,
    textAlign,
    lineHeight,
    theme,
  }) => css`
    font-family: ${fontFamily || theme.font};
    font-weight: ${weight || "normal"};
    text-decoration: ${textDecoration};
    text-align: ${textAlign};
    line-height: ${lineHeight};
    color: ${color || theme.colors.text.primary};
  `}
  ${({ fontSize, length, isHeader }) =>
    fontSize &&
    configureFontSize(
      isHeader ? manageFontSize(fontSize, length || 1) : fontSize,
    )};
  ${({ capitalizeFirstLetter }) =>
    capitalizeFirstLetter &&
    css`
      &:first-letter {
        text-transform: capitalize;
      }
    `};
  ${({ truncationWidth }) =>
    truncationWidth && configureTruncation(truncationWidth)};
  ${({ startAdornment }) =>
    startAdornment && configureAdornment(startAdornment, "before", "ar")};
  ${({ endAdornment }) =>
    endAdornment && configureAdornment(endAdornment, "after", "ar")};
  ${({ hover }) => hover && configureHover(hover)};
  ${({ direction }) =>
    direction &&
    css`
      direction: ${direction};
    `};
  max-width: 100%;
`;

export default StyledText;
