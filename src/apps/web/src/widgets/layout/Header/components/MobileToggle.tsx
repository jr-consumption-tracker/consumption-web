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
        <span
          className={[
            "block h-0.5 bg-current transition-all duration-300 ease-out rounded-full",
            mobileOpen
              ? "w-5 translate-y-1.25 rotate-45"
              : "w-5 -translate-y-0.75",
          ].join(" ")}
          aria-hidden="true"
        />
        <span
          className={[
            "block h-0.5 bg-current transition-all duration-300 ease-out rounded-full w-5",
            mobileOpen ? "opacity-0 scale-0" : "opacity-100 scale-100",
          ].join(" ")}
          aria-hidden="true"
        />
        <span
          className={[
            "block h-0.5 bg-current transition-all duration-300 ease-out rounded-full",
            mobileOpen
              ? "w-5 -translate-y-1.25 -rotate-45"
              : "w-5 translate-y-0.75",
          ].join(" ")}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

MobileToggle.displayName = "MobileToggle";
