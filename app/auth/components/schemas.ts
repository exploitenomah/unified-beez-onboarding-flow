import { z } from "zod";
import { passwordSchema } from "@lib/schemas/password";

export const passwordChangeSchema = z
  .object({
    oldPassword: z.string(),
    newPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
