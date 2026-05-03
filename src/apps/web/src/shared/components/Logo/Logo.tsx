import { useTranslation } from "react-i18next";

import { cn } from "@repo/utils";
import { Link } from "@tanstack/react-router";

import { LogoIcon } from "./components/LogoIcon";
import { LogoText } from "./components/LogoText";

import type { LogoProps } from "./types/LogoProps";

/**
 * Logo — brand identity component.
 *
 * Orchestrates routing logic and delegates rendering to LogoIcon and LogoText.
 * When `to` is set, wraps everything in a TanStack Router Link.
 */
export const Logo = ({
  to = "/",
  className,
  scrolled = false,
  showText = true,
  size = "md",
  disableHover = false,
  variant = "default",
}: LogoProps) => {
  const { t } = useTranslation("common");

  const content = (
    <div
      className={cn(
        "flex items-center gap-3",
        !disableHover && "group",
        className,
      )}
    >
      <LogoIcon
        scrolled={scrolled}
        size={size}
        variant={variant}
        disableHover={disableHover}
      />
      {showText && (
        <LogoText scrolled={scrolled} size={size} variant={variant} />
      )}
    </div>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={cn(!disableHover && "group")}
        aria-label={t("logo.ariaLabel")}
      >
        {content}
      </Link>
    );
  }

  return content;
};
