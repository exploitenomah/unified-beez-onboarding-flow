import z from "zod";
import { loginSchema } from "./schemas";

export type LoginFormSchema = z.infer<typeof loginSchema>;
