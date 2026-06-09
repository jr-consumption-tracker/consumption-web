import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { error: "required" }),
  password: z.string().min(1, { error: "required" }),
  persistLogin: z.boolean(),
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;
