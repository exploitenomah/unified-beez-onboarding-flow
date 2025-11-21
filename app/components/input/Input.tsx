"use client";

import { forwardRef } from "react";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`input ${error ? "error" : ""} ${className}`}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
