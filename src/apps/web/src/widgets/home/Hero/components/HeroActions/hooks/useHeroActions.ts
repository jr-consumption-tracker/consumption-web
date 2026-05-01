import { useTranslation } from "react-i18next";

import scrollToView from "@repo/utils/src/scrollToView";
import { useIsAuthenticated } from "@web/features/auth/hooks/useIsAuthenticated";

export const useHeroActions = () => {
  const { t } = useTranslation("home");
  const isAuthenticated = useIsAuthenticated();

  const onMoreInfo = () => {
    scrollToView("pricing");
  };

  return {
    primaryAction: {
      label: isAuthenticated
        ? t("hero.actions.goToApp")
        : t("hero.actions.startFree"),
      to: isAuthenticated ? "/" : "/",
    },
    secondaryAction: {
      label: t("hero.actions.moreInfo"),
      onClick: onMoreInfo,
    },
  };
};
