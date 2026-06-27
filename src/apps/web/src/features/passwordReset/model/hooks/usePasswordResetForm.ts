import { isAxiosError } from "axios";
import { useState } from "react";

import { usePasswordReset } from "./usePasswordReset";

import type { PasswordResetSchemaValues } from "@repo/schemas";
import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

export type PasswordResetFieldErrors = Partial<
  Record<"password" | "confirmPassword", string>
>;

export function usePasswordResetForm() {
  const { passwordReset, reset, isPending, isError, error } =
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
    formValues: PasswordResetSchemaValues,
    token: string,
  ): Promise<void> => {
    try {
      await passwordReset({ ...formValues, token });
    } catch (error) {
      if (isAxiosError<ValidationErrorResponse>(error)) {
        const errors = error.response?.data.validationError?.[0];
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
