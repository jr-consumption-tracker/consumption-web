/**
 * @entities - Domain entities barrel export
 *
 * Všechny doménové entity projektu.
 * Features a Widgety importují vždy z konkrétní subcesty (např. `@web/entities/auth`),
 * tento soubor slouží jako centrální přehled.
 */
export type { User, UserStatus } from "./user";
export type { AuthSession, LoginCredentials, RegisterData } from "./auth";
export type { PricingPlan } from "./pricing";
