import { z } from "zod";

export const forgottenPasswordSchema = z.object({
  email: z.string().min(1, { error: "required" }),
});

export type ForgottenPasswordSchemaValues = z.infer<
  typeof forgottenPasswordSchema
>;
