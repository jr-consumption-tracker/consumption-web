import { isAxiosError } from "axios";
import { useEffect, useRef, useState } from "react";

import { useForm } from "@tanstack/react-form";

import { registerSchema } from "../schemas/registerSchema";
import { useRegister } from "./useRegister";

import type { ValidationErrorResponse } from "@web/shared/api/model/types/ValidationErrorResponse";

export type RegisterFieldErrors = Partial<
  Record<"email" | "password" | "confirmPassword" | "termsAgreement", string>
>;

export const useRegisterForm = () => {
  const { register, reset, isPending, isError, error } = useRegister();
  const [fieldErrors, setFieldErrors] = useState<RegisterFieldErrors>({});

  const isErrorRef = useRef(isError);

  useEffect(() => {
    isErrorRef.current = isError;
  });

  const clearFieldError = (field: keyof RegisterFieldErrors): void => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      termsAgreement: false,
    },
    validators: { onSubmit: registerSchema },
    onSubmit: async ({ value }) => {
      try {
        await register(value);
      } catch (err) {
        if (isAxiosError<ValidationErrorResponse>(err)) {
          const errors = err.response?.data.validationError?.[0];
          if (errors) {
            const parsed: RegisterFieldErrors = {};
            (
              Object.entries(errors) as [keyof RegisterFieldErrors, string[]][]
            ).forEach(([field, messages]) => {
              if (messages[0]) parsed[field] = messages[0];
            });
            setFieldErrors(parsed);
          }
        }
      }
    },
  });

  useEffect(() => {
    let prevValues = form.store.state.values;
    const subscription = form.store.subscribe(() => {
      const { values } = form.store.state;
      if (isErrorRef.current && values !== prevValues) {
        reset();
      }
      prevValues = values;
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { form, isPending, isError, error, fieldErrors, clearFieldError };
};
