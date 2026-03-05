import { Flame, Droplet, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

import { cn } from "@repo/utils";

import { logoVariants } from "./styles/logoVariants";

import type { LogoProps } from "./types/LogoProps";

export const Logo = ({
  scrolled = false,
  showText = true,
  size = "md",
  variant = "default",
  className,
  href = "/",
}: LogoProps) => {
  const { t } = useTranslation("common");

  const {
    container,
    iconWrapper,
    glowBase,
    spinRing,
    iconPrimary,
    iconSecondary,
    textContainer,
    textLine1,
    textLine2,
    textUnderline,
  } = logoVariants({ size, variant, scrolled, showText });

  return (
    <a href={href} className={cn(container(), className)}>
      {/* Icon Area */}
      <div className={iconWrapper()}>
        {/* Pulsating glow behind the icon */}
        <div className={glowBase()} />

        {/* Rotating ring around background on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
          <div className={cn(spinRing(), "animate-spin-slow")} />
        </div>

        {/* 3D layered icons */}
        <div className="relative flex items-center justify-center">
          <Droplet
            className={cn(
              "absolute -left-2 text-blue-400 group-hover:-translate-x-1 group-hover:scale-110",
              iconSecondary(),
            )}
            strokeWidth={2.5}
            size={20}
          />
          <Zap
            className={cn("relative z-10 text-amber-400", iconPrimary())}
            strokeWidth={2.5}
          />
          <Flame
            className={cn(
              "absolute -right-2 text-orange-400 group-hover:translate-x-1 group-hover:scale-110",
              iconSecondary(),
            )}
            strokeWidth={2.5}
            size={20}
          />
        </div>
      </div>

      {/* Text Area */}
      {showText && (
        <div className={textContainer()}>
          <span className={textLine1()}>{t("logo.line1")}</span>
          <span className={textLine2()}>
            {t("logo.line2")}
            <span className={textUnderline()} />
          </span>
        </div>
      )}
    </a>
  );
};

Logo.displayName = "Logo";
