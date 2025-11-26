"use client";

import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import StepActions from "@components/stepActions/StepActions";
import useToggleRoute from "@hooks/useToggleRoute";
import { useGoToNextStep } from "@app/onboarding/hooks/useChangeStep";
import useOnboardingStateSelector from "@store/onboarding/onboarding.selector";
import Badge from "@components/badge/badge";

export default function OnboardingWelcome() {
  const { goTo } = useToggleRoute();
  const { handleNext } = useGoToNextStep("manual");
  const {
    progress: {
      manual: { currentSubStepIndex },
    },
  } = useOnboardingStateSelector();

  const containerMaxWidthMappings = {
    0: "max-w-[70.2rem]",
    1: "max-w-[106.7rem]",
    2: "max-w-[129.4rem]",
    3: "max-w-[78.4rem]",
  };
  return (
    <>
      <OnboardingStepCardWithHeader
        className={
          containerMaxWidthMappings[
            currentSubStepIndex as keyof typeof containerMaxWidthMappings
          ]
        }
        type="custom"
        customHeader={<Badge>Step 5/8</Badge>}
        heading="Step 05 - Channel Integration"
        subHeading="Connect your communication platforms and preview how UnifiedBeez will interact with each one."
      >
        <div className="flex flex-col gap-4 mt-50">
          <StepActions
            onBack={() => goTo("/onboarding")}
            onNext={handleNext}
            nextLabel={"Continue"}
            backLabel={"Go Back"}
          />
        </div>
      </OnboardingStepCardWithHeader>
    </>
  );
}
