import { useTranslation } from "react-i18next";

import { ForgottenPasswordSuccess as RowForgottenPasswordSuccess } from "@repo/components";
import { ButtonLink } from "@web/shared/ui/ButtonLink";
import { TextLink } from "@web/shared/ui/TextLink";

const ForgottenPasswordSuccess = () => {
  const { t: tPasswordReset } = useTranslation("passwordReset");

  return (
    <RowForgottenPasswordSuccess
      tPasswordReset={tPasswordReset}
      backToLoginLink={
        <ButtonLink
          to="/prihlaseni"
          replace
          variant="primary"
          className="w-full"
        >
          {tPasswordReset("forgottenPasswordSuccess.backToLogin")}
        </ButtonLink>
      }
      backToEmailLink={
        <TextLink to="/zapomenute-heslo" replace fullWidth>
          {tPasswordReset("forgottenPasswordSuccess.backToEmail")}
        </TextLink>
      }
    />
  );
};

export default ForgottenPasswordSuccess;
