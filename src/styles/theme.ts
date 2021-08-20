import { DefaultTheme } from "styled-components";
import { palette } from "styles";

const light: DefaultTheme = {
  palette,
  primary: palette.darkBlue,
  secondary: palette.radicalRed,
  background: palette.ecruWhite,
  text: palette.mineShaft,
};

const dark: DefaultTheme = {
  palette,
  primary: palette.darkBlue,
  secondary: palette.radicalRed,
  background: palette.black,
  text: palette.gallery,
};

export const Theme = {
  light,
  dark,
};
export type ThemeType = keyof typeof Theme;
export type Theme = typeof Theme[ThemeType];
