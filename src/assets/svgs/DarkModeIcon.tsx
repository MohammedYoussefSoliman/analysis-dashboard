import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

function DarkModeIcon({ size, color }: SVGprop) {
  const theme = useTheme();

  const heightCoefficient = 1.0423;
  const height = size ? calculateProperty(size, heightCoefficient) : 17;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "16.311"}
      height={height}
      viewBox="0 0 16.311 17.001"
    >
      <path
        d="M10.96,2.492a.5.5,0,0,1,.084.007h.264a.5.5,0,0,1,.341.865,6.19,6.19,0,0,0-1,7.83,6.109,6.109,0,0,0,7.475,2.4.5.5,0,0,1,.651.654A8.468,8.468,0,1,1,5.383,4.6,8.434,8.434,0,0,1,10.96,2.492ZM15.826,15.05A7.1,7.1,0,0,1,9.8,11.73a7.2,7.2,0,0,1,.346-8.193,7.5,7.5,0,0,0,.814,14.957,7.427,7.427,0,0,0,6.375-3.606A7.058,7.058,0,0,1,15.826,15.05Z"
        transform="translate(-2.502 -2.492)"
        fill={color || theme.colors.info}
      />
    </svg>
  );
}

export default DarkModeIcon;
