"use client";

import { redirect } from "next/navigation";
import { fakeRequest } from "@lib/api";
import { toastPromise } from "@lib/toast";
import { RESET_PASSWORD_REDIRECT_ROUTE } from "./constants";
import { PasswordChangeSchema } from "../components/types";

export async function resetPassword(formData: PasswordChangeSchema) {
  return toastPromise(
    fakeRequest({
      data: {
        success: true,
        message: "Password reset successful",
        ...formData,
      },
      succeed: true,
      delay: 5000,
    }),
    {
      pending: "Resetting password",
      success: "Password reset successfully!",
      error: "Something went wrong",
    },
  ).then(() => redirect(RESET_PASSWORD_REDIRECT_ROUTE));
}
