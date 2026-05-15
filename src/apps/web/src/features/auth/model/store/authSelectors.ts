import type { AuthState } from "./AuthState";

interface AuthRootState {
  auth: AuthState;
}

export const selectUser = (state: AuthRootState) => state.auth.user;
export const selectSession = (state: AuthRootState) => state.auth.session;
export const selectEmail = (state: AuthRootState) => state.auth.user?.email ?? "";
export const selectAccessToken = (state: AuthRootState) =>
  state.auth.session?.accessToken ?? "";
export const selectIsAuthenticated = (state: AuthRootState) =>
  !!state.auth.session?.accessToken;
