import { OnboardingStepCardProps } from "./types";

export default function OnboardingStepCard({
  className,
  children,
}: OnboardingStepCardProps) {
  return (
    <main
      className={`w-8/9 mx-auto p-10 bg-[linear-gradient(165deg,#E6FAF2_-11.22%,#E3CF9B_219.35%)] rounded-[2.4rem] ${className}`}
    >
      {children}
    </main>
  );
}
