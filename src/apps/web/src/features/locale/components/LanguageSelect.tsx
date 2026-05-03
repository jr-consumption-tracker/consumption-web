import { useTranslation } from "react-i18next";

import { Button } from "@heroui/react";

import { LanguageEnum } from "../constants/LanguageEnum";

import type { LanguageEnumValue } from "../constants/LanguageEnum";

interface FlagProps {
  country: "cz" | "en";
  className?: string;
}

const Flag = ({ country, className }: FlagProps) => {
  if (country === "cz") {
    return (
      <svg
        viewBox="0 0 32 32"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" fill="white" />
        <path d="M0 16H32V32H0V16Z" fill="#D7141A" />
        <path d="M0 0L16 16L0 32V0Z" fill="#11457E" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H32V32H0V0Z" fill="#012169" />
      <path d="M0 0L32 32M32 0L0 32" stroke="white" strokeWidth="4" />
      <path d="M0 0L32 32M32 0L0 32" stroke="#C8102E" strokeWidth="2.5" />
      <path d="M16 0V32M0 16H32" stroke="white" strokeWidth="6" />
      <path d="M16 0V32M0 16H32" stroke="#C8102E" strokeWidth="4" />
    </svg>
  );
};

Flag.displayName = "Flag";

export const LanguageSelect = () => {
  const { t, i18n } = useTranslation("common");
  const currentLang = i18n.language as LanguageEnumValue;
  const isCzech = currentLang === LanguageEnum.CS;

  const handleSelectLanguage = () => {
    const nextLang =
      currentLang === LanguageEnum.CS ? LanguageEnum.EN : LanguageEnum.CS;
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="relative group cursor-pointer w-fit">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/30 to-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl scale-150 pointer-events-none" />
      <Button
        isIconOnly
        variant="ghost"
        size="lg"
        onPress={handleSelectLanguage}
        className="relative overflow-hidden rounded-2xl transition-all duration-300 bg-transparent hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg"
        aria-label={t("header.aria.language")}
      >
        <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        <div className="relative z-10 transition-all duration-500 group-hover:rotate-12">
          <Flag
            country={isCzech ? "en" : "cz"}
            className="w-6 h-6 rounded-full object-cover shadow-sm saturate-[0.6] opacity-70 transition-all duration-300 group-hover:saturate-100 group-hover:opacity-100"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-background/30 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
      </Button>
    </div>
  );
};

LanguageSelect.displayName = "LanguageSelect";
