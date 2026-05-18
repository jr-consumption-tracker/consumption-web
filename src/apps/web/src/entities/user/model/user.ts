export type UserStatus = "active" | "inactive" | "pending";

export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  status: UserStatus;
}
