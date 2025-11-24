"use client";
import { useAsyncAction } from "@hooks/useAsyncAction";
import { ValidationRule } from "@components/validation/ValidationRule";
import Button from "@components/button/Button";
import EncryptedInput from "@components/input/EncryptedInput";
import Input from "@components/input/Input";
import InputGroup from "@components/input/InputGroup";
import {
  usePasswordRulesValidation,
  useSignupState,
  useValidateSignupForm,
  signupUser,
  preventEventDefaultAndCall,
} from "./hooks";

export default function SignupPage() {
  const { formData, updateFormData } = useSignupState();
  const { rules } = usePasswordRulesValidation(formData.password);
  const { isValid, errors } = useValidateSignupForm(formData);
  const { run: handleSubmit, isLoading } = useAsyncAction(signupUser);

  return (
    <form
      onSubmit={(e) =>
        preventEventDefaultAndCall(e, () => handleSubmit(formData))
      }
      className="flex flex-col gap-4"
    >
      <InputGroup
        className="w-full"
        label="Email"
        helperText="Enter your company email eg: johndoe@company.com"
        error={formData.email.length && errors.email}
      >
        <Input
          name="Email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          placeholder="johndoe@company.com"
          error={formData.email.length > 0 && errors.email !== undefined}
        />
      </InputGroup>
      <InputGroup
        className="w-full"
        label="Password"
        helperText="Enter a strong password"
      >
        <EncryptedInput
          name="Password"
          value={formData.password}
          onChange={(e) => updateFormData("password", e.target.value)}
          placeholder="•••••••••••••"
        />
      </InputGroup>
      <InputGroup
        className="w-full"
        label="Confirm Password"
        helperText="Enter password again"
        error={formData.confirmPassword.length && errors.confirmPassword}
      >
        <EncryptedInput
          name="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => updateFormData("confirmPassword", e.target.value)}
          placeholder="•••••••••••••"
          error={
            formData.confirmPassword.length > 0 &&
            errors.confirmPassword !== undefined
          }
        />
      </InputGroup>
      <div className="flex flex-col gap-2">
        {rules.map((rule) => (
          <ValidationRule
            key={rule.label}
            label={rule.label}
            isValid={rule.test}
          />
        ))}
      </div>
      <Button
        disabled={!isValid || isLoading}
        className="mt-6 mb-2"
        fullWidth
        variant="primary"
        color="primary"
        isLoading={isLoading}
      >
        Create Account
      </Button>
    </form>
  );
}
