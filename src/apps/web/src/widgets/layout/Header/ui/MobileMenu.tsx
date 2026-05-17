import { useTranslation } from "react-i18next";

import { cn } from "@repo/utils";
import { LanguageSelect } from "@web/features/locale";
import { MainMenuMobile } from "@web/features/navigation";
import { ThemeSelect } from "@web/features/theme";

interface MobileMenuProps {
  isOpen: boolean;
}

/**
 * MobileMenu - Full-screen overlay menu for mobile devices.
 * Styles are inlined to comply with project rules.
 */
export const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { t } = useTranslation("common");

  return (
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-x-0 top-18 bottom-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 ease-in-out lg:hidden",
        "border-t border-white/10 px-6 py-8 overflow-y-auto",
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none",
      )}
    >
      <div className="flex flex-col h-full max-w-lg mx-auto">
        {/* 1. Navigation */}
        <nav className="flex-1">
          <div className="flex flex-col gap-1">
            <MainMenuMobile />
          </div>
        </nav>

        {/* 2. Utility Row */}
        <div className="mt-8 pt-8 border-t border-white/10 mb-6">
          <div className="flex items-center justify-between gap-4">
            {/* LEFT: Dark Mode */}
            <div className="flex-1 flex items-center justify-center gap-2 h-13 px-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center justify-center scale-110">
                <ThemeSelect />
              </div>
              <span className="text-[15px] font-semibold text-text-muted">
                {t("header.mode", "Režim")}
              </span>
            </div>

            {/* RIGHT: Language */}
            <div className="flex-1 flex items-center justify-center gap-2 h-13 px-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex items-center justify-center scale-110">
                <LanguageSelect />
              </div>
              <span className="text-[15px] font-semibold text-text-muted">
                {t("header.language", "Jazyk")}
              </span>
            </div>
          </div>
        </div>

        {/* 3. CTA Section */}
        <div className="mt-4 pb-12">
          <button
            className="w-full py-4 rounded-2xl bg-primary hover:bg-primary-dark text-white font-black text-base tracking-widest uppercase transition-all shadow-xl shadow-primary/20 flex justify-center items-center active:scale-[0.98]"
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
