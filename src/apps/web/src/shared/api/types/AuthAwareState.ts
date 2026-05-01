export interface AuthAwareState {
  auth?: {
    session?: {
      accessToken?: string;
    } | null;
  };
}

