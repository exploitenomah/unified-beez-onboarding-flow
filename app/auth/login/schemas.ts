import { z } from "zod";
import { passwordSchema } from "../sign-up/schemas";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: passwordSchema,
  rememberMe: z.boolean(),
});
