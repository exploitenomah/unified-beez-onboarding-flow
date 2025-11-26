import { TopStepNumberProps } from "./types";

export default function TopStepNumber({
  showStartLine,
  number,
  isActive,
  hasGap,
  className,
}: TopStepNumberProps) {
  return (
    <div className={`flex items-center ${hasGap ? "gap-1" : ""} ${className}`}>
      {showStartLine && (
        <div
          id={`start-line-${number}`}
          className="w-9 md:w-5.5 lg:w-7.5 h-[0.15rem] bg-primary-100"
        />
      )}
      <span
        className={`flex justify-center items-center rounded-full font-bold 
          w-4.75 h-4.75 md:w-6 md:h-6 text-sm md:text-md border border-primary-100
          ${isActive ? "text-white bg-primary-100" : "text-primary-100 bg-[#E9F7F2]"}`}
      >
        {number}
      </span>
    </div>
  );
}
