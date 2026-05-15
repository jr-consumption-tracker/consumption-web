import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/react";

import { useThemeToggle } from "../../model/hooks/useThemeToggle";

/**
 * ThemeSelect - A premium theme toggle component for switching between light and dark modes.
 * Uses inline Tailwind utility classes for styling to comply with project rules.
 */
export const ThemeSelect = () => {
  const { t } = useTranslation("common");
  const { isDark, handleThemeToggle } = useThemeToggle();

  return (
    <div className="relative group cursor-pointer w-fit">
      {/* Outer glow effect - "Color smudge" around the button */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/30 to-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl scale-150 pointer-events-none" />

      <Button
        isIconOnly
        variant="ghost"
        size="lg"
        onPress={handleThemeToggle}
        className="relative overflow-hidden rounded-2xl transition-all duration-300 bg-transparent hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg"
        aria-label={t("header.aria.theme")}
      >
        {/* Inner gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

        {/* Icon container with rotation */}
        <div className="relative z-10 transition-all duration-500 group-hover:rotate-180">
          {isDark ? (
            <Sun className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          ) : (
            <Moon className="w-6 h-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
          )}
        </div>

        {/* Energy wave animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
      </Button>
    </div>
  );
};

ThemeSelect.displayName = "ThemeSelect";
