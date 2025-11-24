"use client";

import { redirect } from "next/navigation";
import { fakeRequest } from "@lib/api";
import { toastPromise } from "@lib/toast";
import { CHANGE_PASSWORD_REDIRECT_ROUTE } from "./constants";
import { PasswordChangeSchema } from "../components/types";

export async function resetPassword(formData: PasswordChangeSchema) {
  return toastPromise(
    fakeRequest({
      data: {
        success: true,
        message: "Password changed successful",
        ...formData,
      },
      succeed: true,
      delay: 5000,
    }),
    {
      pending: "Changig password",
      success: "Password changed successfully!",
      error: "Something went wrong",
    },
  ).then(() => redirect(CHANGE_PASSWORD_REDIRECT_ROUTE));
}
