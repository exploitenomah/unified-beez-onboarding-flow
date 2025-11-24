"use client";
import { useAsyncAction } from "@hooks/useAsyncAction";
import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import Padlock from "@assets/svgs/Padlock";
import useToggleRoute from "@hooks/useToggleRoute";
import { resetPassword } from "./hooks";
import { PasswordForm } from "../components/PasswordForm";
import { RESET_PASSWORD_START_ROUTE } from "./constants";

export default function SignupPage() {
  const { run: handleSubmit, isLoading } = useAsyncAction(resetPassword);
  const { goTo } = useToggleRoute();
  return (
    <OnboardingStepCardWithHeader
      type="icon"
      icon={
        <span className="block translate-x-0.5">
          <Padlock />
        </span>
      }
      heading="Reset Password"
      subHeading="Create a new password for your account"
      className="max-w-5xl"
    >
      <PasswordForm
        showOldPassword={false}
        onSubmit={(formData) => handleSubmit(formData)}
        isLoading={isLoading}
        onCancel={() => goTo(RESET_PASSWORD_START_ROUTE)}
      />
    </OnboardingStepCardWithHeader>
  );
}
