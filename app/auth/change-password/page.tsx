"use client";
import { useAsyncAction } from "@hooks/useAsyncAction";
import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import Padlock from "@assets/svgs/Padlock";
import useToggleRoute from "@hooks/useToggleRoute";
import { resetPassword } from "./hooks";
import { PasswordForm } from "../components/PasswordForm";
import { CHANGE_PASSWORD_REDIRECT_ROUTE } from "./constants";

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
      heading="Create New Password"
      subHeading="Create a new password for your account"
      className="max-w-5xl"
    >
      <PasswordForm
        showOldPassword={true}
        onSubmit={(formData) => handleSubmit(formData)}
        isLoading={isLoading}
        onCancel={() => goTo(CHANGE_PASSWORD_REDIRECT_ROUTE)}
      />
    </OnboardingStepCardWithHeader>
  );
}
