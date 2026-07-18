import { useTranslation } from "react-i18next";

import { cn } from "@repo/utils";
import { Link } from "@tanstack/react-router";

import { LogoText } from "./ui/LogoText";

import type { LogoProps } from "./model/Logo";

// ─── Component ───────────────────────────────────────────────────────────────

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
        "flex items-center",
        !disableHover && "group",
        className,
      )}
    >
      {showText && (
        <LogoText scrolled={scrolled} size={size} variant={variant} />
      )}
    </div>
  );

  if (!to) return content;

  return (
    <Link
      to={to}
      className={cn(!disableHover && "group")}
      aria-label={t("logo.ariaLabel")}
    >
      {content}
    </Link>
  );
};
