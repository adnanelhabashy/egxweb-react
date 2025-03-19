// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslation from "./locales/en/enTranslation.json";
import arTranslation from "./locales/ar/arTranslation.json";
import enLables from "./locales/en/enLabels.json";
import arLabels from "./locales/ar/arLabels.json";

const resources = {
  en: {
    translation: enTranslation,
    labels: enLables,
  },
  ar: {
    translation: arTranslation,
    labels: arLabels,
  },
};

i18n
  .use(LanguageDetector) // Optional: auto-detect language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    ns: ["translation", "lables"],
    defaultNS: "translation", // default namespace if none is specified
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;
