import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { ButtonLink, ForgottenPasswordForm } from "@repo/components";
import { useForgottenPasswordForm } from "@web/features/auth";

import type { ParseKeys } from "i18next";
import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

type CommonKey = ParseKeys<"common">;

const forgottenPasswordApiErrorKey = (
  error: unknown,
): CommonKey | undefined => {
  if (!isAxiosError<ValidationErrorResponse>(error)) return undefined;

  const generalError = error.response?.data.general?.[0];
  const validationError = error.response?.data.validationError;
  const actionError = error.response?.data.action?.[0];

  if (!generalError && !validationError && !actionError)
    return "errors.forgottenPassword.general";

  if (generalError) {
    return `errors.forgottenPassword.${generalError}` as CommonKey;
  }
};

const ForgottenPassword = () => {
  const {
    handleSubmit,
    isPending,
    isError,
    error,
    fieldErrors,
    clearFieldError,
  } = useForgottenPasswordForm();
  const { t: tAuth } = useTranslation("auth");
  const { t: tValidation } = useTranslation("validation");
  const { t: tCommon } = useTranslation("common");

  const apiErrorKey = isError ? forgottenPasswordApiErrorKey(error) : undefined;

  return (
    <ForgottenPasswordForm
      tAuth={tAuth}
      tValidation={tValidation}
      errorMessage={apiErrorKey ? tCommon(apiErrorKey) : undefined}
      isPending={isPending}
      fieldErrors={fieldErrors}
      backToLoginLink={
        <ButtonLink
          to="/login"
          replace
          variant="ghost"
          className="text-primary bg-transparent text-sm hover:underline"
        >
          {tAuth("forgottenPassword.backToLogin")}
        </ButtonLink>
      }
      clearFieldError={clearFieldError}
      onSubmit={handleSubmit}
    />
  );
};

export default ForgottenPassword;
