import { useMemo } from "react";
import { useDeviceType } from "@hooks/useDeviceType";
import useOnboardingStateSelector from "@store/onboarding/onboarding.selector";
import TopStep from "./TopStep";
import TopStepNumber from "./TopStepNumber";

export default function StepsTopBar() {
  const { isMobile } = useDeviceType();
  const {
    copilotOnboardingSteps,
    progress: {
      copilot: { currentStepIndex },
    },
  } = useOnboardingStateSelector();
  const completedSteps = useMemo(
    () => copilotOnboardingSteps.filter((s) => s.isComplete),
    [copilotOnboardingSteps],
  );
  return (
    <nav className="pr-3.5 lg:pr-0 flex items-center gap-5.5 sm:gap-2 md:gap-0 lg:gap-2 xl:gap-8">
      {copilotOnboardingSteps.map((step, index) => (
        <TopStep
          key={step.id}
          displayName={step.displayName}
          stepNumber={index + 1}
          isActiveStep={currentStepIndex === index}
          showStartLine={!isMobile && index > 0}
        />
      ))}
      <TopStepNumber
        showStartLine
        hasGap
        number={copilotOnboardingSteps.length - completedSteps.length - 1}
        className="sm:hidden"
      />
    </nav>
  );
}
