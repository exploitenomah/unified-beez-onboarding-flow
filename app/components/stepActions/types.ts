export interface StepActionsProps {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  backLabel?: string;
  isNextLoading?: boolean;
  isNextDisabled?: boolean;
  showBack?: boolean;
  className?: string;
  nextType?: "reset" | "button" | "submit" | undefined;
}
