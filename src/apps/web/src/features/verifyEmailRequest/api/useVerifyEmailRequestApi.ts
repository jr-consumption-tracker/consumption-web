import { useMutation } from "@tanstack/react-query";

import { verifyEmailResend } from "./verifyEmailRequestApi";

export function useVerifyEmailResendMutation() {
  return useMutation({
    mutationFn: verifyEmailResend,
  });
}
