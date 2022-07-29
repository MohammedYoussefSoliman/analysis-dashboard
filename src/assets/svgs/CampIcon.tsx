import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

function CampIcon({ size, color }: SVGprop) {
  const theme = useTheme();

  const heightCoefficient = 0.75;
  const height = size ? calculateProperty(size, heightCoefficient) : 16.5;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "22"}
      height={height}
      viewBox="0 0 22 16.499"
    >
      <path
        id="Icon_map-campground"
        data-name="Icon map-campground"
        d="M11.72,4.32a1.049,1.049,0,0,0-1.013.589l-7.2,13.553H1.951a1.179,1.179,0,1,0,0,2.356H21.489a1.179,1.179,0,1,0,0-2.356H19.933l-7.2-13.554A1.051,1.051,0,0,0,11.72,4.32Zm0,5.893,4.052,8.25h-8.1Z"
        transform="translate(-0.72 -4.32)"
        fill={color || theme.colors.info}
      />
    </svg>
  );
}

export default CampIcon;
