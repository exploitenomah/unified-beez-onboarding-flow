import { ButtonPropsWithColor, ButtonPropsWithoutColor } from "./types";

const Button = ({
  children,
  variant = "primary",
  color = "primary",
  disabled = false,
  fullWidth = false,
  className,
  endIcon,
  startIcon,
  ...props
}: ButtonPropsWithColor | ButtonPropsWithoutColor) => {
  return (
    <button
      className={`btn 
        ${variant === "secondary" ? variant : `${variant}-${color}`} 
        ${fullWidth ? "w-full" : "w-fit"} 
        ${className}`}
      disabled={disabled}
      {...props}
    >
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
