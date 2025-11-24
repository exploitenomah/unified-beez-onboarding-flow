"use client";

import { FormEvent } from "react";
import { AppFormProps } from "./types";

export default function AppForm({
  onSubmit,
  children,
  className,
}: AppFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}
