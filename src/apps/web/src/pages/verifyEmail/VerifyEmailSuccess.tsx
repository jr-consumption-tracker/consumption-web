import { useTranslation } from "react-i18next";

import { VerifyEmailSuccess as VerifyEmailSuccessComponent } from "@repo/components";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

const VerifyEmailSuccess = () => {
  const { t: tVerifyEmail } = useTranslation("verifyEmail");

  return (
    <VerifyEmailSuccessComponent
      tVerifyEmail={tVerifyEmail}
      backToLoginLink={
        <ButtonLink to="/prihlaseni" replace className="w-full">
          {tVerifyEmail("verifyEmailSuccess.backToLogin")}
        </ButtonLink>
      }
    />
  );
};

export default VerifyEmailSuccess;
