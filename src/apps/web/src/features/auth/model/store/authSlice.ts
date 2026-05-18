import { createSlice } from "@reduxjs/toolkit";
import {
  authSessionExpired,
  authSessionRefreshed,
} from "@web/shared/api/authSessionEvents";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./AuthState";
import type { User } from "@web/entities/user";
import type { AuthSession } from "@web/entities/auth";

export const initialState: AuthState = {
  user: null,
  session: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; session: AuthSession }>,
    ) => {
      state.user = action.payload.user;
      state.session = action.payload.session;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setSession: (state, action: PayloadAction<AuthSession>) => {
      state.session = action.payload;
    },
    logout: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authSessionRefreshed, (state, action) => {
        state.session = action.payload;
      })
      .addCase(authSessionExpired, () => {
        return { ...initialState };
      });
  },
});

export const actions = authSlice.actions;
export default authSlice.reducer;
