import { isAxiosError } from "axios";
import { useState } from "react";

import { useVerifyEmailRequest } from "./useVerifyEmailRequest";

import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";
import type { VerifyEmailRequestSchemaValues } from "@repo/schemas";

export type VerifyEmailRequestFieldErrors = Partial<Record<"email", string>>;

export function useVerifyEmailRequestForm() {
  const { resendVerificationEmail, reset, isPending, isError, error } =
    useVerifyEmailRequest();
  const [fieldErrors, setFieldErrors] = useState<VerifyEmailRequestFieldErrors>({});

  const clearFieldError = (field: keyof VerifyEmailRequestFieldErrors): void => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
    if (isError) reset();
  };

  const handleSubmit = async (
    values: VerifyEmailRequestSchemaValues,
  ): Promise<void> => {
    try {
      await resendVerificationEmail(values.email);
    } catch (err) {
      if (isAxiosError<ValidationErrorResponse>(err)) {
        const errors = err.response?.data.validationError?.[0];
        if (errors) {
          const parsed: VerifyEmailRequestFieldErrors = {};
          (
            Object.entries(errors) as [
              keyof VerifyEmailRequestFieldErrors,
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
