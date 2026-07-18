import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import type { StateStorage } from "zustand/middleware";
import type { AuthSession } from "../types/credentials";

export interface AuthState {
  session: AuthSession | null;
  setSession: (session: AuthSession) => void;
  setAccessToken: (accessToken: string) => void;
  logout: () => void;
}

const PERSIST_LOGIN_KEY = "persistLoginWeb";
const AUTH_STORAGE_KEY = "auth-storage";

const isPersistLoginEnabled = (): boolean => {
  try {
    return JSON.parse(localStorage.getItem(PERSIST_LOGIN_KEY) ?? "false");
  } catch {
    return false;
  }
};

// createJSONStorage's getStorage callback only runs once, when the store is
// created, so its result (window.localStorage vs window.sessionStorage)
// would otherwise be locked in for the store's lifetime. This object's own
// methods re-check the persistLogin flag on every call instead, so each
// read/write independently targets the correct backend.
const dynamicAuthStorage: StateStorage = {
  getItem: (name) =>
    (isPersistLoginEnabled() ? localStorage : sessionStorage).getItem(name),
  setItem: (name, value) =>
    (isPersistLoginEnabled() ? localStorage : sessionStorage).setItem(
      name,
      value,
    ),
  removeItem: (name) => {
    localStorage.removeItem(name);
    sessionStorage.removeItem(name);
  },
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
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
        logout: () => {
          set({ session: null }, false, "auth/logout");
          localStorage.removeItem(AUTH_STORAGE_KEY);
          sessionStorage.removeItem(AUTH_STORAGE_KEY);
        },
      }),
      {
        name: AUTH_STORAGE_KEY,
        storage: createJSONStorage(() => dynamicAuthStorage),
        partialize: (state) => ({ session: state.session }),
      },
    ),
    { enabled: import.meta.env.VITE_ENABLE_DEVTOOLS === "true" },
  ),
);

export const useSelectSession = () => useAuthStore((state) => state.session);
export const useIsAuthenticated = () =>
  useAuthStore((state) => !!state.session?.accessToken);
