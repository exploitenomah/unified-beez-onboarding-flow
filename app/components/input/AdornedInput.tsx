"use client";

import { forwardRef } from "react";
import Input from "./Input";
import { AdornedInputProps } from "./types";

const AdornedInput = forwardRef<HTMLInputElement, AdornedInputProps>(
  ({ startAdornment, endAdornment, className, error, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {startAdornment && (
          <span className="absolute w-4 h-4 left-2 top-1/2 -translate-y-1/2 z-10">
            {startAdornment}
          </span>
        )}

        <Input
          ref={ref}
          error={error}
          className={`${startAdornment ? "pl-6" : ""} ${
            endAdornment ? "pr-9" : ""
          } ${className}`}
          {...props}
        />

        {endAdornment && (
          <span className="absolute w-4 h-4 right-2 top-1/2 -translate-y-1/2 z-10">
            {endAdornment}
          </span>
        )}
      </div>
    );
  },
);

AdornedInput.displayName = "AdornedInput";

export default AdornedInput;
