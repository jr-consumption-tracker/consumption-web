import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { AuthSession } from "../types/credentials";

export interface AuthState {
  session: AuthSession | null;
  setSession: (session: AuthSession) => void;
  setAccessToken: (accessToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    session: null,
    setSession: (session: AuthSession) =>
      set({ session }, false, "auth/setSession"),
    setAccessToken: (accessToken: string) =>
      set(
        (state) => ({
          session: state.session && { ...state.session, accessToken },
        }),
        false,
        "auth/setAccessToken",
      ),
    logout: () => set({ session: null }, false, "auth/logout"),
  })),
);

export const useSelectSession = () => useAuthStore((state) => state.session);
export const useIsAuthenticated = () =>
  useAuthStore((state) => !!state.session?.accessToken);
