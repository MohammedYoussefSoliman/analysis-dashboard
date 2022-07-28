import { css } from "@emotion/react";
import devices from "theme/sizes";
import CSS, { Property } from "csstype";
import { SpacingProperties, SpacingType, Spacing } from "./types";

// This function calculates the gap between flex container children incase the flex gap property is not supported in old browsers

export const flexGapCalculator = (gap: CSS.Property.Gap, direction = "row") => {
  let gapStyleProperties;
  if (direction === "row") {
    gapStyleProperties = css`
      margin: 0 calc(${gap} / 2);
      &:first-of-type {
        &:lang(en) {
          margin-left: 0;
        }
        &:lang(ar) {
          margin-right: 0;
        }
      }
      &:last-child {
        &:lang(ar) {
          margin-left: 0;
        }
        &:lang(en) {
          margin-right: 0;
        }
      }
    `;
  } else {
    gapStyleProperties = css`
      margin: calc(${gap} / 2) 0;
      &:first-of-type {
        margin-top: 0;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    `;
  }

  return gapStyleProperties;
};

export const calculateFlexGap = (
  gap: number | Property.Gap,
  persistedGap: boolean = false,
) => {
  let cssGap: string;
  if (typeof gap === "number") {
    cssGap = `${gap}px`;
  } else {
    cssGap = gap;
  }

  if (!persistedGap) {
    return css`
      gap: calc(${cssGap} * 0.4);
      ${devices.md} {
        gap: calc(${cssGap} * 0.6);
      }
      ${devices.xl} {
        gap: calc(${cssGap} * 0.8);
      }
      ${devices.xxl} {
        gap: ${cssGap};
      }
    `;
  }

  return css`
    gap: ${cssGap};
  `;
};

export const calculateSpacing = (
  key: Spacing,
  value?: number | CSS.Property.Padding | CSS.Property.Margin,
) => {
  if (!value) return {};
  const property = SpacingProperties[key];
  let cssValue: string;

  if (typeof value === "number") {
    cssValue = `${value}px`;
  } else {
    cssValue = value;
  }
  return {
    [property]: cssValue,
  };
};

export const resolveSpacing = ({ ...props }: SpacingType) => {
  const properties = Object.keys(props) as Spacing[];
  let allProperties = {};
  properties.forEach((property) => {
    if (props[property]) {
      allProperties = {
        ...allProperties,
        ...calculateSpacing(property, props[property]),
      };
    }
  });
  return css(allProperties);
};
