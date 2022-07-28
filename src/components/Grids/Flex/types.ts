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
  mt = "marginTop",
  mb = "marginBottom",
  ml = "marginLeft",
  mr = "marginRight",
  mv = "marginBlock",
  mh = "marginInline",
  ms = "marginInlineStart",
  me = "marginInlineEnd",
  p = "padding",
  pt = "paddingTop",
  pb = "paddingBottom",
  pl = "paddingLeft",
  pr = "paddingRight",
  pv = "paddingBlock",
  ph = "paddingInline",
  ps = "paddingInlineStart",
  pe = "paddingInlineEnd",
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
