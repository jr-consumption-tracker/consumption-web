import { useTranslation } from "react-i18next";

import { cn } from "@repo/utils";

import { LogoTextDecoration } from "./LogoTextDecoration";

import type { LogoProps } from "../model/Logo";

type LogoTextProps = Pick<LogoProps, "scrolled" | "size" | "variant">;

// ─── Font size maps ─────────────────────────────────────────────────────────

const topFont: Record<string, Record<string, string>> = {
  default: { sm: "text-sm", md: "text-sm", lg: "text-base", xl: "text-lg" },
  scrolled: { sm: "text-xs", md: "text-xs", lg: "text-sm", xl: "text-base" },
};

const bottomFont: Record<string, Record<string, string>> = {
  default: {
    sm: "text-xl lg:text-2xl",
    md: "text-2xl lg:text-3xl",
    lg: "text-3xl lg:text-4xl",
    xl: "text-4xl lg:text-5xl",
  },
  scrolled: {
    sm: "text-base lg:text-lg",
    md: "text-lg lg:text-xl",
    lg: "text-xl lg:text-2xl",
    xl: "text-2xl lg:text-3xl",
  },
};

const scrollKey = (v: boolean) => (v ? "scrolled" : "default");

// ─── Component ──────────────────────────────────────────────────────────────

export const LogoText = ({
  scrolled = false,
  size = "md",
  variant = "default",
}: LogoTextProps) => {
  const { t } = useTranslation("common");

  const key = scrollKey(scrolled);
  const reversed = variant === "dark";

  return (
    <div className="flex flex-col leading-none">
      {/* Top line — "Spotřeba" */}
      <span
        className={cn(
          "tracking-tight uppercase font-semibold text-left",
          reversed ? "text-text-main/70" : "text-text-muted",
          topFont[key][size],
        )}
        style={{ fontFamily: "var(--font-orn)" }}
      >
        {t("logo.line1")}
      </span>

      {/* Bottom line — "Energie" */}
      <span
        className={cn(
          "relative inline-block font-extrabold tracking-tight -mt-1 text-left w-fit text-text-main",
          bottomFont[key][size],
        )}
        style={{ fontFamily: "var(--font-orn)" }}
      >
        {t("logo.line2")}
        <LogoTextDecoration reversed={reversed} scrolled={scrolled} />
      </span>

      {/* Spacer — reserves in-flow height for the absolutely positioned
          ribbon below, so the flex column's box (and thus the header's
          items-center) accounts for the ribbon's visual space too. */}
      <div aria-hidden="true" className={scrolled ? "h-2.25" : "h-4"} />
    </div>
  );
};
