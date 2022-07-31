import isPropValid from "@emotion/is-prop-valid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { flexGapCalculator, calculateFlexGap, resolveSpacing } from "./mixins";
import { StyledFlexWrapper } from "./types";

const shouldForwardProp = (prop: string) =>
  isPropValid(prop) &&
  !["gap", "width", "wrap", "height", "direction"].includes(prop);

// eslint-disable-next-line prettier/prettier
const Wrapper = styled("div", { shouldForwardProp })<StyledFlexWrapper>`
  ${css`
    label: flex;
  `}
  display: flex;
  ${({ width }) =>
    width
      ? css`
          width: ${width};
        `
      : css`
          width: fit-content;
        `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
    ${({ m }) =>
    m &&
    css`
      margin: ${typeof m === "number" ? `${m}px` : m};
    `}
  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}
    ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
    ${({ withWrap }) =>
    withWrap &&
    css`
      flex-wrap: wrap;
    `}
    ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
    ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `}
    ${({ direction }) =>
    direction
      ? css`
          flex-direction: ${direction};
        `
      : css`
          flex-direction: row;
        `}
    ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
    ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}
    ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
    ${({ gap, persistentGap }) => gap && calculateFlexGap(gap, persistentGap)}
    ${({ gap, direction }) =>
    gap &&
    direction &&
    css`
      @supports not (gap: ${gap}) {
        ${flexGapCalculator(gap, direction)}
      }
    `}

    ${({
    p,
    pb,
    pe,
    ph,
    pl,
    pr,
    ps,
    pt,
    pv,
    m,
    mv,
    mh,
    mt,
    mb,
    ml,
    mr,
    ms,
    me,
  }) =>
    resolveSpacing({
      p,
      pb,
      pe,
      ph,
      pl,
      pr,
      ps,
      pt,
      pv,
      m,
      mv,
      mh,
      mt,
      mb,
      ml,
      mr,
      ms,
      me,
    })}
`;

export default Wrapper;
