import CSS from "csstype";
import React from "react";

export type Spacing =
  | "m"
  | "mv"
  | "mh"
  | "mt"
  | "mb"
  | "ml"
  | "mr"
  | "ms"
  | "me"
  | "p"
  | "pv"
  | "ph"
  | "pt"
  | "pb"
  | "pl"
  | "pr"
  | "ps"
  | "pe";

export enum SpacingProperties {
  m = "margin",
  mt = "margin-top",
  mb = "margin-bottom",
  ml = "margin-left",
  mr = "margin-right",
  mv = "margin-block",
  mh = "margin-inline",
  ms = "margin-inline-start",
  me = "margin-inline-end",
  p = "padding",
  pt = "padding-top",
  pb = "padding-bottom",
  pl = "padding-left",
  pr = "padding-right",
  pv = "padding-block",
  ph = "padding-inline",
  ps = "padding-inline-start",
  pe = "padding-inline-end",
}

export type SpacingType = {
  [key in Spacing]?: number | CSS.Property.Padding | CSS.Property.Margin;
};

export type FlexPropsType = {
  children: React.ReactNode;
  width?: CSS.Property.Width;
  basis?: string;
  height?: CSS.Property.Height;
  direction?: CSS.Property.FlexDirection;
  justify?: CSS.Property.JustifyContent;
  align?: CSS.Property.AlignItems;
  gap?: CSS.Property.Gap;
  flex?: CSS.Property.Flex;
  fullWidth?: boolean;
  fullHeight?: boolean;
  persistentGap?: boolean;
  className?: string;
  as?: React.ElementType;
} & SpacingType;

export type StyledFlexWrapper = Omit<FlexPropsType, "children" | "as">;
