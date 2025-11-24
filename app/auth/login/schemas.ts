import { z } from "zod";
import { passwordSchema } from "@app/auth/sign-up/schemas";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: passwordSchema,
  rememberMe: z.boolean(),
});
