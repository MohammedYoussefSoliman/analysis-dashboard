import { IconButtonPropsType } from "../types";
import StyledButton from "./styles";

export default function IconButton({
  Icon,
  iconColor,
  iconSize,
  color,
  iconProps,
  ...rest
}: IconButtonPropsType) {
  return (
    <StyledButton data-testid="button-icon" color={color} {...rest}>
      <Icon color={iconColor || color} size={iconSize} {...iconProps} />
    </StyledButton>
  );
}
