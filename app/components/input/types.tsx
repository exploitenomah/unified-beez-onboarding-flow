"use client";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

export interface EncryptedInputProps extends InputProps {
  defaultVisible?: boolean;
  visibleIcon?: React.ReactNode;
  hiddenIcon?: React.ReactNode;
  visibleLabel?: string;
  hiddenLabel?: string;
}

export interface AdornedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  error?: boolean;
  className?: string;
}

export interface InputGroupProps {
  label?: string | React.ReactNode;
  helperText?: string | React.ReactNode;
  error?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  errorClassName?: string;
}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  labelClassName?: string;
  width?: number;
  height?: number;
}
