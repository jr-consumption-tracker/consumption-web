import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { LoginForm } from "@repo/components";
import { Link } from "@tanstack/react-router";
import { useLoginForm } from "@web/features/auth/model/hooks/useLoginForm";

import type { ParseKeys } from "i18next";
import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

type CommonKey = ParseKeys<"common">;

const loginApiErrorKey = (error: unknown): CommonKey | undefined => {
  if (!isAxiosError<ValidationErrorResponse>(error)) return undefined;

  const generalError = error.response?.data.general?.[0];
  const validationError = error.response?.data.validationError;
  const actionError = error.response?.data.action?.[0];

  if (!generalError && !validationError && !actionError)
    return "errors.login.general";

  if (generalError) {
    return `errors.login.${generalError}` as CommonKey;
  }
};

const Login = () => {
  const {
    handleSubmit,
    isPending,
    isError,
    error,
    fieldErrors,
    clearFieldError,
    persistLogin,
    setPersistLogin,
  } = useLoginForm();
  const { t: tValidation } = useTranslation("validation");
  const { t: tAuth } = useTranslation("auth");
  const { t: tCommon } = useTranslation("common");
  const apiErrorKey = isError ? loginApiErrorKey(error) : undefined;

  return (
    <LoginForm
      onSubmit={handleSubmit}
      isLoading={isPending}
      fieldErrors={fieldErrors}
      clearFieldError={clearFieldError}
      errorMessage={apiErrorKey ? tCommon(apiErrorKey) : undefined}
      tAuth={tAuth}
      tValidation={tValidation}
      tCommon={tCommon}
      registerLink={
        <Link
          to="/register"
          className="text-primary font-medium hover:underline"
        >
          {tAuth("login.registerLink")}
        </Link>
      }
      defaultPersistLogin={persistLogin}
      onPersistLoginChange={setPersistLogin}
    />
  );
};

Login.displayName = "Login";

export default Login;
