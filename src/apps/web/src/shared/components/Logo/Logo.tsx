import { useTranslation } from "react-i18next";

import { Link } from "@tanstack/react-router";

import { LogoContent } from "./components/LogoContent";
import { logoLinkVariants } from "./styles/logoLinkVariants";

import type { LogoProps } from "./types/LogoProps";

/**
 * Logo - Pure Orchestrator for the brand identity
 * Handles routing logic and delegates rendering to LogoContent
 */
export const Logo = (props: LogoProps) => {
  const { to = "/", disableHover = false } = props;
  const { t } = useTranslation("common");

  if (to) {
    return (
      <Link
        to={to}
        className={logoLinkVariants({ disableHover })}
        aria-label={t("logo.ariaLabel")}
      >
        <LogoContent {...props} />
      </Link>
    );
  }

  return <LogoContent {...props} />;
};

Logo.displayName = "Logo";
