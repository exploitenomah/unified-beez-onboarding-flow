"use client";

import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";

export default function OnboardingWelcome() {
  return (
    <>
      <OnboardingStepCardWithHeader type="custom" customHeader={<>2/2</>}>
        <div className="h-[1400px]"></div>
      </OnboardingStepCardWithHeader>
    </>
  );
}
