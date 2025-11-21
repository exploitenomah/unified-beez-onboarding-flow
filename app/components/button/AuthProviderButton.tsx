import { AuthProviderButtonProps } from "./types";

const AuthProviderButton = ({
  children,
  disabled = false,
  fullWidth = false,
  className,
  authIcon,
  ...props
}: AuthProviderButtonProps) => {
  return (
    <button
      className={`
        min-w-34.5 flex justify-center items-center gap-2 py-2.5 px-4 rounded-md text-neutral-100 bg-white
        text-md font-normal shadow-sm border border-solid border-gray-300 hover:not-disabled:bg-gray-25 cursor-pointer
        disabled:cursor-not-allowed disabled:bg-gray-25 disabled:text-dark-base-40
        ${fullWidth ? "w-full" : "w-fit"} 
        ${className}`}
      disabled={disabled}
      {...props}
    >
      {authIcon && <span>{authIcon}</span>}
      {children}
    </button>
  );
};

export default AuthProviderButton;
