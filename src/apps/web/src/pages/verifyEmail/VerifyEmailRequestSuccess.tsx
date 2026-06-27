import { useTranslation } from "react-i18next";

import { VerifyEmailRequestSuccess as VerifyEmailRequestSuccessComponent } from "@repo/components";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

const VerifyEmailRequestSuccess = () => {
  const { t: tVerifyEmail } = useTranslation("verifyEmail");

  return (
    <VerifyEmailRequestSuccessComponent
      tVerifyEmail={tVerifyEmail}
      backToLoginLink={
        <ButtonLink to="/prihlaseni" replace className="w-full">
          {tVerifyEmail("verifyEmailRequestSuccess.backToLogin")}
        </ButtonLink>
      }
    />
  );
};

export default VerifyEmailRequestSuccess;
