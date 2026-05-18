import { useEffect, useState } from "react";

import { ThemeProviderContext } from "./ui/ThemeProviderContext";

import type { ReactNode } from "react";
export type Theme = "light" | "dark";

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeProviderContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/**
 * ThemeProvider - Manages light/dark mode and synchronizes with localStorage and document class.
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
