import { combineReducers } from "@reduxjs/toolkit";
import onboardingSlice from "@store/onboarding/onboarding.slice";

export const rootReducer = combineReducers({
  onboarding: onboardingSlice,
});
