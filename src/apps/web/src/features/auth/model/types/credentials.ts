export interface AuthSession {
  email: string;
  accessToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  persistLogin?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  termsAgreement: boolean;
}
