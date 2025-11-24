import { z } from "zod";
import { passwordSchema } from "@lib/schemas/password";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: passwordSchema,
  rememberMe: z.boolean(),
});
