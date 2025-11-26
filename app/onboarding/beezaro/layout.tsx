"use client";
import { PropsWithChildren } from "react";
import { usePathnameChecker } from "@hooks/usePathnameChecker";
import AnimatedBg from "@assets/svgs/BeezaroChatSideBg";
import BeezaroOnboardingLayoutHeader from "./components/LayoutHeader";

export default function ManualOnboardingLayout({
  children,
}: PropsWithChildren) {
  const { matches: isWelcomePage } = usePathnameChecker({
    paths: ["/onboarding/beezaro"],
  });
  if (isWelcomePage) return <>{children}</>;
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-yellow-1 flex flex-col">
      <div className="sticky w-full top-0 z-10">
        <BeezaroOnboardingLayoutHeader />
      </div>
      <div className="flex">
        <div
          className={`sticky
         hidden lg:block left-0 bg-[#00160D] rounded-tr-[3rem]
         transition-all duration-500 delay-75 w-[33.3rem]`}
        >
          <div className="absolute inset-0 z-10">
            <AnimatedBg />
          </div>
        </div>
        <main
          className={`pt-9 pb-25 flex grow justify-center items-start h-[calc(100dvh-10rem)] overflow-auto`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
