import { IconButtonPropsType } from "../types";
import StyledButton from "./styles";

export default function IconButton({
  Icon,
  iconColor,
  iconSize,
  color,
  ...rest
}: IconButtonPropsType) {
  return (
    <StyledButton color={color} {...rest}>
      <Icon color={iconColor || color} size={iconSize} />
    </StyledButton>
  );
}
