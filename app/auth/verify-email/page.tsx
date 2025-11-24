"use client";
import { useAsyncAction } from "@hooks/useAsyncAction";
import useToggleRoute from "@hooks/useToggleRoute";
import MailIcon from "@assets/svgs/Mail";
import AppForm from "@components/form/AppForm";
import StepActions from "@components/stepActions/StepActions";
import TextButton from "@components/button/TextButton";
import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import OTPInput from "@components/input/OTP";
import {
  submitOtpForVerification,
  useVerifyEmailState,
  useValidateOtp,
} from "./hooks";
import { BACK_REDIRECT_ROUTE } from "./constants";

export default function ForgotPassword() {
  const { goTo } = useToggleRoute();
  const { otp, updateOtp } = useVerifyEmailState();
  const { isValid } = useValidateOtp(otp);
  const { run: handleSubmit, isLoading } = useAsyncAction(
    submitOtpForVerification,
  );

  return (
    <OnboardingStepCardWithHeader
      type="icon"
      icon={<MailIcon />}
      heading="Please check your email."
      subHeading={`We've sent a code to ${otp}`}
      className="max-w-5xl"
    >
      <AppForm
        onSubmit={() => handleSubmit({ otp })}
        className="flex flex-col gap-4 mt-6"
      >
        <OTPInput onChange={(otp) => updateOtp(otp)} />
        <p className="sub-text text-center mt-2 mb-25">
          Didn&apos;t get a code?&nbsp;
          <TextButton type="button" className="text-primary-100">
            Click to resend.
          </TextButton>
        </p>
        <div className="px-6 pb-6">
          <StepActions
            onBack={() => goTo(BACK_REDIRECT_ROUTE)}
            nextLabel="Continue"
            backLabel="Go Back"
            nextType="submit"
            isNextDisabled={!isValid || isLoading}
          />
        </div>
      </AppForm>
    </OnboardingStepCardWithHeader>
  );
}
