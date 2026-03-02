import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import {
  LanguageEnum,
  LanguageEnumKeys,
} from "@web/features/locale/enums/LanguageEnum";

const selectedLanguage = localStorage.getItem("i18nextLng") || LanguageEnum.CS;

i18n
  // Load translation using xhr -> see /locales
  // Learn more: https://github.com/i18next/i18next-http-backend
  .use(HttpApi)
  // Detect user language
  // Learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  // For all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: selectedLanguage,
    fallbackLng: LanguageEnum.CS,
    supportedLngs: LanguageEnumKeys,
    debug: import.meta.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
    ns: ["common", "home", "auth"],
    defaultNS: "common", // (Default Namespace) určuje výchozí jmenný prostor, který se použije, když při překladu explicitně nespecifikuješ, ze kterého namespace chceš text načíst.
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json?${import.meta.env.PACKAGE_VERSION}`,
    },
  });

export default i18n;
