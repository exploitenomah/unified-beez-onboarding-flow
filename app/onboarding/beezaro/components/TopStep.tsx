import TopStepNumber from "./TopStepNumber";
import { TopStepProps } from "./types";

export default function TopStep({
  displayName,
  stepNumber,
  showStartLine,
}: TopStepProps) {
  const isActiveStep = stepNumber === 2;
  return (
    <div
      className={`items-center md:gap-2 ${isActiveStep ? "flex md:mx-1 lg:mx-0 gap-2 md:gap-1 lg:gap-2" : "hidden sm:flex"}`}
    >
      <TopStepNumber
        number={stepNumber as number}
        showStartLine={showStartLine}
        isActive={isActiveStep}
      />
      <span
        className={`text-md leading-base tracking-[-0.5] ${isActiveStep ? "text-primary-100 font-bold" : "text-dark-base-100/50 font-normal hidden lg:block"}`}
      >
        {displayName}
      </span>
    </div>
  );
}
