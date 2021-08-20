import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { hslColor } from "utils";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{ 
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    body {
        overflow: hidden;
        background: ${(p) => hslColor(p.theme.background)};
    }
    div, span, p, button, h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => hslColor(theme.text)};
        white-space: pre-line;
    }
    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }`;

export default GlobalStyle;
