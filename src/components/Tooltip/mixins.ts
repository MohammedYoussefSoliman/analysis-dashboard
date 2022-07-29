import { css } from "@emotion/react";
import _ from "lodash";
import { TooltipPosition } from "./types";

export const calculateElementPosition = (
  position: TooltipPosition,
  config: Array<TooltipPosition>,
) => {
  let configForcedStyles = {};
  let positionStyles = {};

  config.forEach((dir) => {
    configForcedStyles = {
      [position]: "calc(100% + 3px)",
      [dir]: 0,
      transform: "unset",
    };
  });

  if (position === "bottom" || position === "top") {
    positionStyles = {
      ...positionStyles,
      [position]: "-100%",
      left: "50%",
      transform: "translateX(-50%)",
    };
  }

  if (position === "right" || position === "left") {
    positionStyles = {
      ...positionStyles,
      [position]: "calc(100% + 3px)",
      left: "auto",
      top: "50%",
      transform: "translateY(-50%)",
    };
  }

  if (!_.isEmpty(configForcedStyles)) {
    return css({ ...configForcedStyles });
  }

  return css({ ...positionStyles });
};

export const calculateElementOffset = (config: Array<TooltipPosition>) => {
  let configForcedStyles = {};

  config.forEach((dir) => {
    configForcedStyles = {
      [dir]: "calc(100% + 5px)",
    };
  });

  return css(configForcedStyles);
};

export default calculateElementPosition;
