"use client";
import { forwardRef } from "react";

import CheckMark from "@/app/assets/svgs/CheckMark";

import { CheckboxProps } from "./types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, className, labelClassName, width = 16, height = 16, ...props },
    ref,
  ) => {
    return (
      <label className="flex gap-2 items-center">
        <input
          ref={ref}
          type="checkbox"
          className={`peer sr-only ${className}`}
          {...props}
        />
        <span className="checkbox" style={{ width: +width, height: +height }}>
          <CheckMark width={+width - 4} height={+height - 4} />
        </span>
        {label && (
          <span
            className={`text-dark-base-70 text-md leading-base font-normal ${labelClassName}`}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
