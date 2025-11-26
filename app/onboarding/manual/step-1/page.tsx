"use client";

import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import Input from "@components/input/Input";
import InputGroup from "@components/input/InputGroup";
import SectionHeading from "@components/headings/SectionHeading";
import StepActions from "@components/stepActions/StepActions";
import { Plan } from "@app/types";
import PlanCard from "@app/onboarding/components/PlanCard";
import userData from "@app/onboarding/data.json";
import useToggleRoute from "@hooks/useToggleRoute";
import { useGoToNextStep } from "@app/onboarding/hooks/useChangeStep";
import Badge from "@components/badge/badge";

export default function OnboardingWelcome() {
  const { goTo } = useToggleRoute();
  const { handleNext } = useGoToNextStep("manual");

  return (
    <>
      <OnboardingStepCardWithHeader
        className="max-w-[96.6rem]"
        type="custom"
        customHeader={<Badge>Step 1/8</Badge>}
        heading="Account Summary"
        subHeading="Choose your preferred login method and plan to begin setting up your UnifiedBeez experience."
      >
        <div className="flex flex-col gap-4 mt-9.25">
          <h2 className="input-group__label">Personal details</h2>
          <InputGroup labelClassName="font-normal" label="Full name">
            <Input
              value={`${userData.firstName} ${userData.lastName}`}
              readOnly
            />
          </InputGroup>
          <div className="grid grid-row sm:grid-cols-2 gap-6">
            <InputGroup labelClassName="font-normal" label="Email">
              <Input type="email" readOnly value={userData.email} />
            </InputGroup>
            <InputGroup labelClassName="font-normal" label="Phone number">
              <Input type="string" readOnly value={userData.phoneNumber} />
            </InputGroup>
          </div>
          <div className="flex flex-col gap-6 pb-[1.4rem] mb-10">
            <SectionHeading>Summary</SectionHeading>
            <PlanCard
              plan={userData.currentPlan as Plan}
              isOwnPlan
              className="min-h-66.5"
            />
          </div>
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
