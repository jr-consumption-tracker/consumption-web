import { useNavigate } from "@tanstack/react-router";

import { useLoginMutation } from "../../api/useAuthApi";
import { useAuthStore } from "../store/authStore";

import type { AuthSession, LoginCredentials } from "../types/credentials";
/**
 * useLogin - Business hook pro prihlaseni.
 */
export function useLogin() {
  const navigate = useNavigate();
  const { mutateAsync, isPending, isError, error, reset } = useLoginMutation();
  const setSession = useAuthStore((state) => state.setSession);

  const login = async (credentials: LoginCredentials): Promise<AuthSession> => {
    const result = await mutateAsync(credentials);

    setSession(result);
    await navigate({ to: "/", replace: true });

    return result;
  };

  return {
    login,
    reset,
    isPending,
    isError,
    error,
  };
}
