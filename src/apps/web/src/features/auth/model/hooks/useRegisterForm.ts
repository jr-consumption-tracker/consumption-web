import { isAxiosError } from "axios";

import { registerSchema } from "@repo/schemas";
import { useForm } from "@tanstack/react-form";
import { useEffect, useRef, useState } from "react";

import { useRegister } from "./useRegister";

type ValidationErrorResponse = {
  validationError?: Array<Record<string, string[]>>;
};

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
        await register({
          email: value.email,
          password: value.password,
          confirmPassword: value.confirmPassword,
          termsAgreement: value.termsAgreement,
        });
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
