import { useTranslation } from "react-i18next";

/**
 * HeroMission - Informační blok o poslání aplikace - Typografický styl
 */
export const HeroMission = () => {
  const { t } = useTranslation("home");

  return (
    <div className="mx-auto mt-12 max-w-7xl animate-fade-in-up">
      <div className="relative inline-block text-center px-4 md:px-10 py-8">
        {/* Dekorativní prvek - Uvozovky na pozadí */}
        <div className="absolute top-0 left-0 -mt-2 -ml-2 md:-ml-6 text-8xl md:text-9xl text-primary/10 select-none font-serif hover:text-primary/20 transition-colors pointer-events-none">
          &ldquo;
        </div>

        <p className="relative z-10 text-xl md:text-2xl lg:text-3xl text-text-muted leading-relaxed font-light italic">
          {t("hero.mission.text")}
        </p>

        <div className="absolute bottom-0 right-0 -mb-10 -mr-2 md:-mr-6 text-8xl md:text-9xl text-primary/10 select-none font-serif hover:text-primary/20 transition-colors pointer-events-none">
          &rdquo;
        </div>
      </div>
    </div>
  );
};

HeroMission.displayName = "HeroMission";
