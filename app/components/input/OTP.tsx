"use client";
import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";

interface OTPInputProps {
  length?: number;
  onChange?: (otp: string) => void;
  autoFocus?: boolean;
  className?: string;
  error?: string;
  hasError?: boolean;
}

export default function OTPInput({
  length = 6,
  onChange,
  autoFocus = true,
  className = "",
  error,
  hasError,
}: OTPInputProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    if (!/^[0-9]?$/.test(val)) return;

    const newValues = [...values];
    newValues[index] = val;
    setValues(newValues);
    onChange?.(newValues.join(""));

    if (val && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (!values[index] && index > 0) {
        const prev = inputsRef.current[index - 1];
        prev.focus();
        prev.select();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("Text").slice(0, length);
    if (!/^\d+$/.test(pasteData)) return;

    const newValues = pasteData.split("");
    setValues(newValues);
    onChange?.(newValues.join(""));
    const nextIndex = Math.min(newValues.length, length - 1);
    inputsRef.current[nextIndex].focus();
  };

  return (
    <div className={`flex gap-2 justify-center ${className}`}>
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={values[idx]}
          ref={(el) => {
            inputsRef.current[idx] = el!;
          }}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          placeholder="0"
          onPaste={handlePaste}
          className={`input otp ${hasError ? "error" : ""}`}
          aria-label={`OTP digit ${idx + 1}`}
        />
      ))}
      {hasError && error && <span className="error">{error}</span>}
    </div>
  );
}
