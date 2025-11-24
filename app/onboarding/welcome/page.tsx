"use client";
import ContainerWithCommChannelsFooter from "@app/auth/components/ContainerWithCommChannelsFooter";
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
    <ContainerWithCommChannelsFooter>
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
            heading="Welcome to UnifiedBeez"
            subHeading="Welcome to UnifiedBeez. Let's get your AI assistant and communication channels set up. It only takes a few minutes"
          >
            <Button
              onClick={() => goTo("/onboarding")}
              fullWidth
              className="mt-3.25 block"
            >
              Start Setup
            </Button>
            <Button
              endIcon={<RightChevron className="ml-2" />}
              fullWidth
              variant="secondary"
              className="text-primary-100 bg-secondary-yellow-10 hover:bg-secondary-yellow-30"
            >
              Skip & Explore Dashboard
            </Button>
            <Button
              fullWidth
              variant="secondary"
              className="text-primary-100 mt-6"
            >
              Go Back
            </Button>
          </OnboardingStepCardWithHeader>
        </AppModal>
      </div>
    </ContainerWithCommChannelsFooter>
  );
}
