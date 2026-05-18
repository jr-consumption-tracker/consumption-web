import { createContext } from "react";

import type { ThemeProviderContextType } from "../ThemeProvider";

export const ThemeProviderContext =
  createContext<ThemeProviderContextType | null>(null);
