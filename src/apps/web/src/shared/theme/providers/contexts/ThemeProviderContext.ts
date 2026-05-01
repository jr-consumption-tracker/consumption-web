import { createContext } from "react";

import type { ThemeProviderContextType } from "../types/ThemeProviderContextType";

export const ThemeProviderContext =
  createContext<ThemeProviderContextType | null>(null);
