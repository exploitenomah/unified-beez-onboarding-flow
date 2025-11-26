export interface TopStepProps {
  displayName: string;
  stepNumber: number;
  showStartLine?: boolean;
  isActiveStep?: boolean;
}

export interface TopStepNumberProps {
  showStartLine?: boolean;
  number: number;
  isActive?: boolean;
  hasGap?: boolean;
  className?: string;
}
