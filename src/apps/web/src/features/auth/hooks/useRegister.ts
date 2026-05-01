import { useCallback } from "react";

import { useNavigate } from "@tanstack/react-router";
import { useRegisterMutation } from "@web/entities/auth";

import type { AuthSession, RegisterData } from "@web/entities/auth";

/**
 * useRegister - Business hook pro registraci.
 */
export const useRegister = () => {
  const navigate = useNavigate();

  const [rawRegister, { isLoading, isError, error }] = useRegisterMutation();

  const register = useCallback(
    async (data: RegisterData): Promise<AuthSession | undefined> => {
      try {
        const payload: RegisterData = {
          ...data,
          email: data.email.toLowerCase().trim(),
        };

        const result = await rawRegister(payload).unwrap();

        console.info("[Auth] User registered successfully");

        await navigate({ to: "/" });

        return result;
      } catch (err) {
        console.error("[Auth] Registration failed:", err);
        throw err;
      }
    },
    [rawRegister, navigate],
  );

  return {
    register,
    isLoading,
    isError,
    error,
  };
};

