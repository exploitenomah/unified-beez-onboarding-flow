import z from "zod";
import { signupSchema } from "./schemas";

export type SignupFormSchema = z.infer<typeof signupSchema>;
