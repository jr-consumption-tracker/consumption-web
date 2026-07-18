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
      <Button
        isIconOnly
        variant="ghost"
        size="lg"
        onPress={handleThemeToggle}
        className="bg-transparent"
        aria-label={t("header.aria.theme")}
      >
        {/* Icon container with rotation */}
        <div className="relative z-10 transition-all duration-500 group-hover:rotate-180">
          {isDark ? (
            <Sun className="w-6 h-6 text-text-muted group-hover:text-primary transition-colors duration-300" />
          ) : (
            <Moon className="w-6 h-6 text-text-muted transition-colors duration-300 group-hover:text-primary" />
          )}
        </div>
      </Button>
    </div>
  );
};

ThemeSelect.displayName = "ThemeSelect";
