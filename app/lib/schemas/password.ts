import z from "zod";

export const passwordSchema = z
  .string()
  .min(8, "At least 8 characters")
  .regex(/[A-Z]/, "At least one uppercase letter")
  .regex(/[a-z]/, "At least one lowercase letter")
  .regex(/\d/, "At least one digit")
  .regex(/[^A-Za-z0-9]/, "At least one special character");
