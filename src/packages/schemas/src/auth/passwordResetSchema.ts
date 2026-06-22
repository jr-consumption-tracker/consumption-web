import { z } from "zod";

export const passwordResetSchema = z.object({
  email: z.string().min(1, { error: "required" }),
});

export type PasswordResetSchemaValues = z.infer<typeof passwordResetSchema>;
