import { createAction } from "@reduxjs/toolkit";

import type { AuthSession } from "@web/entities";

export const authSessionRefreshed = createAction<AuthSession>(
  "shared/authSessionRefreshed",
);

export const authSessionExpired = createAction("shared/authSessionExpired");
