export interface OnboardingState {
  copilotOnboardingSteps: OnboardingStep[];
  manualOnboardingSteps: OnboardingStep[];
  progress: {
    manual: {
      currentStepIndex: number;
      currentSubStepIndex: number;
    };
    copilot: {
      currentStepIndex: number;
      currentSubStepIndex: number;
    };
  };
}

export interface Step {
  id: number;
  name: string;
  isComplete: boolean;
  displayName: string;
}

export interface OnboardingSubStep extends Step {
  parentStepId: number;
}

export interface OnboardingStep extends Step {
  subSteps: OnboardingSubStep[];
}
