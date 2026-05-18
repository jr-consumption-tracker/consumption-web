import { useTheme } from "@web/shared/lib/theme";

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return {
    isDark,
    handleThemeToggle,
  };
};
