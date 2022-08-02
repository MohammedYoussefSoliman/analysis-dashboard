import { Spinner } from "assets/svgs";
import SpinnerWrapper from "./styles";
import { SpinnerProps } from "./types";

export default function Loader(props: SpinnerProps) {
  const { margin, size, iconSize, iconColor } = props;

  return (
    <SpinnerWrapper
      data-testid="spinner-wrapper"
      wrapperPadding={margin}
      size={`${size}px`}
    >
      <Spinner size={iconSize} color={iconColor} />
    </SpinnerWrapper>
  );
}
