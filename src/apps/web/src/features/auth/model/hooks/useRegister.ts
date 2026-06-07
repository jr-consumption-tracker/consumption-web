import { useNavigate } from "@tanstack/react-router";

import { useRegisterMutation } from "../../api/useAuthApi";

import type { RegisterData } from "../types/credentials";

export function useRegister() {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isError, error, reset } = useRegisterMutation();

  const register = async (data: RegisterData): Promise<void> => {
    const payload: RegisterData = {
      ...data,
      email: data.email.toLowerCase().trim(),
    };

    await mutateAsync(payload);
    await navigate({ to: "/" });
  };

  return {
    register,
    reset,
    isPending,
    isError,
    error,
  };
}
