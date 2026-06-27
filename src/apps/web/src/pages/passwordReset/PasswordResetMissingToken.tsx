import { useTranslation } from "react-i18next";

import { AuthAlertBlock } from "@web/shared/ui/AuthAlertBlock/AuthAlertBlock";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

const PasswordResetMissingToken = () => {
  const { t } = useTranslation("passwordReset");

  return (
    <AuthAlertBlock
      alertTitle={t("passwordResetMissingToken.alertTitle")}
      description={t("passwordResetMissingToken.errorTokenNotFound")}
      link={
        <ButtonLink to="/zapomenute-heslo" replace className="w-full">
          {t("passwordResetMissingToken.resendLink")}
        </ButtonLink>
      }
    />
  );
};

export default PasswordResetMissingToken;
