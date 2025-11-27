import { PayloadAction } from "@reduxjs/toolkit";
import { OnboardingState } from "./types";

const onboardingReducers = {
  goToNextStep: (
    state: OnboardingState,
    { payload: { flow } }: PayloadAction<{ flow: "manual" | "copilot" }>,
  ) => {
    state.progress[flow].currentStepIndex =
      state.progress[flow].currentStepIndex + 1;
  },
  goToNextSubStep: (
    state: OnboardingState,
    { payload: { flow } }: PayloadAction<{ flow: "manual" | "copilot" }>,
  ) => {
    state.progress[flow].currentSubStepIndex =
      state.progress[flow].currentSubStepIndex + 1;
  },
  goToPreviousStep: (
    state: OnboardingState,
    { payload: { flow } }: PayloadAction<{ flow: "manual" | "copilot" }>,
  ) => {
    state.progress[flow].currentStepIndex =
      state.progress[flow].currentStepIndex - 1;
  },
  goToPreviousSubStep: (
    state: OnboardingState,
    { payload: { flow } }: PayloadAction<{ flow: "manual" | "copilot" }>,
  ) => {
    state.progress[flow].currentSubStepIndex =
      state.progress[flow].currentSubStepIndex - 1;
  },
  updateCurrentSubStep: (
    state: OnboardingState,
    {
      payload: { flow, update },
    }: PayloadAction<{ flow: "manual" | "copilot"; update: number }>,
  ) => {
    state.progress[flow].currentSubStepIndex = update;
  },
  resetCurrentSubStepIndex: (
    state: OnboardingState,
    { payload: { flow } }: PayloadAction<{ flow: "manual" | "copilot" }>,
  ) => {
    state.progress[flow].currentSubStepIndex = 0;
  },
};

export default onboardingReducers;
