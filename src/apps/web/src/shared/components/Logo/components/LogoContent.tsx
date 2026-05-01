import { cn } from "@repo/utils";

import { logoContainerVariants } from "../styles/logoContainerVariants";
import { LogoIcon } from "./LogoIcon";
import { LogoText } from "./LogoText";

import type { LogoProps } from "../types/LogoProps";

type LogoContentProps = Omit<LogoProps, "to">;

export const LogoContent = ({
  scrolled = false,
  showText = true,
  className = "",
  size = "md",
  disableHover = false,
  variant = "default",
}: LogoContentProps) => {
  return (
    <div className={cn(logoContainerVariants({ disableHover }), className)}>
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
};

LogoContent.displayName = "LogoContent";
