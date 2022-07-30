import React from "react";
import { ThemeProvider } from "@emotion/react";
import i18next from "i18next";
import getTheme from "theme";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useAppSelector } from "hooks";
import Layout from "app/layout";
import FontSetup from "theme/GlobalStyles/FontsSetup";
import GlobalStyles from "theme/GlobalStyles/GlobalStyles";
import AppRouts from "app/routes";

function App() {
  const { mode, language } = useAppSelector((state) => state.ui);

  React.useEffect(() => {
    i18next.changeLanguage(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ThemeProvider theme={getTheme(mode)}>
      <HelmetProvider>
        <FontSetup />
        <GlobalStyles />
        <Helmet
          htmlAttributes={{
            lang: language,
            dir: language === "en" ? "ltr" : "rtl",
          }}
        />
        <Layout>
          <AppRouts />
        </Layout>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
