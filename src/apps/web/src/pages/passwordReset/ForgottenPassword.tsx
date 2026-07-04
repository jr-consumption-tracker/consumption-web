import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { ForgottenPasswordForm } from "@repo/components";
import { useForgottenPasswordForm } from "@web/features/forgottenPassword";
import { TextLink } from "@web/shared/ui/TextLink";

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
  const { t: tPasswordReset } = useTranslation("passwordReset");
  const { t: tValidation } = useTranslation("validation");
  const { t: tCommon } = useTranslation("common");

  const apiErrorKey = isError ? forgottenPasswordApiErrorKey(error) : undefined;

  return (
    <ForgottenPasswordForm
      tPasswordReset={tPasswordReset}
      tValidation={tValidation}
      errorMessage={apiErrorKey ? tCommon(apiErrorKey) : undefined}
      isPending={isPending}
      fieldErrors={fieldErrors}
      backToLoginLink={
        <TextLink to="/prihlaseni" replace>
          {tPasswordReset("forgottenPassword.backToLogin")}
        </TextLink>
      }
      clearFieldError={clearFieldError}
      onSubmit={handleSubmit}
    />
  );
};

export default ForgottenPassword;
