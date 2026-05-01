import { useTranslation } from "react-i18next";

import { LanguageSelect } from "@web/features/locale";
import { MainMenu } from "@web/features/navigation";
import { ThemeSelect } from "@web/features/theme";

interface MobileMenuProps {
  styles: string;
}

export const MobileMenu = ({ styles }: MobileMenuProps) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles}>
      <nav className="flex flex-col gap-4">
        {/* Navigation links */}
        <MainMenu mobile />

        {/* Divider */}
        <div className="h-px bg-white/5 my-2" />

        {/* Language & Theme toggles */}
        <div className="flex items-center justify-center gap-4 px-4">
          <LanguageSelect />
          <ThemeSelect />
        </div>

        {/* CTA Button */}
        <button
          className="w-full py-4 rounded-3xl bg-primary text-white font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          aria-label={t("header.cta.startFree")}
        >
          {t("header.cta.startFree")}
        </button>
      </nav>
    </div>
  );
};

MobileMenu.displayName = "MobileMenu";
