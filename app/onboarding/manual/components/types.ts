import { Step } from "@store/onboarding/types";

export interface SideStepProps {
  activeSubStepIndex: number;
  isActive: boolean;
  name: string;
  displayName: string;
  stepNumber: number;
  subSteps: Step[];
  handleClick?: (subStepIndex: number) => void;
}
