import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import getTheme from "theme";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typography from "components/Typography";
import Container from "components/Grids/Container";
import FontSetup from "theme/GlobalStyles/FontsSetup";
import GlobalStyles from "theme/GlobalStyles/GlobalStyles";
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
        <Container>
          <Typography.H2 text="this is app" />
        </Container>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
