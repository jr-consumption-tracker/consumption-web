import { useTranslation } from "react-i18next";

import { Link } from "@tanstack/react-router";

import { NAV_LINKS } from "../constants/NAV_LINKS";

export const MainMenuMobile = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col gap-1">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className="group flex items-center justify-between px-6 py-5 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
        >
          <span className="text-xl font-bold text-text-muted group-hover:text-text-main transition-colors tracking-tighter">
            {t(link.labelKey)}
          </span>
          <div className="h-2 w-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
        </Link>
      ))}
    </div>
  );
};

MainMenuMobile.displayName = "MainMenuMobile";
