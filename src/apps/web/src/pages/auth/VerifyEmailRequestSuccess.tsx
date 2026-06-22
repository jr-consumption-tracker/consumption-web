import { useTranslation } from "react-i18next";

import { VerifyEmailRequestSuccess as VerifyEmailRequestSuccessComponent } from "@repo/components";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

const VerifyEmailRequestSuccess = () => {
  const { t: tAuth } = useTranslation("auth");

  return (
    <VerifyEmailRequestSuccessComponent
      tAuth={tAuth}
      backToLoginLink={
        <ButtonLink to="/prihlaseni" replace className="w-full">
          {tAuth("verifyEmailRequestSuccess.backToLogin")}
        </ButtonLink>
      }
    />
  );
};

export default VerifyEmailRequestSuccess;
