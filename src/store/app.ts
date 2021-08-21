import { atom } from "recoil";
import { ThemeType } from "styles";

export const theme = atom<ThemeType | undefined>({
  key: "app-theme",
  default: localStorage.getItem("theme") as ThemeType,
});
