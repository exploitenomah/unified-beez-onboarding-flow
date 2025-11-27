"use client";
import { PropsWithChildren } from "react";
import { usePathnameChecker } from "@hooks/usePathnameChecker";
import StepsOnboardingLayout from "./components/ManualOnboardingLayout";

export default function ManualOnboardingLayout({
  children,
}: PropsWithChildren) {
  const { matches: isNotStepPage } = usePathnameChecker({
    paths: ["/onboarding/manual"],
  });

  if (isNotStepPage) return <>{children}</>;
  return <StepsOnboardingLayout>{children}</StepsOnboardingLayout>;
}
