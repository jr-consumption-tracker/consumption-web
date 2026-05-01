import { Droplet, Flame, Zap } from "lucide-react";

import { cn } from "@repo/utils";

import { logoColorVariants } from "../styles/logoColorVariants";
import { logoEnergyIconVariants } from "../styles/logoEnergyIconVariants";
import { logoGlowSizeVariants } from "../styles/logoGlowSizeVariants";

import type { LogoProps } from "../types/LogoProps";

type LogoIconProps = Pick<
  LogoProps,
  "scrolled" | "size" | "variant" | "disableHover"
>;

export const LogoIcon = ({
  scrolled = false,
  size = "md",
  variant = "default",
  disableHover = false,
}: LogoIconProps) => {
  return (
    <div className="relative">
      {/* Main logo container */}
      <div
        className={logoColorVariants({
          variant,
          size,
          scrolled,
          disableHover,
        })}
      >
        <div className="relative w-full h-full flex items-center justify-center p-2">
          {/* Integrated Energy Core: Balanced, bounded, professional */}
          <div className="relative w-10 h-10 flex items-center justify-center group/core">
            {/* 1. Underlying Energy Foundation (Flame & Droplet) - Fixed side positions */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-all duration-500">
              {/* Gas (Flame) - Left side (Fixed) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 transition-transform duration-500">
                <Flame
                  className={cn(
                    logoEnergyIconVariants({ size: "sm", scrolled }),
                    "text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.6)]",
                  )}
                />
              </div>

              {/* Water (Droplet) - Right side (Fixed) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 transition-transform duration-500">
                <Droplet
                  className={cn(
                    logoEnergyIconVariants({ size: "sm", scrolled }),
                    "text-blue-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]",
                  )}
                />
              </div>
            </div>

            {/* 2. Central Hero (Zap) - Permanently Yellow */}
            <div className="relative z-20 transform transition-all duration-500 group-hover:scale-125">
              {/* Aura effect stays centered */}
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-yellow-400/40 transition-all duration-700" />

              <Zap
                className={cn(
                  logoEnergyIconVariants({ size, scrolled }),
                  "text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(250,204,21,1)] transition-all duration-500",
                )}
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className={logoGlowSizeVariants({
          variant,
          size,
          scrolled,
          disableHover,
        })}
      />

      {/* Rotating glow ring on hover */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary via-secondary to-primary blur-xl animate-spin-slow" />
      </div>
    </div>
  );
};

LogoIcon.displayName = "LogoIcon";
