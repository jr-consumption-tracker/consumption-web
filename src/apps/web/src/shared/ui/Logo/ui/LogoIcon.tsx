import { Droplet, Flame, Zap } from "lucide-react";

import { cn } from "@repo/utils";

import type { LogoProps } from "../model/Logo";

type LogoIconProps = Pick<
  LogoProps,
  "scrolled" | "size" | "variant" | "disableHover"
>;

// ─── Size maps ──────────────────────────────────────────────────────────────

const containerSize: Record<string, string> = {
  sm: "w-10 h-10 lg:w-12 lg:h-12",
  md: "w-12 h-12 lg:w-14 lg:h-14",
  lg: "w-14 h-14 lg:w-16 lg:h-16",
  xl: "w-18 h-18 lg:w-20 lg:h-20",
};

const containerScrolled: Record<string, string> = {
  sm: "w-8 h-8 lg:w-10 lg:h-10",
  md: "w-10 h-10 lg:w-12 lg:h-12",
  lg: "w-12 h-12 lg:w-14 lg:h-14",
  xl: "w-16 h-16 lg:w-18 lg:h-18",
};

const iconSizeMd: Record<string, string> = {
  sm: "w-4 h-4 lg:w-5 lg:h-5",
  md: "w-[22px] h-[22px] lg:w-6 lg:h-6",
  lg: "w-6 h-6 lg:w-7 lg:h-7",
  xl: "w-8 h-8 lg:w-9 lg:h-9",
};

const iconSizeSm: Record<string, string> = {
  sm: "w-3.5 h-3.5 lg:w-4 lg:h-4",
  md: "w-4 h-4 lg:w-5 lg:h-5",
  lg: "w-5 h-5 lg:w-[22px] h-[22px]",
  xl: "w-7 h-7 lg:w-8 h-8",
};

const variantGradient: Record<string, string> = {
  default: "from-primary via-primary-dark to-primary-dark shadow-primary/25",
  light:
    "from-primary-light via-primary to-primary-dark shadow-primary-light/25",
  dark: "from-primary-dark via-primary-dark to-slate-900 shadow-primary-dark/25",
};

const glowGradient: Record<string, string> = {
  default: "from-primary to-primary-dark",
  light: "from-primary-light to-primary",
  dark: "from-primary-dark to-slate-900",
};

// ─── Component ──────────────────────────────────────────────────────────────

export const LogoIcon = ({
  scrolled = false,
  size = "md",
  variant = "default",
  disableHover = false,
}: LogoIconProps) => {
  const boxClass = scrolled ? containerScrolled[size] : containerSize[size];
  const smallIconClass = cn(
    scrolled ? iconSizeSm[size] : iconSizeMd[size],
    "transition-all duration-500 drop-shadow-lg",
  );
  const zapIconClass = cn(
    scrolled ? iconSizeSm[size] : iconSizeMd[size],
    "text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(250,204,21,1)] transition-all duration-500",
  );

  return (
    <div className="relative">
      {/* Main logo container */}
      <div
        className={cn(
          "bg-linear-to-br shadow-xl transition-all duration-500 flex items-center justify-center rounded-2xl",
          boxClass,
          variantGradient[variant],
          !disableHover &&
            "group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/40",
        )}
      >
        <div className="relative w-full h-full flex items-center justify-center p-2">
          {/* Integrated Energy Core */}
          <div className="relative w-10 h-10 flex items-center justify-center group/core">
            {/* Underlying Energy Foundation (Flame & Droplet) */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-all duration-500">
              {/* Flame - Left side */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 transition-transform duration-500">
                <Flame
                  className={cn(
                    smallIconClass,
                    "text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]",
                  )}
                />
              </div>

              {/* Droplet - Right side */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 transition-transform duration-500">
                <Droplet
                  className={cn(
                    smallIconClass,
                    "text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]",
                  )}
                />
              </div>
            </div>

            {/* Central Hero (Zap) */}
            <div className="relative z-20 transform transition-all duration-500 group-hover:scale-125">
              {/* Aura effect */}
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-yellow-400/40 transition-all duration-700" />

              <Zap className={zapIconClass} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-br rounded-2xl blur-xl opacity-30 transition-opacity duration-500 -z-10 animate-glow-pulse",
          glowGradient[variant],
          !disableHover && "group-hover:opacity-50",
        )}
      />

      {/* Rotating glow ring on hover */}
      {!disableHover && (
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary via-secondary to-primary blur-xl animate-spin-slow" />
        </div>
      )}
    </div>
  );
};
