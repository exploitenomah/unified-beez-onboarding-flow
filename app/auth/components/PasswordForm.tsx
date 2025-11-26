import AppForm from "@components/form/AppForm";
import EncryptedInput from "@components/input/EncryptedInput";
import InputGroup from "@components/input/InputGroup";
import { ValidationRule } from "@components/validation/ValidationRule";
import { usePasswordRulesValidation } from "@hooks/usePasswordValidation";
import StepActions from "@components/stepActions/StepActions";
import { usePasswordFormState, useValidatePasswordForm } from "./hooks";
import { PasswordChangeSchema } from "./types";

export function PasswordForm({
  showOldPassword = false,
  onSubmit,
  isLoading,
  onCancel,
}: {
  showOldPassword?: boolean;
  onSubmit: (formData: PasswordChangeSchema) => void;
  isLoading?: boolean;
  onCancel: () => void;
}) {
  const { formData, updateFormData, allFieldsArePresent } =
    usePasswordFormState();
  const { errors, isValid } = useValidatePasswordForm(formData);
  const { rules } = usePasswordRulesValidation(formData.newPassword);

  return (
    <AppForm
      onSubmit={() => onSubmit(formData)}
      className="flex flex-col gap-4"
    >
      {showOldPassword && (
        <InputGroup
          className="w-full"
          label="Old Password"
          helperText="Enter your old password"
          error={formData.oldPassword.length && errors.oldPassword}
        >
          <EncryptedInput
            name="Old Password"
            value={formData.oldPassword}
            onChange={(e) => updateFormData("oldPassword", e.target.value)}
            placeholder="•••••••••••••"
            error={
              formData.oldPassword.length > 0 &&
              errors.oldPassword !== undefined
            }
          />
        </InputGroup>
      )}
      <InputGroup
        className="w-full"
        label="Password"
        helperText="Enter a strong password"
      >
        <EncryptedInput
          name="Password"
          value={formData.newPassword}
          onChange={(e) => updateFormData("newPassword", e.target.value)}
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
      <StepActions
        nextLabel="Continue"
        backLabel="Go Back"
        nextType="submit"
        onBack={onCancel}
        onNext={() => {}}
        isNextDisabled={!isValid || !allFieldsArePresent || isLoading}
      />
    </AppForm>
  );
}
