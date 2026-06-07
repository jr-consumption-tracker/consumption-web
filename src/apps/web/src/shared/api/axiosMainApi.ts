import axios from "axios";
import HttpStatusCodes from "http-status";

import { useAuthStore } from "@web/features/auth/model/store/authStore";

import type { AuthSession } from "@web/features/auth/model/types/credentials";

const MAIN_API_BASE_URL = import.meta.env.DEV
  ? "/api"
  : `${import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "")}/api`;

export const axiosMainApi = axios.create({
  baseURL: MAIN_API_BASE_URL,
});

axiosMainApi.interceptors.request.use((config) => {
  const authorizationHeader = config.headers?.["Authorization"];
  const authState = useAuthStore.getState();
  const accessToken = authState.session?.accessToken;

  config.withCredentials = true; // Posílá cookies, které obsahují refresh token

  if (!authorizationHeader && accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

axiosMainApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === HttpStatusCodes.FORBIDDEN &&
      !originalRequest.sent
    ) {
      originalRequest.sent = true;

      try {
        const persistLogin = localStorage.getItem("persist") ?? false;
        const url = `web/auth/refreshToken?persistLogin=${persistLogin}`;
        const refreshResponse = await axios.get<AuthSession>(url, {
          baseURL: MAIN_API_BASE_URL,
          withCredentials: true,
        });

        if (refreshResponse.status === HttpStatusCodes.OK) {
          const newSession = refreshResponse.data;

          useAuthStore.getState().setAccessToken(newSession.accessToken);

          return axiosMainApi(originalRequest);
        } else {
          useAuthStore.getState().logout();
        }
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        useAuthStore.getState().logout();

        return Promise.reject(refreshError);
      }
    }

    console.error("API error:", error);

    return Promise.reject(error);
  },
);
