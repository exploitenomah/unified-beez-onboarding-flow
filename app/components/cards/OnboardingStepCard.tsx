import { OnboardingStepCardProps } from "./types";

export default function OnboardingStepCard({
  className,
  children,
}: OnboardingStepCardProps) {
  return (
    <main className={`onboarding-step-card ${className}`}>{children}</main>
  );
}
