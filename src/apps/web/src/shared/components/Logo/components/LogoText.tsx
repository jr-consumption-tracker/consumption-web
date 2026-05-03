import { useTranslation } from "react-i18next";

import { cn } from "@repo/utils";

import { logoTextVariants } from "../styles/logoTextTopVariants";
import { LogoTextDecoration } from "./LogoTextDecoration";

import type { LogoProps } from "../types/LogoProps";
type LogoTextProps = Pick<LogoProps, "scrolled" | "size" | "variant">;

export const LogoText = ({
  scrolled = false,
  size = "md",
  variant = "default",
}: LogoTextProps) => {
  const { t } = useTranslation("common");

  return (
    <div className="hidden xl:flex flex-col leading-none">
      {/* Top text */}
      <span
        className={cn(
          logoTextVariants({ position: "top", variant, size, scrolled }),
        )}
        style={{ fontFamily: `var(--font-orn)` }}
      >
        {t("logo.line1")}
      </span>

      {/* Bottom text */}
      <span
        className={cn(
          logoTextVariants({ position: "bottom", variant, size, scrolled }),
        )}
        style={{ fontFamily: `var(--font-orn)` }}
      >
        {t("logo.line2")}
        <LogoTextDecoration />
        {/* Underline effect */}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-primary group-hover:w-full transition-all duration-500" />
      </span>
    </div>
  );
};

LogoText.displayName = "LogoText";
