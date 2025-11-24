"use client";

import { forwardRef } from "react";
import { InputGroupProps } from "./types";

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  (
    {
      label,
      helperText,
      error,
      children,
      className,
      labelClassName,
      helperTextClassName,
      errorClassName,
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={`input-group ${className}`}>
        {label && (
          <label className={`input-group__label ${labelClassName}`}>
            {label}
          </label>
        )}
        {children}
        {(helperText || error) && (
          <span
            className={`${error ? `input-group__error ${errorClassName}` : `input-group__helper ${helperTextClassName}`}`}
          >
            {error ? error : helperText}
          </span>
        )}
      </div>
    );
  },
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
