import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import getTheme from "theme";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "app/layout";
import FontSetup from "theme/GlobalStyles/FontsSetup";
import GlobalStyles from "theme/GlobalStyles/GlobalStyles";
import AppRouts from "app/routes";
import { RootState } from "state";

function App() {
  const { mode, language } = useSelector((state: RootState) => state.ui);

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
