import React from "react";
import { useTranslation } from "react-i18next";
import StyledText from "./styles";
import { TypographyPropsType } from "./types";

function Text({ text, ...rest }: TypographyPropsType) {
  const textLength = `${text}`.length;

  const { t } = useTranslation();

  return (
    <StyledText length={textLength} {...rest}>
      {t(`${text}`)}
    </StyledText>
  );
}

export default Text;
