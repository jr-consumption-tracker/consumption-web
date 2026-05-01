import { combineReducers, configureStore } from "@reduxjs/toolkit/react";
import { authReducer } from "@web/features/auth";
import { mainBaseApi } from "@web/shared/api/mainBaseApi";
import { errorMiddleware } from "@web/shared/api/middleware/errorMiddleware";

export const rootReducer = combineReducers({
  [mainBaseApi.reducerPath]: mainBaseApi.reducer,
  // theme: themeReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainBaseApi.middleware, errorMiddleware),
  devTools: import.meta.env.VITE_ENABLE_DEVTOOLS === "true",
});
