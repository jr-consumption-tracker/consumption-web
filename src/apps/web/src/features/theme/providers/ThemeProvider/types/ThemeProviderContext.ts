import type { Theme } from "@web/features/theme/types/Theme";

export interface ThemeProviderContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
