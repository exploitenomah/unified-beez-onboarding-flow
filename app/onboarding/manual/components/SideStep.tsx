import Checkbox from "@components/input/Checkbox";
import { SideStepProps } from "./types";

export default function SideStep({
  displayName,
  stepNumber,
  subSteps,
}: SideStepProps) {
  const isActiveStep = stepNumber === 2;
  return (
    <div
      className={`p-2 flex flex-col gap-2 border-x border-gray-30/50 ${isActiveStep ? "inset-shadow-md" : ""}`}
    >
      <span
        className={`pl-2 text-md font-bold leading-base tracking-[-0.5] ${isActiveStep ? "text-primary-100" : "text-gray-35"}`}
      >
        Step 0{stepNumber} - {displayName}
      </span>
      <ul className="flex flex-col gap-2">
        {subSteps.map((subStep, idx) => (
          <li
            key={subStep.name}
            className={`pl-4 pr-2 py-2 flex justify-between items-center text-sm font-normal leading-base ${idx === 0 && isActiveStep ? "bg-gradient-yellow-1 border border-current text-primary-100 shadow-sm rounded" : "text-gray-35"}`}
          >
            <span className="block max-w-37 whitespace-normal ">
              {subStep.name}
            </span>
            <Checkbox
              width={18}
              height={18}
              className={`rounded-full 
                ${subStep.isComplete ? "peer-read-only:bg-gray-35 peer-read-only:border-gray-35!" : ""} 
                ${idx === 0 && isActiveStep ? "peer-read-only:border-primary-100" : "peer-read-only:border-gray-35"} peer-disabled:text-white border`}
              readOnly
              disabled
              checked={subStep.isComplete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
