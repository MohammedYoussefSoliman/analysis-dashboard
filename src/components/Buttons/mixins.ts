/* eslint-disable import/prefer-default-export */
import tinyColor2 from "tinycolor2";
import { css } from "@emotion/react";
import { Property } from "csstype";

export const resolveColorStyles = (
  color: Property.Color,
  withBorder?: boolean,
) => {
  const tinyColor = tinyColor2(color);
  const isLightColor = tinyColor.isLight();
  let hoverColor: string;
  let borderColor: string;

  if (isLightColor) {
    hoverColor = tinyColor.darken(5).setAlpha(0.1).toString();
    borderColor = tinyColor.darken(5).toString();
  } else {
    hoverColor = tinyColor.lighten(5).setAlpha(0.1).toString();
    borderColor = tinyColor.lighten(5).toString();
  }

  return css`
    background: transparent;
    border: ${withBorder ? `1px solid ${borderColor}` : "none"};
    &:hover {
      background: ${hoverColor};
    }
  `;
};

export const mangeIconButtonSize = (size: "sm" | "md" | "lg") => {
  const styledSize = {
    lg: css`
      border-radius: 10px;
      width: 45px;
      height: 45px;
    `,
    md: css`
      border-radius: 7.5px;
      width: 36px;
      height: 36px;
    `,
    sm: css`
      border-radius: 5px;
      width: 30px;
      height: 30px;
    `,
  };

  return styledSize[size];
};
