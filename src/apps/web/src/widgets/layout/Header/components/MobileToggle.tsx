import { useTranslation } from "react-i18next";

interface MobileToggleProps {
  mobileOpen: boolean;
  toggleMobileMenu: () => void;
  styles: string;
}

export const MobileToggle = ({
  mobileOpen,
  toggleMobileMenu,
  styles,
}: MobileToggleProps) => {
  const { t } = useTranslation("common");

  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={toggleMobileMenu}
        className={styles}
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
          {/* Top */}
          <span
            className={`absolute h-0.5 w-5 bg-current rounded transition-all duration-300 ease-out
    ${mobileOpen ? "rotate-45" : "-translate-y-1.5"}`}
          />

          {/* Middle */}
          <span
            className={`absolute h-0.5 w-5 bg-current rounded transition-all duration-300 ease-out
    ${mobileOpen ? "opacity-0" : "opacity-100"}`}
          />

          {/* Bottom */}
          <span
            className={`absolute h-0.5 w-5 bg-current rounded transition-all duration-300 ease-out
    ${mobileOpen ? "-rotate-45" : "translate-y-1.5"}`}
          />
        </span>
      </button>
    </div>
  );
};

MobileToggle.displayName = "MobileToggle";
