"use client";
import RightChevron from "@assets/svgs/RightChevron";
import Button from "@components/button/Button";
import OnboardingStepCardWithHeader from "@components/cards/OnboardingStepCardWithHeader";
import AppModal from "@components/modal/AppModal";
import { useToggle } from "@hooks/useToggle";
import useToggleRoute from "@hooks/useToggleRoute";

export default function OnboardingWelcome() {
  const { value: isModalOpen, setFalse } = useToggle(false);
  const { goTo } = useToggleRoute();
  return (
    <div>
      <AppModal
        isOpen={isModalOpen}
        onClose={setFalse}
        closeOnOverlayClick={false}
      >
        <OnboardingStepCardWithHeader
          imageHeight={100}
          imageWidth={100}
          type="image"
          imageSrc="https://zqkrxgdm4ftxn2kt.public.blob.vercel-storage.com/bee-icon.png"
          imageAlt="UnifiedBeez Logo"
          className="bg-[linear-gradient(white)] w-full max-w-167.5 flex flex-col gap-4"
          heading="Hi there! I'm Beezaro"
          subHeading="I'll set everything up for you in just a few questions. Ready?"
        >
          <Button
            onClick={() => goTo("/onboarding/beezaro/step-1")}
            fullWidth
            className="mt-3.25 block"
          >
            Yes, let&apos;s go
          </Button>
          <Button
            onClick={() => goTo("/onboarding/manual/step-1")}
            endIcon={<RightChevron className="ml-2" />}
            fullWidth
            variant="secondary"
            className="text-primary-100 bg-secondary-yellow-10 hover:bg-secondary-yellow-30"
          >
            Show me the manual setup instead
          </Button>
        </OnboardingStepCardWithHeader>
      </AppModal>
    </div>
  );
}
