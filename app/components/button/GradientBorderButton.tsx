import { useHover } from "@hooks/useHover";
import { GradientButtonProps } from "./types";

export default function GradientButton({
  children,
  icon,
  variant = "border",
  size = "md",
  loading = false,
  className = "",
  fullWidth,
}: GradientButtonProps) {
  const { ref: buttonRef, hovered } = useHover<HTMLButtonElement>();

  const sizeClasses = {
    sm: "p-2 text-base",
    md: "p-4.5 text-base",
    lg: "p-6 text-lg",
  };

  const textClasses = {
    border: "bg-clip-text text-transparent bg-brand-gradient-2",
    solid: "text-white",
  };
  const radiusClasses = {
    sm: "rounded-[0.65rem]",
    md: "rounded-[0.65rem]",
    lg: "rounded-[.95rem]",
  };
  return (
    <button
      ref={buttonRef}
      disabled={loading}
      className={`relative cursor-pointer inline-flex items-center justify-center  font-semibold transition-all overflow-hidden duration-300 ${sizeClasses[size]} ${className} ${
        size === "lg" ? "rounded-2xl" : "rounded-xl"
      } ${
        loading ? "opacity-70 cursor-not-allowed" : ""
      } ${fullWidth ? "w-full" : "w-max"}`}
    >
      <span
        className={`absolute inset-0 ${radiusClasses[size]} pointer-events-none ${variant === "border" ? "bg-brand-gradient-1" : "bg-brand-gradient-2"}`}
      />
      {variant === "border" && (
        <span
          className={`absolute inset-px ${radiusClasses[size]} ${hovered ? "opacity-90" : ""} bg-white pointer-events-none`}
        />
      )}

      <span
        className={`relative z-10 flex items-center gap-2 ${textClasses[variant]}`}
      >
        {!loading ? (
          <>
            {icon}
            {children}
          </>
        ) : (
          <span>Loading...</span>
        )}
      </span>
    </button>
  );
}
