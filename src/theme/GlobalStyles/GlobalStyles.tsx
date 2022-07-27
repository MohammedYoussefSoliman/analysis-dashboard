import React from "react";
import { Global, css, useTheme } from "@emotion/react";

export default function GlobalStyles() {
  const theme = useTheme();
  const { font, colors } = theme;
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: inherit;
          &:hover {
            text-decoration: none;
          }
        }

        img {
          display: block;
        }

        ul {
          margin: 0 !important;
        }

        body {
          font-family: ${font};
          width: 100%;
          white-space: normal;
          background-color: ${colors.shades[100]};
        }
      `}
    />
  );
}
