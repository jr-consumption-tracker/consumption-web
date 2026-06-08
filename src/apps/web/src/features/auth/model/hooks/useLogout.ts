import { useNavigate } from "@tanstack/react-router";

import { useLogoutMutation } from "../../api/useAuthApi";
import { useAuthStore } from "../store/authStore";

/**
 * useLogout - Business hook pro odhlaseni.
 */
export function useLogout() {
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useLogoutMutation();
  const rawLogout = useAuthStore((state) => state.logout);

  const logout = async () => {
    await mutateAsync();

    rawLogout();

    await navigate({ to: "/" });
  };

  return {
    logout,
    isPending,
  };
}
