import { useTranslation } from "react-i18next";

/**
 * HeroHeader - Nadpis a podnadpis pro Hero sekci
 */
export const HeroHeader = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight text-text-main sm:text-7xl md:text-8xl">
        {t("hero.header.title_main")} <br />
        <span className="bg-linear-to-r from-primary via-brand-500 to-accent bg-clip-text text-transparent drop-shadow-sm">
          {t("hero.header.title_highlight")}
        </span>
      </h1>
    </>
  );
};

HeroHeader.displayName = "HeroHeader";
