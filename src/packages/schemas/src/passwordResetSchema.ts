import { z } from "zod";

const LOWERCASE_REGEX = /[a-z]/;
const UPPERCASE_REGEX = /[A-Z]/;
const NUMBERS_REGEX = /[0-9]/;

export const passwordResetSchema = z
  .object({
    password: z
      .string()
      .min(1, { error: "required" })
      .regex(LOWERCASE_REGEX, { error: "password.lowercase" })
      .regex(UPPERCASE_REGEX, { error: "password.uppercase" })
      .regex(NUMBERS_REGEX, { error: "password.number" })
      .min(8, { error: "password.tooShort" })
      .max(24, { error: "password.tooLong" }),
    confirmPassword: z.string().min(1, { error: "required" }),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "password.mismatch",
        path: ["confirmPassword"],
      });
    }
  });

export type PasswordResetSchemaValues = z.infer<typeof passwordResetSchema>;
