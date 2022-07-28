import React from "react";
import { Property } from "csstype";
import { ResponsiveSettings } from "theme/types";

export type FontSizeType = ResponsiveSettings | Property.FontSize;

export type HoverType = {
  decoration?: Property.TextDecoration;
  color?: Property.Color;
  fontWeight?: Property.FontWeight;
};

export type TypographyPropsType = {
  text: string | number;
  fontSize?: FontSizeType;
  fontFamily?: Property.FontFamily;
  weight?: number;
  color?: Property.Color;
  textDecoration?: Property.TextDecoration;
  textAlign?: Property.TextAlign;
  lineHeight?: Property.LineHeight;
  isHeader?: boolean;
  direction?: Property.Direction;
  truncationWidth?: Property.Width;
  capitalizeFirstLetter?: boolean;
  startAdornment?: string;
  className?: string;
  endAdornment?: string;
  hover?: HoverType;
  as?: React.ElementType;
};

export type StyledTextType = Omit<
  TypographyPropsType,
  "text" | "as" | "className"
> & {
  length?: number;
};
