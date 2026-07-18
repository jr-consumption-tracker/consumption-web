import axios from "axios";
import HttpStatusCodes from "http-status";

import { useAuthStore } from "@web/features/auth/model/store/authStore";

import type { AuthSession } from "@web/features/auth/model/types/credentials";

const MAIN_API_BASE_URL =
  import.meta.env.MODE !== "production" && import.meta.env.MODE !== "test"
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

let refreshInFlightPromise: Promise<AuthSession | null> | null = null;

/**
 * refreshSession - shared refresh-token call, used both by the reactive
 * 403 interceptor below and by the proactive startup check in App.tsx.
 * On success, updates the store's access token. On failure, logs out.
 * Returns the refreshed session, or null if the refresh failed.
 *
 * Concurrent calls collapse into a single in-flight request: the refresh
 * token is rotated on every use, so two simultaneous requests would race
 * over the same token and cause a spurious logout.
 */
export const refreshSession = async (): Promise<AuthSession | null> => {
  if (refreshInFlightPromise) {
    return refreshInFlightPromise;
  }
  // TODO: Otestovat sliding window. POkud nemám začkrtnutý persist login, platnost topkenu je nastavena fioxně na 8 hodin. Pokud je persistLogin zaškrtnutý, platnost tokenu je nastavena na 30 dní a s každým refresh tokenem se přegeneruje refresh token a automatizky s eprodlužuje jeho platnost
  refreshInFlightPromise = (async () => {
    try {
      const refreshResponse = await axios.get<AuthSession>(
        "web/auth/refreshToken",
        {
          baseURL: MAIN_API_BASE_URL,
          withCredentials: true,
        },
      );

      if (refreshResponse.status === HttpStatusCodes.OK) {
        const newSession = refreshResponse.data;

        useAuthStore.getState().setAccessToken(newSession.accessToken);

        return newSession;
      }

      useAuthStore.getState().logout();

      return null;
    } catch (refreshError) {
      console.error("Failed to refresh token:", refreshError);
      useAuthStore.getState().logout();

      return null;
    }
  })();

  try {
    return await refreshInFlightPromise;
  } finally {
    refreshInFlightPromise = null;
  }
};

axiosMainApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === HttpStatusCodes.FORBIDDEN &&
      !originalRequest.sent
    ) {
      originalRequest.sent = true;

      const refreshedSession = await refreshSession();

      if (refreshedSession) {
        return axiosMainApi(originalRequest);
      }

      return Promise.reject(error);
    }

    if (error.response?.status === HttpStatusCodes.UNAUTHORIZED) {
      useAuthStore.getState().logout();
    }

    console.error("API error:", error);

    return Promise.reject(error);
  },
);
