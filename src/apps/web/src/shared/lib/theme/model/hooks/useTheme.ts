import { useContext } from "react";

import { ThemeProviderContext } from "../../ui/ThemeProviderContext";

/**
 * useTheme - Hook to access the current theme and its setter.
 */
export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
