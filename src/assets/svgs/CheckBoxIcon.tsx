import { useTheme } from "@emotion/react";
import { SVGprop } from "./types";

type CheckboxType = {
  checked: boolean;
} & SVGprop;

function CheckBoxIcon({ size, color, checked }: CheckboxType) {
  const theme = useTheme();

  if (checked)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        data-testid="checked-icon"
      >
        <path
          id="Icon_material-radio-button-checked"
          data-name="Icon material-radio-button-checked"
          d="M15,9a6,6,0,1,0,6,6A6,6,0,0,0,15,9Zm0-6A12,12,0,1,0,27,15,12,12,0,0,0,15,3Zm0,21.6A9.6,9.6,0,1,1,24.6,15,9.6,9.6,0,0,1,15,24.6Z"
          transform="translate(-3 -3)"
          fill={color || theme.colors.opposite[100]}
        />
      </svg>
    );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      data-testid="checked-icon"
    >
      <path
        id="Icon_material-radio-button-unchecked"
        data-name="Icon material-radio-button-unchecked"
        d="M15,3A12,12,0,1,0,27,15,12,12,0,0,0,15,3Zm0,21.6A9.6,9.6,0,1,1,24.6,15,9.6,9.6,0,0,1,15,24.6Z"
        transform="translate(-3 -3)"
        fill={color || theme.colors.opposite[100]}
      />
    </svg>
  );
}

export default CheckBoxIcon;
