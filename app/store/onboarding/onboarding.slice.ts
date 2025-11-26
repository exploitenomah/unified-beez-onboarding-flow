import { createSlice } from "@reduxjs/toolkit";
import { initialOnboardingState } from "./initialState";

const onBoardingSlice = createSlice({
  name: "onboarding",
  initialState: initialOnboardingState,
  reducers: {},
});

export default onBoardingSlice.reducer;
