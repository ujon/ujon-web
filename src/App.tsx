import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "styles";
import { I18nextProvider } from "react-i18next";
import i18n from "modules/i18n";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <ThemeProvider theme={Theme.light}>
      <I18nextProvider i18n={i18n}>
        <AppRouter />
        <GlobalStyle />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
