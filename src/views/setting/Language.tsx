import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { TextButton1 } from "components/button";
import { hslColor } from "utils";
import Section from "./Section";

const LanguageSection = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const buildContent = i18n.languages.sort().map((language, index) => {
    return (
      <TextButton1
        key={`setting_language_${index}`}
        color={i18n.language === language ? hslColor(theme.primary) : undefined}
        onClick={() => i18n.changeLanguage(language)}
      >
        {t(`languages.${language}`)}
      </TextButton1>
    );
  });

  return <Section title={t(`setting.language`)}>{buildContent}</Section>;
};

export default LanguageSection;
