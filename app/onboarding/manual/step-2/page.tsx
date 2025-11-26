"use client";

import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import Input from "@components/input/Input";
import InputGroup from "@components/input/InputGroup";
import StepActions from "@components/stepActions/StepActions";
import userData from "@app/onboarding/data.json";
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
    0: "max-w-[51.8rem]",
    1: "max-w-[86.3rem]",
    2: "max-w-[91.3rem]",
    3: "max-w-[81.1rem]",
    4: "max-w-[69.6rem]",
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
        customHeader={<Badge>Step 2/8</Badge>}
        heading="User Type Detection & Info"
        subHeading="We'll customize your setup based on your plan—just fill in a few business or organizational details if required."
      >
        <div className="flex flex-col gap-4 mt-9.25">
          <InputGroup label="Business name">
            <Input defaultValue={`${userData.businessName}`} />
          </InputGroup>

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
