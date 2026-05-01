"use client";

import { memo } from "react";

/**
 * LoginFormContent - Prázdný placeholder pro budoucí login formulář
 *
 * Zatím zobrazuje pouze prázdný popover s indikátorem, že se formulář připravuje.
 * Po implementaci LogIn komponenty bude nahrazen plnohodnotným formulářem.
 *
 * TODO: Nahradit placeholder skutečným LogIn formulářem
 */
export const LoginFormContent = memo(() => {
  return (
    <div className="relative overflow-hidden rounded-xl animate-in fade-in-0 zoom-in-95 duration-200">
      {/* Minimalistický prázdný obsah */}
      <div className="relative backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border border-white/40 dark:border-slate-700/60 shadow-lg">
        <div className="flex flex-col items-center justify-center py-12 px-8 text-center">
          {/* Indikátor připravovaného formuláře */}
          <div className="w-16 h-16 mb-6 rounded-full bg-linear-to-br from-purple-400/30 to-blue-400/30 dark:from-purple-500/20 dark:to-blue-500/20 animate-pulse" />

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Přihlášení se připravuje...
          </p>
        </div>
      </div>
    </div>
  );
});

LoginFormContent.displayName = "LoginFormContent";
