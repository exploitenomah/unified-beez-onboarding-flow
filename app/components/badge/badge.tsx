import { BadgeProps } from "./types";

export default function Badge({
  children,
  className,
  variant = "yellow",
}: BadgeProps) {
  const variantClasses = {
    yellow: "bg-gradient-yellow-1 border-gray-30 text-dark-base-70",
    default: "bg-gray-100 border-gray-300 text-dark-base-70",
  };
  return (
    <div
      className={`p-2 shadow-sm border rounded-md text-md font-bold leading-base text-center min-w-31.25 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
