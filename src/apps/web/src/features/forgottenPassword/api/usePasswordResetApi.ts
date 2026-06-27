import { useMutation } from "@tanstack/react-query";

import { passwordResetRequest } from "./passwordResetApi";

export function usePasswordResetRequestMutation() {
  return useMutation({
    mutationFn: passwordResetRequest,
  });
}
