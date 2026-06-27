import { useTranslation } from "react-i18next";

import { PasswordResetSuccess as RowPasswordResetSuccess } from "@repo/components";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

const PasswordResetSuccess = () => {
  const { t: tPasswordReset } = useTranslation("passwordReset");

  return (
    <RowPasswordResetSuccess
      tPasswordReset={tPasswordReset}
      backToLoginLink={
        <ButtonLink
          to="/prihlaseni"
          replace
          variant="primary"
          className="w-full"
        >
          {tPasswordReset("passwordResetSuccess.backToLogin")}
        </ButtonLink>
      }
    />
  );
};

export default PasswordResetSuccess;
