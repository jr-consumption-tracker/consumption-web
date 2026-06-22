import { isAxiosError } from "axios";
import { useState } from "react";

import { usePasswordReset } from "./usePasswordReset";

import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";
import type { PasswordResetSchemaValues } from "@repo/schemas";

export type PasswordResetFieldErrors = Partial<Record<"email", string>>;

export function usePasswordResetForm() {
  const { requestPasswordReset, reset, isPending, isError, error } =
    usePasswordReset();
  const [fieldErrors, setFieldErrors] = useState<PasswordResetFieldErrors>({});

  const clearFieldError = (field: keyof PasswordResetFieldErrors): void => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    if (isError) reset();
  };

  const handleSubmit = async (
    values: PasswordResetSchemaValues,
  ): Promise<void> => {
    try {
      await requestPasswordReset(values.email);
    } catch (err) {
      if (isAxiosError<ValidationErrorResponse>(err)) {
        const errors = err.response?.data.validationError?.[0];
        if (errors) {
          const parsed: PasswordResetFieldErrors = {};
          (
            Object.entries(errors) as [
              keyof PasswordResetFieldErrors,
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
