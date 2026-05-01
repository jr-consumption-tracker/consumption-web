import { createAction } from "@reduxjs/toolkit";

export interface RefreshedSessionPayload {
  accessToken: string;
  refreshToken?: string;
}

export const authSessionRefreshed = createAction<RefreshedSessionPayload>(
  "shared/authSessionRefreshed",
);

export const authSessionExpired = createAction("shared/authSessionExpired");

