import Button from "@components/button/Button";
import { StepActionsProps } from "./types";

export default function StepActions({
  onBack,
  onNext,
  nextLabel = "Proceed",
  backLabel = "Go Back",
  isNextDisabled,
  isNextLoading,
  showBack = true,
  className = "",
  nextType = "submit",
}: StepActionsProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-3 items-center justify-between ${className}`}
    >
      {showBack ? (
        <Button
          type="button"
          variant="secondary"
          fullWidth
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 font-medium"
        >
          {backLabel}
        </Button>
      ) : (
        <div />
      )}

      <Button
        type={nextType}
        variant="primary"
        color="primary"
        fullWidth
        onClick={onNext}
        disabled={isNextDisabled || isNextLoading}
      >
        {isNextLoading ? "Loading..." : nextLabel}
      </Button>
    </div>
  );
}
