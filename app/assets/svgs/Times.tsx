import { IconProps } from "../types";

export default function TimesIcon({
  stroke,
  fill = "none",
  width = 6,
  height = 6,
  className,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 6"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.5 5.5L3 3L5.5 5.5M5.5 0.5L2.99952 3L0.5 0.5"
        stroke={stroke || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill}
      />
    </svg>
  );
}
