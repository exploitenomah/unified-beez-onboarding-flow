import { IconProps } from "../types";

export default function MoreHorizontal({
  fill,
  width = 6,
  height = 6,
  className,
}: IconProps) {
  return (
    <svg
      width="21"
      height={height}
      viewBox="0 0 21 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        width={width}
        height={height}
        rx="2.625"
        fill={fill || "currentColor"}
      />
      <rect
        x="7.875"
        width={width}
        height={height}
        rx="2.625"
        fill={fill || "currentColor"}
      />
      <rect
        x="15.75"
        width={width}
        height={height}
        rx="2.625"
        fill={fill || "currentColor"}
      />
    </svg>
  );
}
