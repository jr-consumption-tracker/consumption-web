import { useTranslation } from "react-i18next";

import scrollToView from "@repo/utils/src/scrollToView";
import { useAppSelector } from "@web/app/store/hooks";
import { selectIsAuthenticated } from "@web/features/auth/store/authSelectors";

export const useHeroActions = () => {
  const { t } = useTranslation("home");
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

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
