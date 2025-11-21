import { IconProps } from "../types";

export default function CheckMark({
  fill,
  width = 7,
  height = 7,
  className,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M6.0887 1.10726L2.27164 5.68774L0.146484 3.50186L0.888402 2.78055L2.21244 4.14242L5.29378 0.444824L6.0887 1.10726Z"
          fill={fill || "currentColor"}
        />
      </g>
    </svg>
  );
}
