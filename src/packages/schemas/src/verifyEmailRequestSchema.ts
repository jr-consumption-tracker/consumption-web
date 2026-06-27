import { z } from "zod";

export const verifyEmailRequestSchema = z.object({
  email: z.string().min(1, { error: "required" }),
});

export type VerifyEmailRequestSchemaValues = z.infer<typeof verifyEmailRequestSchema>;
