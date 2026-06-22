import { isAxiosError } from "axios";
import { useState } from "react";

import { useToggle } from "@repo/hooks";
import { useNavigate } from "@tanstack/react-router";

import { useLogin } from "./useLogin";

import type { LoginSchemaValues } from "@repo/schemas";
import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

export type LoginFieldErrors = Partial<Record<"email" | "password", string>>;

export function useLoginForm() {
  const { login, reset, isPending, isError, error } = useLogin();
  const [fieldErrors, setFieldErrors] = useState<LoginFieldErrors>({});
  const [persistLogin, setPersistLogin] = useToggle("persistLoginWeb", false);
  const navigate = useNavigate();

  const clearFieldError = (field: keyof LoginFieldErrors): void => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    if (isError) reset();
  };

  const handleSubmit = async (values: LoginSchemaValues): Promise<void> => {
    try {
      await login(values);
    } catch (err) {
      if (isAxiosError<ValidationErrorResponse>(err)) {
        const actionError = err.response?.data.action?.[0];

        if (actionError === "emailNotVerified")
          navigate({ to: "/overeni-emailu-zadost", replace: true });

        const errors = err.response?.data.validationError?.[0];
        if (errors) {
          const parsed: LoginFieldErrors = {};
          (
            Object.entries(errors) as [keyof LoginFieldErrors, string[]][]
          ).forEach(([field, messages]) => {
            if (messages[0]) parsed[field] = messages[0];
          });
          setFieldErrors(parsed);
        }
      }
    }
  };

  return {
    handleSubmit,
    isPending,
    isError,
    error,
    fieldErrors,
    clearFieldError,
    persistLogin,
    setPersistLogin,
  };
}
