"use client";
import { useAsyncAction } from "@hooks/useAsyncAction";
import useToggleRoute from "@hooks/useToggleRoute";
import { HelpIcon } from "@assets/svgs/Help";
import Padlock from "@assets/svgs/Padlock";
import AppForm from "@components/form/AppForm";
import StepActions from "@components/stepActions/StepActions";
import TextButton from "@components/button/TextButton";
import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import AdornedInput from "@components/input/AdornedInput";
import InputGroup from "@components/input/InputGroup";
import {
  submitResetPasswordRequest,
  useRequestPasswordRequestState,
  useValidateResetPasswordRequestForm,
} from "./hooks";
import { BACK_REDIRECT_ROUTE } from "./constants";

export default function ForgotPassword() {
  const { goTo } = useToggleRoute();
  const { email, updateEmail } = useRequestPasswordRequestState();
  const { isValid, errors } = useValidateResetPasswordRequestForm(email);
  const { run: handleSubmit, isLoading } = useAsyncAction(
    submitResetPasswordRequest,
  );

  return (
    <OnboardingStepCardWithHeader
      type="icon"
      icon={
        <span className="block translate-x-0.5">
          <Padlock />
        </span>
      }
      heading="Reset Password"
      subHeading="We'll email you a link to reset password"
      className="max-w-5xl"
    >
      <AppForm
        onSubmit={() => handleSubmit({ email })}
        className="flex flex-col gap-4"
      >
        <InputGroup className="w-full" label="Email">
          <AdornedInput
            endAdornment={
              <span className="text-dark-base-40">
                <HelpIcon />
              </span>
            }
            name="Email"
            type="email"
            value={email}
            onChange={(e) => updateEmail(e.target.value)}
            placeholder="johndoe@company.com"
            error={email.length > 0 && errors.email !== undefined}
          />
        </InputGroup>
        <p className="sub-text text-center mt-2 mb-6">
          Didn&apos;t get a code?&nbsp;
          <TextButton type="button" className="text-primary-100">
            Click to resend.
          </TextButton>
        </p>
        <StepActions
          onBack={() => goTo(BACK_REDIRECT_ROUTE)}
          onNext={() => {}}
          nextLabel="Continue"
          backLabel="Go Back"
          nextType="submit"
          isNextDisabled={!isValid || isLoading}
        />
      </AppForm>
    </OnboardingStepCardWithHeader>
  );
}
