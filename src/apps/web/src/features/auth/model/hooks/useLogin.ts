import { useNavigate } from "@tanstack/react-router";

import { useLoginMutation } from "../../api/useAuthApi";
import { useAuthStore } from "../store/authStore";

import type { AuthSession, LoginCredentials } from "../types/credentials";

const PERSIST_LOGIN_KEY = "persistLoginWeb";

/**
 * useLogin - Business hook pro prihlaseni.
 */
export function useLogin() {
  const navigate = useNavigate();
  const { mutateAsync, isPending, isError, error, reset } = useLoginMutation();
  const setSession = useAuthStore((state) => state.setSession);

  const login = async (
    credentials: LoginCredentials,
  ): Promise<AuthSession> => {
    const result = await mutateAsync(credentials);

    // Written synchronously (ahead of useLocalStorage's own effect-driven
    // write from the checkbox) so the auth store's storage selector reads
    // the persistLogin value from this specific login before setSession
    // triggers the persisted write below.
    localStorage.setItem(
      PERSIST_LOGIN_KEY,
      JSON.stringify(!!credentials.persistLogin),
    );

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
