"use client";

import { useCallback, useState } from "react";
import { redirect } from "next/navigation";
import { fakeRequest } from "@lib/api";
import { toastPromise } from "@lib/toast";
import useValidateWithZodSchema from "@hooks/useValidateWithZodSchema";
import { SignupFormSchema } from "./types";
import { signupSchema } from "./schemas";
import { SIGNUP_REDIRECT_ROUTE } from "./constants";

export function useSignupState() {
  const [formData, setFormData] = useState<SignupFormSchema>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const updateFormData = useCallback(
    (field: keyof SignupFormSchema, value: string) => {
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

export function usePasswordRulesValidation(password: string) {
  const rules = [
    { label: "At least 8 characters", test: password.length >= 8 },
    { label: "At least one uppercase letter", test: /[A-Z]/.test(password) },
    { label: "At least one lowercase letter", test: /[a-z]/.test(password) },
    { label: "At least one digit", test: /\d/.test(password) },
    {
      label: "At least one special character",
      test: /[^A-Za-z0-9]/.test(password),
    },
  ];
  const isValid = rules.every((r) => r.test);
  return { rules, isValid };
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
