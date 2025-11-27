import { useCallback, useEffect, useMemo } from "react";
import useToggleRoute from "@hooks/useToggleRoute";
import { useAppDispatch } from "@store/hooks";
import useOnboardingStateSelector from "@store/onboarding/onboarding.selector";
import {
  goToNextStep,
  goToNextSubStep,
  goToPreviousStep,
  goToPreviousSubStep,
  resetCurrentSubStepIndex,
  updateCurrentSubStep,
} from "@store/onboarding/onboarding.slice";
import { OnboardingState } from "@store/onboarding/types";

export const useGoToNextStep = (
  flow: keyof OnboardingState["progress"] | keyof OnboardingState["steps"],
) => {
  const { goTo } = useToggleRoute();
  const dispatch = useAppDispatch();

  const { progress, steps } = useOnboardingStateSelector();

  const currentStepIndex = useMemo(() => {
    return progress[flow].currentStepIndex;
  }, [flow, progress]);

  const currentSubStepIndex = useMemo(() => {
    return progress[flow].currentSubStepIndex;
  }, [flow, progress]);

  const currentSubSteps = useMemo(() => {
    return steps[flow][progress[flow].currentStepIndex].subSteps;
  }, [flow, progress, steps]);

  const handleNext = useCallback(() => {
    if (currentSubStepIndex < currentSubSteps.length - 1)
      dispatch(goToNextSubStep({ flow }));
    else {
      if (currentStepIndex < steps[flow].length - 1) {
        dispatch(goToNextStep({ flow }));
        dispatch(resetCurrentSubStepIndex({ flow }));
        goTo(`/onboarding/${flow}/step-${currentStepIndex + 2}`);
      }
    }
  }, [
    currentSubStepIndex,
    currentStepIndex,
    steps,
    currentSubSteps.length,
    dispatch,
    flow,
    goTo,
  ]);

  return { handleNext };
};

export const useGoToPreviousStep = (
  flow: keyof OnboardingState["progress"] | keyof OnboardingState["steps"],
) => {
  const { goTo } = useToggleRoute();
  const dispatch = useAppDispatch();

  const { progress, steps } = useOnboardingStateSelector();

  const currentStepIndex = useMemo(() => {
    return progress[flow].currentStepIndex;
  }, [flow, progress]);

  const currentSubStepIndex = useMemo(() => {
    return progress[flow].currentSubStepIndex;
  }, [flow, progress]);

  const previousSubSteps = useMemo(() => {
    return steps[flow][progress[flow].currentStepIndex - 1]?.subSteps || [];
  }, [flow, progress, steps]);

  const handleBack = useCallback(() => {
    if (currentStepIndex > 0) {
      if (currentSubStepIndex > 0) {
        dispatch(goToPreviousSubStep({ flow }));
      } else {
        dispatch(goToPreviousStep({ flow }));
        dispatch(
          updateCurrentSubStep({ flow, update: previousSubSteps.length - 1 }),
        );
        goTo(`/onboarding/${flow}/step-${currentStepIndex - 1}`);
      }
    }
  }, [
    currentSubStepIndex,
    currentStepIndex,
    previousSubSteps.length,
    dispatch,
    flow,
    goTo,
  ]);

  return { handleBack };
};

export const useRerouteToAccurateStepInState = (
  flow: keyof OnboardingState["progress"] | keyof OnboardingState["steps"],
) => {
  const { goTo } = useToggleRoute();

  const { progress } = useOnboardingStateSelector();

  const currentStepIndex = useMemo(() => {
    return progress[flow].currentStepIndex;
  }, [flow, progress]);

  useEffect(() => {
    goTo(`/onboarding/${flow}/step-${currentStepIndex + 1}`);
  }, [goTo, currentStepIndex, flow]);
};
