import { useTranslation } from "react-i18next";
import { cn } from "@repo/utils";

interface MobileToggleProps {
  mobileOpen: boolean;
  toggleMobileMenu: () => void;
  className?: string;
}

/**
 * MobileToggle - Burger menu button for mobile navigation.
 * Styles are inlined to comply with project rules.
 */
export const MobileToggle = ({
  mobileOpen,
  toggleMobileMenu,
  className,
}: MobileToggleProps) => {
  const { t } = useTranslation("common");

  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={toggleMobileMenu}
        className={cn(
          "relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300",
          "bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95",
          "text-text-main hover:text-primary",
          className,
        )}
        aria-label={
          mobileOpen
            ? t("header.aria.closeMenu", "Zavřít menu")
            : t("header.aria.openMenu", "Otevřít menu")
        }
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        type="button"
      >
        <span className="relative flex items-center justify-center w-5 h-5">
          {/* Top line */}
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-current rounded transition-all duration-300 ease-out",
              mobileOpen ? "rotate-45" : "-translate-y-1.5",
            )}
          />

          {/* Middle line */}
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-current rounded transition-all duration-300 ease-out",
              mobileOpen ? "opacity-0" : "opacity-100",
            )}
          />

          {/* Bottom line */}
          <span
            className={cn(
              "absolute h-0.5 w-5 bg-current rounded transition-all duration-300 ease-out",
              mobileOpen ? "-rotate-45" : "translate-y-1.5",
            )}
          />
        </span>
      </button>
    </div>
  );
};

MobileToggle.displayName = "MobileToggle";
