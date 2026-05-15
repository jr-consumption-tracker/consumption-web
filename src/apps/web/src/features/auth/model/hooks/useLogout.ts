import { useNavigate } from "@tanstack/react-router";
import { useLogoutMutation } from "../../api/authApi";

/**
 * useLogout - Business hook pro odhlaseni.
 */
export const useLogout = () => {
  const navigate = useNavigate();
  const [rawLogout, { isLoading }] = useLogoutMutation();

  const logout = async () => {
    try {
      await rawLogout().unwrap();
      console.info("[Auth] User logged out");
    } catch (err) {
      console.warn("[Auth] Logout API failed, forcing local logout:", err);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      await navigate({ to: "/" });
    }
  };

  return {
    logout,
    isLoading,
  };
};
