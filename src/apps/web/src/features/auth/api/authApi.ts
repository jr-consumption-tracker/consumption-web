import { axiosMainApi } from "@web/shared/api/axiosMainApi";

import type {
  AuthSession,
  LoginCredentials,
  RegisterData,
} from "../model/types/credentials";

const AUTH_API_BASE_PATH = "web/auth";

export const register = async (payload: RegisterData): Promise<void> => {
  await axiosMainApi.post<void>(`${AUTH_API_BASE_PATH}/register`, payload);
};

export const login = async (
  payload: LoginCredentials,
): Promise<AuthSession> => {
  const response = await axiosMainApi.post<AuthSession>(
    `${AUTH_API_BASE_PATH}/login`,
    payload,
  );

  return response.data;
};

export const logout = async (): Promise<void> => {
  await axiosMainApi.post<void>(`${AUTH_API_BASE_PATH}/logout`);
};
