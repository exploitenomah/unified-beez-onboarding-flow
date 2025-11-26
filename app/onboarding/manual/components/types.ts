import { Step } from "@store/onboarding/types";

export interface SideStepProps {
  index: number;
  name: string;
  displayName: string;
  stepNumber: number;
  subSteps: Step[];
}
