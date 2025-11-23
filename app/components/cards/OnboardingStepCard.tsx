import { OnboardingStepCardProps } from "./types";

export default function OnboardingStepCard({
  className,
  children,
}: OnboardingStepCardProps) {
  return (
    <main
      className={`p-8 bg-[linear-gradient(165deg,#E6FAF2_-11.22%,#E3CF9B_219.35%)] rounded-[2.4rem] ${className}`}
    >
      {children}
    </main>
  );
}
