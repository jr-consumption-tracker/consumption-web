import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./AuthState";

export const initialState: AuthState = {
  email: "",
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    logout: (state) => {
      return {
        ...state,
        loggedOut: true,
      };
    },
  },
  //   extraReducers: (builder) => {
  //   builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
  //     state.user = action.payload
  //   })
  // },
});

export const actions = authSlice.actions;
export default authSlice.reducer;
