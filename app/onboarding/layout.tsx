"use client";
import { PropsWithChildren } from "react";
import ContainerWithCommChannelsFooter from "@app/auth/components/ContainerWithCommChannelsFooter";
import { usePathnameChecker } from "@hooks/usePathnameChecker";

export default function OnboardingLayout({ children }: PropsWithChildren) {
  const { matches: isWelcomePage } = usePathnameChecker({
    paths: ["/onboarding", "/onboarding/beezaro"],
  });
  if (isWelcomePage)
    return (
      <ContainerWithCommChannelsFooter>
        {children}
      </ContainerWithCommChannelsFooter>
    );
  return <>{children}</>;
}
