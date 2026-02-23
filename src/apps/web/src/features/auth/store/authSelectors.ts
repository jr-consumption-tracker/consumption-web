import type { RootState } from "@web/app/store/types";

export const selectEmail = (state: RootState) => state.auth.email;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectIsAuthenticated = (state: RootState) =>
  !!state.auth.accessToken;
