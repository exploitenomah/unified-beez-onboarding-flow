"use client";
import BeeIcon from "@assets/svgs/BeeIcon";
import RightChevron from "@assets/svgs/RightChevron";
import Button from "@components/button/Button";
import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import useToggleRoute from "@hooks/useToggleRoute";

export default function OnboardingWelcome() {
  const { goTo } = useToggleRoute();

  return (
    <OnboardingStepCardWithHeader
      type="image"
      imageSrc="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/UNIFIEDBEEZ%20-LOGO-PRIMARY-1.png"
      imageAlt="UnifiedBeez Logo"
      heading="Setup up your account"
      subHeading="Let us set up your Unifiedbeez account."
      className="max-w-5xl flex flex-col gap-4 items-stretch"
    >
      <Button
        onClick={() => goTo("/onboarding/beezaro")}
        endIcon={<BeeIcon />}
        fullWidth
      >
        Let BeeZora Set Everything Up For Me
      </Button>
      <Button
        onClick={() => goTo("/onboarding/manual")}
        endIcon={<RightChevron className="ml-2" />}
        fullWidth
        variant="primary"
        color="yellow"
        className="text-primary-100"
      >
        Customize It Myself Instead
      </Button>
      <Button fullWidth variant="secondary" className="text-primary-100 mt-10">
        Go Back
      </Button>
    </OnboardingStepCardWithHeader>
  );
}
