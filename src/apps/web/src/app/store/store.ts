import { combineReducers, configureStore } from "@reduxjs/toolkit/react";
import authReducer from "@web/features/auth/store/authSlice";
import { mainBaseApi } from "@web/shared/api/mainBaseApi";

export const rootReducer = combineReducers({
  [mainBaseApi.reducerPath]: mainBaseApi.reducer,
  // theme: themeReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([]).concat(mainBaseApi.middleware),
  devTools: import.meta.env.VITE_ENABLE_DEVTOOLS === "true",
});
