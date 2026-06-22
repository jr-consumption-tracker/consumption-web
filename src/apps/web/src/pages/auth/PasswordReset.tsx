import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { PasswordResetForm } from "@repo/components";
import { usePasswordResetForm } from "@web/features/passwordReset";
import { ButtonLink } from "@web/shared/ui/ButtonLink";

import type { ParseKeys } from "i18next";
import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

type CommonKey = ParseKeys<"common">;

const passwordResetApiErrorKey = (error: unknown): CommonKey | undefined => {
  if (!isAxiosError<ValidationErrorResponse>(error)) return undefined;

  const generalError = error.response?.data.general?.[0];
  const validationError = error.response?.data.validationError;
  const actionError = error.response?.data.action?.[0];

  if (!generalError && !validationError && !actionError)
    return "errors.passwordReset.general";

  if (generalError) {
    return `errors.passwordReset.${generalError}` as CommonKey;
  }
};

const PasswordReset = () => {
  const {
    handleSubmit,
    isPending,
    isError,
    error,
    fieldErrors,
    clearFieldError,
  } = usePasswordResetForm();
  const { t: tAuth } = useTranslation("auth");
  const { t: tValidation } = useTranslation("validation");
  const { t: tCommon } = useTranslation("common");

  const apiErrorKey = isError ? passwordResetApiErrorKey(error) : undefined;

  return (
    <PasswordResetForm
      tAuth={tAuth}
      tValidation={tValidation}
      errorMessage={apiErrorKey ? tCommon(apiErrorKey) : undefined}
      isPending={isPending}
      fieldErrors={fieldErrors}
      backToLoginLink={
        <ButtonLink
          to="/prihlaseni"
          replace
          variant="ghost"
          className="text-primary bg-transparent text-sm hover:underline"
        >
          {tAuth("passwordReset.backToLogin")}
        </ButtonLink>
      }
      clearFieldError={clearFieldError}
      onSubmit={handleSubmit}
    />
  );
};

export default PasswordReset;
