import { OnboardingState } from "./types";
import manualOnboardingSteps from "./manualSteps.json";
import copilotOnboardingSteps from "./copilotSteps.json";

export const initialOnboardingState: OnboardingState = {
  copilotOnboardingSteps,
  manualOnboardingSteps,
  progress: {
    manual: {
      currentStepIndex: 0,
      currentSubStepIndex: 0,
    },
    copilot: {
      currentStepIndex: 0,
      currentSubStepIndex: 0,
    },
  },
};
