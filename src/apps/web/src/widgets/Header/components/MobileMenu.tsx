import { useTranslation } from "react-i18next";

import { LanguageSelect } from "@web/features/locale/components/LanguageSelect";
import { MainMenu } from "@web/features/navigation/components/MainMenu";

interface MobileMenuProps {
  styles: string;
}

export const MobileMenu = ({ styles }: MobileMenuProps) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles}>
      <nav className="flex flex-col gap-4">
        <MainMenu mobile />
        <div className="h-px bg-white/5 my-2" />
        <div className="flex items-center justify-between px-4">
          <LanguageSelect />
        </div>
        <button className="w-full py-4 rounded-3xl bg-primary text-white font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40">
          {t("header.cta.startFree")}
        </button>
      </nav>
    </div>
  );
};

MobileMenu.displayName = "MobileMenu";
