import { useTranslation } from "react-i18next";
import { LanguageEnum, type LanguageEnumValue } from "../../enums/LanguageEnum";

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as LanguageEnumValue;

  const toggleLanguage = () => {
    const nextLang =
      currentLang === LanguageEnum.CS ? LanguageEnum.EN : LanguageEnum.CS;
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition-all duration-300"
      aria-label="Změnit jazyk"
    >
      <span className="text-[10px] font-black uppercase tracking-tighter text-text-muted group-hover:text-text-main transition-colors">
        {currentLang === LanguageEnum.CS ? "CZ" : "EN"}
      </span>
      {/* Liquid indicator */}
      <span className="absolute inset-0 rounded-full border border-white/0 group-hover:border-primary/40 transition-all duration-500 scale-75 group-hover:scale-100" />
    </button>
  );
};
