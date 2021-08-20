import { useTranslation } from "react-i18next";
import { TextButton1 } from "components/button";
import { Theme, ThemeType } from "styles";
import Section from "./Section";

const ThemeSection = () => {
  const { t } = useTranslation();

  const buildContent = Object.keys(Theme)
    .sort()
    .map((v, index) => {
      return (
        <TextButton1 key={`setting_theme_${index}`} onClick={() => {}}>
          {t(`theme.${v}`)}
        </TextButton1>
      );
    });

  return <Section title={t(`setting.theme`)}>{buildContent}</Section>;
};

export default ThemeSection;
