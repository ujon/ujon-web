import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "styles";

const App = () => {
  return (
    <ThemeProvider theme={Theme.light}>
      <h1>This is App</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
