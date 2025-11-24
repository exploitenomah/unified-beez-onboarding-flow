"use client";

import { useCallback, useState } from "react";
import { redirect } from "next/navigation";
import { fakeRequest } from "@lib/api";
import { toastPromise } from "@lib/toast";
import useValidateWithZodSchema from "@hooks/useValidateWithZodSchema";
import { loginSchema } from "./schemas";
import { LoginFormSchema } from "./types";
import { LOGIN_REDIRECT_ROUTE } from "./constants";

export function useLoginState() {
  const [formData, setFormData] = useState<LoginFormSchema>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const updateFormData = useCallback(
    (field: keyof LoginFormSchema, value: string | boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );
  return {
    formData,
    updateFormData,
    allFieldsArePresent: Object.values(formData).every((value) =>
      Boolean(value),
    ),
  };
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
