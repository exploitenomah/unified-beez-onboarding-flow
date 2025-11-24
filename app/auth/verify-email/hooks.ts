"use client";

import z from "zod";
import { useCallback, useState } from "react";
import { redirect } from "next/navigation";
import { fakeRequest } from "@lib/api";
import { toastPromise } from "@lib/toast";
import useValidateWithZodSchema from "@hooks/useValidateWithZodSchema";
import { SUBMISSION_REDIRECT_ROUTE } from "./constants";

export function useVerifyEmailState() {
  const [otp, setOtp] = useState("");
  const updateOtp = useCallback((value: string) => {
    setOtp(value);
  }, []);
  return {
    otp,
    updateOtp,
  };
}

export function useValidateOtp(otp: string) {
  return useValidateWithZodSchema(z.string().length(6), otp);
}

export async function submitOtpForVerification(formData: { otp: string }) {
  return toastPromise(
    fakeRequest({
      data: {
        success: true,
        message: "Email verified successfully",
        ...formData,
      },
      succeed: true,
      delay: 5000,
    }),
    {
      pending: "Verifying email...",
      success: "Email verified successfully!",
      error: "Something went wrong",
    },
  ).then(() => redirect(SUBMISSION_REDIRECT_ROUTE));
}
