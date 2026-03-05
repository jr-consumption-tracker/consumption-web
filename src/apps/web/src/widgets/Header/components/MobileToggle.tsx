import { useTranslation } from "react-i18next";

import { ControlModule } from "./ControlModule";

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
    <div className="lg:hidden flex items-center gap-3">
      <ControlModule />
      <button
        onClick={toggleMobileMenu}
        className={styles}
        aria-label={t("header.aria.menu")}
      >
        <span
          className={[
            "h-0.5 bg-text-main transition-all duration-300",
            mobileOpen ? "w-5 translate-y-1.5 rotate-45" : "w-4",
          ].join(" ")}
        />
        <span
          className={[
            "h-0.5 bg-text-main transition-all duration-300",
            mobileOpen ? "opacity-0" : "w-4",
          ].join(" ")}
        />
        <span
          className={[
            "h-0.5 bg-text-main transition-all duration-300",
            mobileOpen ? "w-5 -translate-y-1.5 -rotate-45" : "w-4",
          ].join(" ")}
        />
      </button>
    </div>
  );
};

MobileToggle.displayName = "MobileToggle";
