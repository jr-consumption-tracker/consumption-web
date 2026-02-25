import { createContext } from "react";
import type { ThemeProviderContext as ThemeProviderContextType } from "../types/ThemeProviderContext";

export const ThemeProviderContext =
  createContext<ThemeProviderContextType | null>(null);
