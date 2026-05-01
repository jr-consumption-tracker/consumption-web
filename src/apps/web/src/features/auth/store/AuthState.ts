import type { User } from "@web/entities/user";
import type { AuthSession } from "@web/entities/auth";

/**
 * AuthState - Composite state combining User and Auth entities.
 *
 * Udržuje aktuálního uživatele a session dohromady,
 * protože v aplikaci vždy existují společně (nebo oba jsou null).
 */
export interface AuthState {
  user: User | null;
  session: AuthSession | null;
}
