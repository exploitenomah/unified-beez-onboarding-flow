import { useDeviceType } from "@hooks/useDeviceType";
import TopStep from "./TopStep";
import TopStepNumber from "./TopStepNumber";

export default function StepsTopBar() {
  const { isMobile } = useDeviceType();
  return (
    <nav className="pr-3.5 lg:pr-0 flex items-center gap-5.5 sm:gap-2 md:gap-0 lg:gap-2 xl:gap-8">
      <TopStep displayName="Business Name" stepNumber={1} />
      <TopStep
        displayName="Team members"
        stepNumber={2}
        showStartLine={!isMobile}
      />
      <TopStep displayName="Channels" stepNumber={3} showStartLine />
      <TopStep displayName="Fall-back logic" stepNumber={4} showStartLine />
      <TopStep displayName="AI Assistant" stepNumber={5} showStartLine />
      <TopStep displayName="Automation" stepNumber={6} showStartLine />
      <TopStepNumber showStartLine hasGap number={6} className="sm:hidden" />
    </nav>
  );
}
