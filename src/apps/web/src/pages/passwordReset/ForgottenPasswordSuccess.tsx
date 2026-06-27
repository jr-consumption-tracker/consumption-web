import { useTranslation } from "react-i18next";

import { ForgottenPasswordSuccess as RowForgottenPasswordSuccess } from "@repo/components";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

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
        <ButtonLink
          to="/zapomenute-heslo"
          replace
          variant="ghost"
          className="w-full text-primary bg-transparent hover:underline"
        >
          {tPasswordReset("forgottenPasswordSuccess.backToEmail")}
        </ButtonLink>
      }
    />
  );
};

export default ForgottenPasswordSuccess;
