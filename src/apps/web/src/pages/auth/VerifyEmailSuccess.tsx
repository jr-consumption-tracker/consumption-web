import { useTranslation } from "react-i18next";

import { VerifyEmailSuccess as VerifyEmailSuccessComponent } from "@repo/components";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

const VerifyEmailSuccess = () => {
  const { t: tAuth } = useTranslation("auth");

  return (
    <VerifyEmailSuccessComponent
      tAuth={tAuth}
      backToLoginLink={
        <ButtonLink to="/prihlaseni" replace className="w-full">
          {tAuth("verifyEmailSuccess.backToLogin")}
        </ButtonLink>
      }
    />
  );
};

export default VerifyEmailSuccess;
