import { useTranslation } from "react-i18next";

import {
    ButtonLink, ForgottenPasswordSuccessful as RowForgottenPasswordSuccessful
} from "@repo/components";

const ForgottenPasswordSuccessful = () => {
  const { t: tAuth } = useTranslation("auth");

  return (
    <RowForgottenPasswordSuccessful
      tAuth={tAuth}
      backToLoginLink={
        <ButtonLink to="/login" replace variant="primary" className="w-full">
          {tAuth("forgottenPasswordSuccessful.backToLogin")}
        </ButtonLink>
      }
      backToEmailLink={
        <ButtonLink
          to="/forgotten-password"
          replace
          variant="ghost"
          className="w-full text-primary bg-transparent hover:underline"
        >
          {tAuth("forgottenPasswordSuccessful.backToEmail")}
        </ButtonLink>
      }
    />
  );
};

export default ForgottenPasswordSuccessful;
