export interface AuthSession {
  accessToken: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password?: string;
}

export interface RegisterData {
  email: string;
  password?: string;
  name?: string;
}
