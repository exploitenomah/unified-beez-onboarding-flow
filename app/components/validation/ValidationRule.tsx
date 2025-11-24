import CheckMark from "@assets/svgs/CheckMark";
import TimesIcon from "@assets/svgs/Times";
import { ValidationRuleProps } from "./types";

export const ValidationRule = ({
  label,
  isValid,
  className,
  validIcon = <CheckMark className="text-primary-100" />,
  invalidIcon = <TimesIcon />,
}: ValidationRuleProps) => {
  return (
    <div
      className={`flex items-center gap-1.5 text-md font-normal transition-colors duration-200
        ${isValid ? "text-dark-base-700" : "text-dark-base-40"}
        ${className}
      `}
    >
      <span className="shrink-0">{isValid ? validIcon : invalidIcon}</span>
      <span>{label}</span>
    </div>
  );
};
