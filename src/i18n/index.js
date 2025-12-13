import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/i18n/translations/en.json";
import zh from "@/i18n/translations/zh.json";
import kr from "@/i18n/translations/kr.json";

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  kr: { translation: kr },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "zh", "kr"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"], // CHECKS localStorage FIRST
      caches: ["localStorage"], // SAVES to localStorage
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18n;
