import "styled-components";

declare module "styled-components" {
  export interface PaletteProps {
    white: string;
    black: string;
  }

  export interface StyledThemeProps {
    palette: PaletteProps;
  }
}
