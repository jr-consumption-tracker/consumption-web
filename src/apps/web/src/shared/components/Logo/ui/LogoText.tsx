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
    sm: "text-lg lg:text-xl",
    md: "text-xl lg:text-2xl",
    lg: "text-2xl lg:text-3xl",
    xl: "text-3xl lg:text-4xl",
  },
};

const scrollKey = (v: boolean) => (v ? "scrolled" : "default");

// ─── Component ──────────────────────────────────────────────────────────────

export const LogoText = ({ scrolled = false, size = "md" }: LogoTextProps) => {
  const { t } = useTranslation("common");

  const key = scrollKey(scrolled);

  return (
    <div className="hidden xl:flex flex-col leading-none">
      {/* Top line — "Energy" */}
      <span
        className={cn(
          "tracking-tight uppercase font-semibold opacity-95 text-left",
          "bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent",
          "drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
          "group-hover:from-primary group-hover:to-foreground transition-all duration-700",
          topFont[key][size],
        )}
        style={{ fontFamily: "var(--font-orn)" }}
      >
        {t("logo.line1")}
      </span>

      {/* Bottom line — "Consumption" */}
      <span
        className={cn(
          "font-extrabold tracking-tight -mt-1 flex items-center gap-2 text-left relative",
          "bg-linear-to-r from-primary via-foreground to-primary bg-clip-text text-transparent",
          "drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]",
          "group-hover:from-foreground group-hover:via-primary group-hover:to-foreground transition-all duration-700",
          bottomFont[key][size],
        )}
        style={{ fontFamily: "var(--font-orn)" }}
      >
        {t("logo.line2")}
        <LogoTextDecoration />

        {/* Underline hover effect */}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-primary group-hover:w-full transition-all duration-500" />
      </span>
    </div>
  );
};
