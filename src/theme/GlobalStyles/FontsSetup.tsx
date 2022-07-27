import { Global, css } from "@emotion/react";
import segeoUI from "assets/fonts";

const fontFaceGenerator = (
  name: string,
  woff: string,
  woff2: string,
  weight: number,
) => {
  return css`
    @font-face {
      font-family: ${name};
      src: url(${woff2}) format("woff2"), url(${woff}) format("woff");
      font-weight: ${weight};
    }
  `;
};

export default function FontsStyles() {
  return (
    <Global
      styles={css`
        ${segeoUI.weights.map((fontWeight) =>
          fontFaceGenerator(
            segeoUI.name,
            fontWeight.woff,
            fontWeight.woff2,
            fontWeight.weight,
          ),
        )}
      `}
    />
  );
}
