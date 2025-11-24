import useFormStateManager from "@hooks/useFormStateManager";
import useValidateWithZodSchema from "@hooks/useValidateWithZodSchema";
import { PasswordChangeSchema } from "./types";
import { passwordChangeSchema } from "./schemas";

export function usePasswordFormState() {
  return useFormStateManager({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
}

export function useValidatePasswordForm(formData: PasswordChangeSchema) {
  return useValidateWithZodSchema(passwordChangeSchema, formData);
}
