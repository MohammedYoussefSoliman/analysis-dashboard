import React from "react";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Grids";
import Spinner from "components/Loader";
import { ButtonPropsType } from "../types";
import StyledButton from "./styles";

export default function Button({
  children,
  color,
  isLoading,
  size = "md",
  ...rest
}: ButtonPropsType) {
  const theme = useTheme();

  return (
    <StyledButton
      color={color || theme.colors.text.secondary}
      size={size}
      {...rest}
    >
      {isLoading ? (
        <Flex gap="8px" align="center">
          <Spinner
            // eslint-disable-next-line no-nested-ternary
            iconSize={size === "sm" ? 14 : size === "md" ? 18 : 24}
            iconColor={theme.colors.info}
          />
          {children}
        </Flex>
      ) : (
        children
      )}
    </StyledButton>
  );
}
