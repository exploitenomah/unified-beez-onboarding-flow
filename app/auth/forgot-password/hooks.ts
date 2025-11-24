"use client";

import z from "zod";
import { useCallback, useState } from "react";
import { redirect } from "next/navigation";
import { fakeRequest } from "@lib/api";
import { toastPromise } from "@lib/toast";
import useValidateWithZodSchema from "@hooks/useValidateWithZodSchema";
import { SUBMISSION_REDIRECT_ROUTE } from "./constants";

export function useRequestPasswordRequestState() {
  const [email, setEmail] = useState("");
  const updateEmail = useCallback((value: string) => {
    setEmail(value);
  }, []);
  return {
    email,
    updateEmail,
  };
}

export function useValidateResetPasswordRequestForm(email: string) {
  return useValidateWithZodSchema(z.email(), email);
}

export async function submitResetPasswordRequest(formData: { email: string }) {
  return toastPromise(
    fakeRequest({
      data: {
        success: true,
        message: "A link to reset your password has been sent to your email",
        ...formData,
      },
      succeed: true,
      delay: 5000,
    }),
    {
      pending: "Sending email",
      success: "A link to reset your password has been sent to your email!",
      error: "Something went wrong",
    },
  ).then(() => redirect(SUBMISSION_REDIRECT_ROUTE));
}
