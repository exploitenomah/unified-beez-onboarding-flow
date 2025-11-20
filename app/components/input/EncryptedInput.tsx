"use client";

import { forwardRef } from "react";

import { EyeSlashIcon } from "@/app/assets/svgs/EyeSlash";
import { EyeIcon } from "@/app/assets/svgs/Eye";
import { useToggle } from "@/app/hooks/useToggle";

import Input from "./Input";
import { EncryptedInputProps } from "./types";

const EncryptedInput = forwardRef<HTMLInputElement, EncryptedInputProps>(
  (
    {
      className,
      defaultVisible,
      visibleIcon = <EyeSlashIcon />,
      hiddenIcon = <EyeIcon />,
      visibleLabel = "Hide Content",
      hiddenLabel = "Show Content",
      error,
      ...props
    },
    ref,
  ) => {
    const { value: isVisible, toggle } = useToggle(!!defaultVisible);

    return (
      <div className="w-full relative">
        <Input
          ref={ref}
          error={error}
          type={isVisible ? "text" : "password"}
          className={`relative z-10 pl-6 ${className}`}
          {...props}
        />
        <button
          onClick={toggle}
          type="button"
          aria-label={isVisible ? visibleLabel : hiddenLabel}
          className="absolute z-20 right-2 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          {isVisible ? visibleIcon : hiddenIcon}
        </button>
      </div>
    );
  },
);

EncryptedInput.displayName = "EncryptedInput";

export default EncryptedInput;
