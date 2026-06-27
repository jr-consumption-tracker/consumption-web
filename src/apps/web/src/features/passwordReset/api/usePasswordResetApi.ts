import { useMutation } from "@tanstack/react-query";

import { passwordReset, verifyToken } from "./passwordResetApi";

export function usePasswordResetMutation() {
  return useMutation({
    mutationFn: passwordReset,
  });
}

export function useVerifyTokenMutation() {
  return useMutation({
    mutationFn: verifyToken,
  });
}
