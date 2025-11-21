import React from "react";

interface OrDividerProps {
  text?: string;
  className?: string;
  lineColor?: string;
  textColor?: string;
}

export default function OrDivider({
  text = "OR",
  className = "",
  lineColor = "bg-dark-base-100",
  textColor = "text-black",
}: OrDividerProps) {
  return (
    <div className={`relative flex gap-2 items-center ${className}`}>
      <div className={`flex-1 h-px ${lineColor} opacity-40`} />
      <span
        className={`text-sm font-normal leading-base lowercase ${textColor}`}
      >
        {text}
      </span>
      <div className={`flex-1 h-px ${lineColor} opacity-40`} />
    </div>
  );
}
