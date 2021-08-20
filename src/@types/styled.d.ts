import "styled-components";

declare module "styled-components" {
  export interface HSLA {
    hue: number;
    saturation: number;
    lightness: number;
    alpha?: number;
  }

  export interface PaletteProps {
    white: HSLA;
    black: HSLA;
    ecruWhite: HSLA;
    gallery: HSLA;
    mineShaft: HSLA;
    radicalRed: HSLA;
    darkBlue: HSLA;
  }

  export interface DefaultTheme {
    palette: PaletteProps;
    primary: HSLA;
    secondary: HSLA;
    background: HSLA;
    text: HSLA;
  }
}
