import { useTranslation } from "react-i18next";

import { PasswordResetSuccess as RowPasswordResetSuccess } from "@repo/components";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

const PasswordResetSuccess = () => {
  const { t: tAuth } = useTranslation("auth");

  return (
    <RowPasswordResetSuccess
      tAuth={tAuth}
      backToLoginLink={
        <ButtonLink
          to="/prihlaseni"
          replace
          variant="primary"
          className="w-full"
        >
          {tAuth("passwordResetSuccessful.backToLogin")}
        </ButtonLink>
      }
      backToEmailLink={
        <ButtonLink
          to="/zapomenute-heslo"
          replace
          variant="ghost"
          className="w-full text-primary bg-transparent hover:underline"
        >
          {tAuth("passwordResetSuccessful.backToEmail")}
        </ButtonLink>
      }
    />
  );
};

export default PasswordResetSuccess;
