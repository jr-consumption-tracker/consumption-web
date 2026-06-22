import { useTranslation } from "react-i18next";

import { AuthAlertBlock } from "@web/shared/ui/AuthAlertBlock/AuthAlertBlock";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

const VerifyEmailMissingToken = () => {
  const { t } = useTranslation("auth");

  return (
    <AuthAlertBlock
      alertTitle={t("verifyEmailMissingToken.alertTitle")}
      description={t("verifyEmailMissingToken.alertDescription")}
      link={
        <ButtonLink to="/prihlaseni" replace className="w-full">
          {t("verifyEmailMissingToken.backToLogin")}
        </ButtonLink>
      }
    />
  );
};

export default VerifyEmailMissingToken;
