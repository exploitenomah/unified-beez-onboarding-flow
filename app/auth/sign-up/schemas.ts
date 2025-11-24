import { z } from "zod";
import { passwordSchema } from "@lib/schemas/password";

export const signupSchema = z
  .object({
    email: z.email("Invalid email"),
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
