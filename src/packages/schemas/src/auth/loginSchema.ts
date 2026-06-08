import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .superRefine((val, ctx) => {
      if (val.length === 0) {
        ctx.addIssue({ code: "custom", message: "required" });
      }
    })
    .pipe(z.email({ error: "email.invalid" })),
  password: z.string().min(1, { error: "required" }),
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;
