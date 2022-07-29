import React from "react";

export type TooltipPosition = "top" | "bottom" | "right" | "left";

export type TooltipType = {
  children: React.ReactNode;
  title: string | React.ReactNode;
  position?: TooltipPosition;
};
