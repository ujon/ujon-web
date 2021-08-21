import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { TextButton1 } from "components/button";
import { Theme, ThemeType } from "styles";
import { app } from "store";
import Section from "./Section";

const ThemeSection = () => {
  const [theme, setTheme] = useRecoilState(app.theme);
  const { t } = useTranslation();

  const handleTheme = useCallback((theme: ThemeType) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  }, []);

  const buildContent = Object.keys(Theme)
    .sort()
    .map((v, index) => {
      return (
        <TextButton1
          key={`setting_theme_${index}`}
          onClick={() => handleTheme(v as ThemeType)}
        >
          {t(`theme.${v}`)}
        </TextButton1>
      );
    });

  return <Section title={t(`setting.theme`)}>{buildContent}</Section>;
};

export default ThemeSection;
