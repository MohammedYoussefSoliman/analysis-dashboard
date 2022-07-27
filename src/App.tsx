import { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import getTheme from "theme";
import FontSetup from "theme/GlobalStyles/FontsSetup";
import GlobalStyles from "theme/GlobalStyles/GlobalStyles";
import { RootState } from "state";

function App() {
  const { mode, language } = useSelector((state: RootState) => state.ui);

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <FontSetup />
      <GlobalStyles />
      <Helmet
        htmlAttributes={{
          lang: language,
          dir: language === "en" ? "ltr" : "rtl",
        }}
      />
      <div>
        <h2>app</h2>
      </div>
    </ThemeProvider>
  );
}

export default App;
