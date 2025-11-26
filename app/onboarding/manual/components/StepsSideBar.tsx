import useOnboardingStateSelector from "@store/onboarding/onboarding.selector";
import LogoHeader from "./LogoHeader";
import SideStep from "./SideStep";

export default function StepsSideBar() {
  const {
    steps: { manual: manualSteps },
    progress: {
      manual: { currentStepIndex, currentSubStepIndex },
    },
  } = useOnboardingStateSelector();
  return (
    <div className="h-full">
      <LogoHeader />
      <div className="h-[88dvh] overflow-auto scrollbar">
        <div className="bg-gradient-yellow-1 lg:bg-none divide-y-[0.05rem] divide-gray-35/50 border-b-gray-35/50 border-b-[0.05rem] rounded-b-2xl overflow-hidden">
          {manualSteps.map((step, index) => (
            <SideStep
              key={step.id}
              name={step.name}
              displayName={step.displayName}
              stepNumber={index + 1}
              subSteps={step.subSteps}
              isActive={index === currentStepIndex}
              activeSubStepIndex={currentSubStepIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
