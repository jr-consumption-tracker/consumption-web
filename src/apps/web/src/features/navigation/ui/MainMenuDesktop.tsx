import { useTranslation } from "react-i18next";

import { cn } from "@repo/utils";
import { Link, useRouterState } from "@tanstack/react-router";

import { NAV_LINKS } from "../model/constants/NAV_LINKS";

export const MainMenuDesktop = () => {
  const { t } = useTranslation("common");

  const { location } = useRouterState();
  const activeIdx = NAV_LINKS.findIndex((l) => l.href === location.pathname);

  return (
    <div className="relative flex items-center h-full gap-6">
      {NAV_LINKS.map((link, idx) => {
        const isActive = activeIdx === idx;
        return (
          <Link
            key={link.href}
            to={link.href}
            className={cn(
              "group relative py-2 text-sm font-bold tracking-tight transition-colors duration-300",
              isActive
                ? "text-text-main font-extrabold"
                : "text-text-muted hover:text-text-main",
            )}
          >
            {t(link.labelKey)}

            <span
              className={cn(
                "absolute bottom-1 left-0 h-0.5 w-full rounded-full bg-primary transition-transform duration-300 ease-out origin-center",
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
              )}
            />
          </Link>
        );
      })}
    </div>
  );
};

MainMenuDesktop.displayName = "MainMenuDesktop";
