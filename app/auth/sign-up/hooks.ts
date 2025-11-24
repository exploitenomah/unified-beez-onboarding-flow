"use client";
import { redirect } from "next/navigation";
import { fakeRequest } from "@lib/api";
import { toastPromise } from "@lib/toast";
import useValidateWithZodSchema from "@hooks/useValidateWithZodSchema";
import useFormStateManager from "@hooks/useFormStateManager";
import { SignupFormSchema } from "./types";
import { signupSchema } from "./schemas";
import { SIGNUP_REDIRECT_ROUTE } from "./constants";

export function useSignupState() {
  return useFormStateManager({
    email: "",
    password: "",
    confirmPassword: "",
  });
}

export function useValidateSignupForm(formData: SignupFormSchema) {
  return useValidateWithZodSchema(signupSchema, formData);
}

export async function signupUser(formData: SignupFormSchema) {
  return toastPromise(
    fakeRequest({
      data: {
        success: true,
        message: "A verification code has been sent to your email",
        ...formData,
      },
      succeed: true,
      delay: 5000,
    }),
    {
      pending: "Creating account...",
      success: "Account created!",
      error: "Something went wrong",
    },
  ).then(() => redirect(SIGNUP_REDIRECT_ROUTE));
}
