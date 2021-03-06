import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import resources from "assets/locales";

if (process.env.NODE_ENV === "development") console.log(resources);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ["en", "ko"],
    interpolation: { escapeValue: false },
    keySeparator: ".",
  });

export default i18n;
