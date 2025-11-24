"use client";
import { useAsyncAction } from "@hooks/useAsyncAction";
import TextButton from "@components/button/TextButton";
import Checkbox from "@components/input/Checkbox";
import Button from "@components/button/Button";
import EncryptedInput from "@components/input/EncryptedInput";
import Input from "@components/input/Input";
import InputGroup from "@components/input/InputGroup";
import AppForm from "@components/form/AppForm";
import { loginUser, useLoginState, useValidateLoginForm } from "./hooks";

export default function LoginPage() {
  const { formData, updateFormData } = useLoginState();
  const { isValid, errors } = useValidateLoginForm(formData);
  const { run: handleSubmit, isLoading } = useAsyncAction(loginUser);

  return (
    <AppForm
      onSubmit={() => handleSubmit(formData)}
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
        helperText="Enter your password"
        error={formData.email.length && errors.email}
      >
        <EncryptedInput
          name="password"
          value={formData.password}
          onChange={(e) => updateFormData("password", e.target.value)}
          placeholder="•••••••••••••"
          error={formData.password.length > 0 && errors.password !== undefined}
        />
      </InputGroup>
      <div className="flex items-center justify-between">
        <Checkbox
          onChange={(e) => updateFormData("rememberMe", e.target.checked)}
          label="Remember me"
        />
        <TextButton
          as="a"
          href="/auth/forgot-password"
          className="text-primary-100"
        >
          Forgot Password?
        </TextButton>
      </div>
      <Button
        disabled={!isValid || isLoading}
        isLoading={isLoading}
        className="mt-6"
        fullWidth
        variant="primary"
        color="primary"
      >
        Log In
      </Button>
    </AppForm>
  );
}
