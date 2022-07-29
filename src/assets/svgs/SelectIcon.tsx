import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

function SelectIcon({ size, color }: SVGprop) {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 22}
      height={size || 22}
      viewBox="0 0 22 22"
    >
      <g transform="translate(-344 -805.539)">
        <path
          id="Vector"
          d="M13,21H7c-2.841,0-4.774-.609-6.082-1.918S-1,15.841-1,13V7C-1,4.159-.391,2.226.918.918S4.159-1,7-1h6c2.841,0,4.774.609,6.082,1.918S21,4.159,21,7v6c0,2.841-.609,4.774-1.918,6.082S15.841,21,13,21ZM7,1c-2.276,0-3.759.423-4.668,1.332S1,4.724,1,7v6c0,2.276.423,3.759,1.332,4.668S4.724,19,7,19h6c2.276,0,3.759-.423,4.668-1.332S19,15.276,19,13V7c0-2.276-.423-3.759-1.332-4.668S15.276,1,13,1Z"
          transform="translate(345 806.539)"
          fill={color || theme.colors.opposite[100]}
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M3.53,4.52a1,1,0,0,1-.706-.292L-.706.708a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L3.53,2.108,6.354-.708a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-3.53,3.52A1,1,0,0,1,3.53,4.52Z"
          transform="translate(351.47 815.18)"
          fill={color || theme.colors.opposite[100]}
        />
      </g>
    </svg>
  );
}

export default SelectIcon;
