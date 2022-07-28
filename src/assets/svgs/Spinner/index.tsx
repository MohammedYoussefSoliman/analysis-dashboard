import { useTheme } from "@emotion/react";
import StyledSpinner from "./styles";
import { SpinnerProps } from "./types";

function Spinner({ size, color, thickness }: SpinnerProps) {
  const theme = useTheme();

  return (
    <StyledSpinner width={size || 50} height={size || 50} viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth={thickness || 8}
        strokeLinecap="round"
        stroke={color || theme.colors.info}
      />
    </StyledSpinner>
  );
}

export default Spinner;

Spinner.defaultProps = {
  size: 24,
};
