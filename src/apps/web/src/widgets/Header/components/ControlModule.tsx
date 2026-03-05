import { useTranslation } from "react-i18next";

import { LanguageSelect } from "@web/features/locale/components/LanguageSelect";
import { useTheme } from "@web/features/theme/providers/ThemeProvider";

export const ControlModule = () => {
  const { t } = useTranslation("common");
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-1.5 px-1.5 py-1.5 rounded-full bg-surface-alt/40 border border-white/10 backdrop-blur-3xl shadow-2xl">
      <LanguageSelect />

      <div className="w-px h-4 bg-white/10 mx-1" />

      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative group flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 transition-all duration-500"
        aria-label={t("header.aria.theme")}
      >
        <div className="relative z-10 transition-transform duration-700 group-hover:rotate-30">
          {isDark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-amber-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 5.106a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.591a.75.75 0 010-1.06zM5.106 5.106a.75.75 0 010 1.06L3.515 7.757a.75.75 0 01-1.06-1.06l1.591-1.591a.75.75 0 011.06 0zM21 12a.75.75 0 01-.75.75H18a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM5.106 18.894a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.591a.75.75 0 010-1.06zM18.894 18.894a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 11-1.06-1.06l1.591-1.591a.75.75 0 011.06 0zM3 12a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 12z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-indigo-900"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
};

ControlModule.displayName = "ControlModule";
