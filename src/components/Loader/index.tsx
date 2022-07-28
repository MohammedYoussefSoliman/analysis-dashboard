import CSS from "csstype";
import { Spinner } from "assets/svgs";
import SpinnerWrapper from "./styles";

interface SpinnerProps {
  margin?: CSS.Property.Padding;
  size?: number;
  iconSize?: number;
  iconColor?: CSS.Property.Color;
}

export default function Loader(props: SpinnerProps) {
  const { margin, size, iconSize, iconColor } = props;

  return (
    <SpinnerWrapper wrapperPadding={margin} size={`${size}px`}>
      <Spinner size={iconSize} color={iconColor} />
    </SpinnerWrapper>
  );
}
