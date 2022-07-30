import React from "react";
import CSS from "csstype";

export type CardType = {
  children: React.ReactNode;
  color?: CSS.Property.Color;
  withBorder?: boolean;
  onClick?: () => void;
};

export type StyledCardType = Omit<CardType, "children">;
