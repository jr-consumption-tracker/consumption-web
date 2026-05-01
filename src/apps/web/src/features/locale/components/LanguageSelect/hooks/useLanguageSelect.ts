import { useTranslation } from "react-i18next";

import { LanguageEnum } from "../../../constants/LanguageEnum";

import type { LanguageEnumValue } from "../../../constants/LanguageEnum";

export const useLanguageSelect = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as LanguageEnumValue;

  const isCzech = currentLang === LanguageEnum.CS;

  const handleSelectLanguage = () => {
    const nextLang =
      currentLang === LanguageEnum.CS ? LanguageEnum.EN : LanguageEnum.CS;
    i18n.changeLanguage(nextLang);
  };

  return {
    currentLang,
    isCzech,
    handleSelectLanguage,
  };
};
