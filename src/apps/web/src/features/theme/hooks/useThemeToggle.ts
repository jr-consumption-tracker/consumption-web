import { useCallback } from "react";

import { useTheme } from "@web/shared/theme";

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleThemeToggle = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  return {
    isDark,
    handleThemeToggle,
  };
};
