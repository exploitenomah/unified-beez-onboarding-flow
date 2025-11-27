import { createSlice } from "@reduxjs/toolkit";
import { initialOnboardingState } from "./initialState";
import onboardingReducers from "./onboarding.reducers";

const onBoardingSlice = createSlice({
  name: "onboarding",
  initialState: initialOnboardingState,
  reducers: onboardingReducers,
});

export const {
  goToNextStep,
  goToNextSubStep,
  resetCurrentSubStepIndex,
  goToPreviousStep,
  goToPreviousSubStep,
  updateCurrentSubStep,
} = onBoardingSlice.actions;

export default onBoardingSlice.reducer;
