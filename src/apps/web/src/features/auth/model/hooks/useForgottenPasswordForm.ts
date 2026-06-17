import { isAxiosError } from "axios";
import { useState } from "react";

import { useForgottenPassword } from "./useForgottenPassword";

import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";
import type { ForgottenPasswordSchemaValues } from "../schemas/forgottenPasswordSchema";
export type ForgottenPasswordFieldErrors = Partial<Record<"email", string>>;

export function useForgottenPasswordForm() {
  const { requestPasswordReset, reset, isPending, isError, error } =
    useForgottenPassword();
  const [fieldErrors, setFieldErrors] = useState<ForgottenPasswordFieldErrors>(
    {},
  );

  const clearFieldError = (field: keyof ForgottenPasswordFieldErrors): void => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    if (isError) reset();
  };

  const handleSubmit = async (
    values: ForgottenPasswordSchemaValues,
  ): Promise<void> => {
    try {
      await requestPasswordReset(values.email);
    } catch (err) {
      if (isAxiosError<ValidationErrorResponse>(err)) {
        const errors = err.response?.data.validationError?.[0];
        if (errors) {
          const parsed: ForgottenPasswordFieldErrors = {};
          (
            Object.entries(errors) as [
              keyof ForgottenPasswordFieldErrors,
              string[],
            ][]
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
  };
}
