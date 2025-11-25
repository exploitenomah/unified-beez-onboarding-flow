export interface Step {
  name: string;
  isComplete: boolean;
  displayName: string;
}

export interface SideStepProps {
  name: string;
  displayName: string;
  stepNumber: number;
  subSteps: Step[];
}
