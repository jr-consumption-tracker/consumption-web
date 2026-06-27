import { useNavigate } from "@tanstack/react-router";

import { usePasswordResetMutation } from "../../api/usePasswordResetApi";

import type { PasswordResetData } from "../types/passwordResetData";

export function usePasswordReset() {
  const navigate = useNavigate();
  const { mutateAsync, isPending, isError, error, reset } =
    usePasswordResetMutation();

  const passwordReset = async (payload: PasswordResetData): Promise<void> => {
    await mutateAsync(payload);
    await navigate({
      to: "/obnova-hesla-uspech",
      replace: true,
    });
  };

  return {
    passwordReset,
    reset,
    isPending,
    isError,
    error,
  };
}
