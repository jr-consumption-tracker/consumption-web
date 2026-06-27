import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { LoadingSpinner, PasswordResetForm } from "@repo/components";
import { useParams } from "@tanstack/react-router";
import { usePasswordResetForm } from "@web/features/passwordReset/model/hooks/usePasswordResetForm";
import { useVerifyPasswordResetToken } from "@web/features/passwordReset/model/hooks/useVerifyPasswordResetToken";
import { AuthAlertBlock } from "@web/shared/ui/AuthAlertBlock/AuthAlertBlock";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

import type { ParseKeys } from "i18next";
import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

type CommonKey = ParseKeys<"common">;

const verifyTokenApiErrorKey = (error: unknown): CommonKey => {
  if (!isAxiosError<ValidationErrorResponse>(error))
    return "errors.passwordReset.general";

  const tokenError = error.response?.data.tokenError?.[0];

  if (tokenError) {
    return `errors.passwordReset.${tokenError}` as CommonKey;
  }

  return "errors.passwordReset.general";
};

const passwordResetApiErrorKey = (error: unknown): CommonKey | undefined => {
  if (!isAxiosError<ValidationErrorResponse>(error)) return undefined;

  const validationError = error.response?.data.validationError;
  const tokenError = error.response?.data.tokenError?.[0];

  if (!tokenError && !validationError) return "errors.passwordReset.general";

  if (tokenError) {
    return `errors.passwordReset.${tokenError}` as CommonKey;
  }
};

const PasswordReset = () => {
  const { token } = useParams({ from: "/_passwordReset/obnova-hesla/$token" });
  const {
    isPending: verifyTokenIsPending,
    isError: verifyTokenIsError,
    error: verifyTokenError,
  } = useVerifyPasswordResetToken(token);
  const {
    handleSubmit,
    isPending: passwordResetIsPending,
    isError: passwordResetIsError,
    error: passwordResetError,
    fieldErrors,
    clearFieldError,
  } = usePasswordResetForm();
  const { t: tPasswordReset } = useTranslation("passwordReset");
  const { t: tCommon } = useTranslation("common");
  const { t: tValidation } = useTranslation("validation");
  const apiErrorKey = passwordResetIsError
    ? passwordResetApiErrorKey(passwordResetError)
    : undefined;

  if (verifyTokenIsPending) {
    return <LoadingSpinner />;
  }

  if (verifyTokenIsError) {
    const error = verifyTokenError;
    const errorKey = verifyTokenApiErrorKey(error);

    return (
      <AuthAlertBlock
        alertTitle={tPasswordReset("passwordReset.alertTitle")}
        description={tCommon(errorKey)}
        link={
          <ButtonLink to="/overeni-emailu-zadost" replace className="w-full">
            {tPasswordReset("passwordReset.resetPassword")}
          </ButtonLink>
        }
      />
    );
  }

  return (
    <PasswordResetForm
      tPasswordReset={tPasswordReset}
      tCommon={tCommon}
      tValidation={tValidation}
      errorMessage={apiErrorKey ? tCommon(apiErrorKey) : undefined}
      isPending={passwordResetIsPending}
      fieldErrors={fieldErrors}
      clearFieldError={clearFieldError}
      onSubmit={(values) => handleSubmit(values, token)}
    />
  );
};

export default PasswordReset;
