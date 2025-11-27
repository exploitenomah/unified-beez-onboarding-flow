"use client";

import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import StepActions from "@components/stepActions/StepActions";
import {
  useGoToNextStep,
  useGoToPreviousStep,
} from "@app/onboarding/hooks/useChangeStep";
import Badge from "@components/badge/badge";

export default function OnboardingWelcome() {
  const { handleNext } = useGoToNextStep("manual");
  const { handleBack } = useGoToPreviousStep("manual");

  return (
    <>
      <OnboardingStepCardWithHeader
        className="max-w-213.5"
        type="custom"
        customHeader={<Badge>Step 3/8</Badge>}
        heading="Team & Role Setup"
        subHeading="Get started now - it's free. No credit card required"
      >
        <div className="mt-125 flex flex-col justify-between gap-4">
          <StepActions
            onBack={handleBack}
            onNext={handleNext}
            nextLabel={"Continue"}
            backLabel={"Go Back"}
          />
        </div>
      </OnboardingStepCardWithHeader>
    </>
  );
}
