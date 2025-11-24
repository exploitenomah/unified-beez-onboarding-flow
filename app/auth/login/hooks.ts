"use client";
import { redirect } from "next/navigation";
import { fakeRequest } from "@lib/api";
import { toastPromise } from "@lib/toast";
import useValidateWithZodSchema from "@hooks/useValidateWithZodSchema";
import useFormStateManager from "@hooks/useFormStateManager";
import { loginSchema } from "./schemas";
import { LoginFormSchema } from "./types";
import { LOGIN_REDIRECT_ROUTE } from "./constants";

export function useLoginState() {
  return useFormStateManager<LoginFormSchema>({
    email: "",
    password: "",
    rememberMe: false,
  });
}

export function useValidateLoginForm(formData: LoginFormSchema) {
  return useValidateWithZodSchema(loginSchema, formData);
}

export async function loginUser(formData: LoginFormSchema) {
  return toastPromise(
    fakeRequest({
      data: {
        success: true,
        message: "Signed in successfully",
        ...formData,
      },
      succeed: true,
      delay: 5000,
    }),
    {
      pending: "Signing you in...",
      success: "Signed in successfully!",
      error: "Something went wrong",
    },
  ).then(() => redirect(LOGIN_REDIRECT_ROUTE));
}
