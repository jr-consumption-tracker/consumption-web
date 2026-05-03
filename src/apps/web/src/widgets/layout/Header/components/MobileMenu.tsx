import { useTranslation } from "react-i18next";

import { LanguageSelect } from "@web/features/locale";
import { MainMenuMobile } from "@web/features/navigation";
import { ThemeSelect } from "@web/features/theme";

interface MobileMenuProps {
  styles: string;
}

export const MobileMenu = ({ styles }: MobileMenuProps) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles}>
      <div className="flex flex-col h-full">
        {/* 1. Navigation */}
        <nav className="flex-1">
          <div className="flex flex-col gap-1 [&_a]:flex [&_a]:items-center [&_a]:w-full [&_a]:py-4 [&_a]:px-4 [&_a]:text-[17px] [&_a]:font-medium [&_a]:text-slate-700 dark:[&_a]:text-slate-200 [&_.active]:text-blue-600 dark:[&_.active]:text-blue-400 [&_.active]:bg-blue-50 dark:[&_.active]:bg-blue-500/10 [&_.active]:rounded-2xl [&_a]:transition-all [&_a]:rounded-2xl [&_a:hover]:bg-slate-50 dark:[&_a:hover]:bg-white/5">
            <MainMenuMobile />
          </div>
        </nav>

        {/* 2. Utility Row */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/10 mb-6">
          <div className="flex items-center justify-between gap-4">
            {/* LEFT: Dark Mode */}
            <label className="flex-1 flex items-center justify-center gap-2 h-13 px-4 rounded-2xl cursor-pointer">
              <div className="flex items-center justify-center scale-125 pointer-events-none">
                <ThemeSelect />
              </div>
              <span className="text-[15px] font-semibold text-slate-700 dark:text-slate-300">
                {t("header.mode", "Režim")}
              </span>
            </label>

            {/* RIGHT: Language */}
            <label className="flex-1 flex items-center justify-center gap-2 h-13 px-4 rounded-2xl cursor-pointer">
              <div className="flex items-center justify-center scale-125 pointer-events-none">
                <div className="[&>button>span:last-child]:hidden [&>button>p]:hidden [&_span.text-sm]:hidden">
                  <LanguageSelect />
                </div>
              </div>
              <span className="text-[15px] font-semibold text-slate-700 dark:text-slate-300">
                {t("header.language", "Jazyk")}
              </span>
            </label>
          </div>
        </div>

        {/* 3. CTA Section */}
        <div className="mt-8 pt-2">
          <button
            className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[15px] tracking-wide transition-all shadow-[0_8px_16px_-6px_rgba(37,99,235,0.4)] flex justify-center items-center active:scale-[0.98]"
            aria-label={t("header.cta.startFree")}
          >
            {t("header.cta.startFree", "ZAČÍT ZDARMA")}
          </button>
        </div>
      </div>
    </div>
  );
};

MobileMenu.displayName = "MobileMenu";
