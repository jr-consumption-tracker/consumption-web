import { z } from "zod";

export const registerSuccessSearchSchema = z.object({
  email: z.string().optional(),
});
