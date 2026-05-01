import { useCallback } from "react";

import { useNavigate } from "@tanstack/react-router";
import { useLoginMutation } from "@web/entities/auth";

import type { AuthSession, LoginCredentials } from "@web/entities/auth";

/**
 * useLogin - Business hook pro prihlaseni.
 */
export const useLogin = () => {
  const navigate = useNavigate();

  const [rawLogin, { isLoading, isError, error }] = useLoginMutation();

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<AuthSession | undefined> => {
      try {
        const result = await rawLogin(credentials).unwrap();

        console.info("[Auth] User logged in successfully");

        await navigate({ to: "/" });

        return result;
      } catch (err) {
        console.error("[Auth] Login failed:", err);
        throw err;
      }
    },
    [rawLogin, navigate],
  );

  return {
    login,
    isLoading,
    isError,
    error,
  };
};

