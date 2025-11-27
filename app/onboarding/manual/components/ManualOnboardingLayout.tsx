"use client";
import { PropsWithChildren } from "react";
import { useToggle } from "@hooks/useToggle";
import { useDeviceType } from "@hooks/useDeviceType";
import RightChevron from "@assets/svgs/RightChevron";
import Button from "@components/button/Button";
import { useRerouteToAccurateStepInState } from "@app/onboarding/hooks/useChangeStep";
import LayoutHeader from "./LayoutHeader";
import StepsSideBar from "./StepsSideBar";

export default function StepsOnboardingLayout({ children }: PropsWithChildren) {
  const { isMobile } = useDeviceType();
  const { value: showStepsSideBar, toggle } = useToggle(!isMobile);

  useRerouteToAccurateStepInState("manual");

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-yellow-1 flex flex-col">
      <div className="sticky w-full top-0 z-10">
        <LayoutHeader />
      </div>
      <div
        onClick={toggle}
        className={`lg:hidden z-90 w-screen h-screen fixed bg-black/25 backdrop-blur-sm ${showStepsSideBar ? "" : "invisible"}`}
      />
      <div className="flex">
        <div
          className={`
         fixed lg:sticky left-5 lg:left-[2.9rem] -translate-y-[7.8rem] z-100
         transition-all duration-500 delay-75 ${showStepsSideBar ? "w-[27.7rem]" : "w-0 lg:w-[27.7rem] h-full pointer-none"}`}
        >
          <div
            className={`overflow-hidden transition-all duration-75 whitespace-nowrap ${showStepsSideBar ? "opacity-100" : "opacity-0 lg:opacity-100"}`}
          >
            <StepsSideBar />
          </div>
          <Button
            onClick={toggle}
            variant="secondary"
            size="md"
            className={`lg:hidden rounded-full duration-200 w-8 h-11.25 absolute top-1.25 shadow-sm -right-6.5 ${showStepsSideBar ? "translate-x-0" : "translate-x-5.25 lg:translate-x-4"}`}
          >
            <span className="flex">
              <RightChevron />
              <RightChevron />
            </span>
          </Button>
        </div>
        <main
          className={`${showStepsSideBar ? "pl-5" : "lg:pl-6"} pt-9 pb-25 flex grow justify-center items-start h-[calc(100dvh-10rem)] overflow-auto`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
