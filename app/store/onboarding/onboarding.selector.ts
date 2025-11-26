import { useAppSelector } from "@store/hooks";

export default function useOnboardingStateSelector() {
  return useAppSelector((state) => state.onboarding);
}
