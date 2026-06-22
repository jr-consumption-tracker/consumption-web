import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { useParams } from "@tanstack/react-router";
import { LoadingSpinner } from "@repo/components";
import { useVerifyEmail } from "@web/features/verifyEmail";
import { AuthAlertBlock } from "@web/shared/ui/AuthAlertBlock/AuthAlertBlock";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

import type { ParseKeys } from "i18next";
import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

type CommonKey = ParseKeys<"common">;

const verifyEmailApiErrorKey = (error: unknown): CommonKey => {
  if (!isAxiosError<ValidationErrorResponse>(error))
    return "errors.verifyEmail.general";

  const generalError = error.response?.data.general?.[0];
  const actionError = error.response?.data.action?.[0];
  const tokenError = error.response?.data.tokenError?.[0];
  const validationError = error.response?.data.validationError;

  if (!generalError && !actionError && !tokenError && !validationError)
    return "errors.verifyEmail.general";

  if (tokenError) {
    return `errors.verifyEmail.${tokenError}` as CommonKey;
  }

  if (actionError) {
    return `errors.verifyEmail.${actionError}` as CommonKey;
  }

  if (generalError) {
    return `errors.verifyEmail.${generalError}` as CommonKey;
  }

  return "errors.verifyEmail.general";
};

const VerifyEmail = () => {
  const { token } = useParams({ from: "/_auth/overeni-emailu/$token" });
  const { isPending, isError, error } = useVerifyEmail(token);
  const { t: tAuth } = useTranslation("auth");
  const { t: tCommon } = useTranslation("common");

  if (isPending) {
    return <LoadingSpinner />;
  }

  if (isError) {
    const errorKey = verifyEmailApiErrorKey(error);

    return (
      <AuthAlertBlock
        alertTitle={tAuth("verifyEmail.errorTitle")}
        description={tCommon(errorKey)}
        link={
          <ButtonLink to="/overeni-emailu-zadost" replace className="w-full">
            {tAuth("verifyEmail.resendLink")}
          </ButtonLink>
        }
      />
    );
  }

  return null;
};

export default VerifyEmail;
