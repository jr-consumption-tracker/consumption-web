import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { VerifyEmailRequestForm } from "@repo/components";
import { useVerifyEmailRequestForm } from "@web/features/verifyEmailRequest";
import { TextLink } from "@web/shared/ui/TextLink";

import type { ParseKeys } from "i18next";
import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

type CommonKey = ParseKeys<"common">;

const verifyEmailRequestApiErrorKey = (
  error: unknown,
): CommonKey | undefined => {
  if (!isAxiosError<ValidationErrorResponse>(error)) return undefined;

  const generalError = error.response?.data.general?.[0];
  const validationError = error.response?.data.validationError;
  const actionError = error.response?.data.action?.[0];

  if (!generalError && !validationError && !actionError)
    return "errors.verifyEmailRequest.general";

  if (generalError) {
    return `errors.verifyEmailRequest.${generalError}` as CommonKey;
  }
};

const VerifyEmailRequest = () => {
  const {
    handleSubmit,
    isPending,
    isError,
    error,
    fieldErrors,
    clearFieldError,
  } = useVerifyEmailRequestForm();
  const { t: tVerifyEmail } = useTranslation("verifyEmail");
  const { t: tValidation } = useTranslation("validation");
  const { t: tCommon } = useTranslation("common");

  const apiErrorKey = isError
    ? verifyEmailRequestApiErrorKey(error)
    : undefined;

  return (
    <VerifyEmailRequestForm
      tVerifyEmail={tVerifyEmail}
      tValidation={tValidation}
      errorMessage={apiErrorKey ? tCommon(apiErrorKey) : undefined}
      isPending={isPending}
      fieldErrors={fieldErrors}
      backToLoginLink={
        <TextLink to="/prihlaseni" replace>
          {tVerifyEmail("verifyEmailRequest.backToLogin")}
        </TextLink>
      }
      clearFieldError={clearFieldError}
      onSubmit={handleSubmit}
    />
  );
};

export default VerifyEmailRequest;
