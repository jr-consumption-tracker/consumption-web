import { z } from "zod";

const LOWERCASE_REGEX = /[a-z]/;
const UPPERCASE_REGEX = /[A-Z]/;
const NUMBERS_REGEX = /[0-9]/;

export const registerSchema = z
  .object({
    email: z
      .string()
      .superRefine((val, ctx) => {
        if (val.length === 0) {
          ctx.addIssue({ code: "custom", message: "required" });
        }
      })
      .pipe(
        z.email({ error: "email.invalid" }).max(50, { error: "email.tooLong" }),
      ),
    password: z
      .string()
      .min(1, { error: "required" })
      .regex(LOWERCASE_REGEX, { error: "password.lowercase" })
      .regex(UPPERCASE_REGEX, { error: "password.uppercase" })
      .regex(NUMBERS_REGEX, { error: "password.number" })
      .min(8, { error: "password.tooShort" })
      .max(24, { error: "password.tooLong" }),
    confirmPassword: z.string().min(1, { error: "required" }),
    termsAgreement: z
      .boolean()
      .refine((val) => val === true, { error: "termsAgreement.required" }),
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

export type RegisterSchemaValues = z.infer<typeof registerSchema>;
