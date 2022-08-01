import React from "react";
import { ThemeProvider } from "@emotion/react";
import getTheme from "theme";
import FontSetup from "theme/GlobalStyles/FontsSetup";
import GlobalStyles from "theme/GlobalStyles/GlobalStyles";
import "app/i18n";

type Props = {
  children: React.ReactNode;
};

function Wrapper({ children }: Props) {
  return (
    <ThemeProvider theme={getTheme("light")}>
      <FontSetup />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default Wrapper;
