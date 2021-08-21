import { atom, useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme, ThemeType, themeSelector } from "styles";
import { I18nextProvider } from "react-i18next";
import i18n from "modules/i18n";
import { app } from "store";
import AppRouter from "./AppRouter";

const App = () => {
  const appTheme = useRecoilValue(app.theme);

  return (
    <ThemeProvider theme={themeSelector(appTheme)}>
      <I18nextProvider i18n={i18n}>
        <AppRouter />
        <GlobalStyle />
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
