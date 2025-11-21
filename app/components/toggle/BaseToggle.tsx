"use client";
import { useCallback } from "react";
import useActiveIndex from "@hooks/useActiveIndex";
import useArrowNavigation from "@hooks/useArrowNavigation";
import { BaseToggleProps, ToggleOption } from "./types";
import { useElementPositions } from "./hooks";

export const BaseToggle = ({
  options,
  value,
  onChange,
  equalWidth = false,
  isPadded,
  className,
  itemClassName,
}: BaseToggleProps) => {
  const adjustLeft = useCallback(
    (left: number) => (isPadded ? left - 12 : left),
    [isPadded],
  );
  const { containerRef, positions } = useElementPositions<HTMLDivElement>({
    selector: "button",
    adjustLeft,
  });
  const { activeIndex } = useActiveIndex(options, (opt) => opt.value === value);
  const activePos = positions[activeIndex];

  const { handleKeyDown } = useArrowNavigation<ToggleOption>({
    list: options,
    activeIndex,
    onSelect: (opt) => onChange(opt.value),
  });

  return (
    <div
      ref={containerRef}
      role="tablist"
      onKeyDown={handleKeyDown}
      className={`
        relative flex rounded-md border border-gray-30 bg-gray-20 overflow-hidden
        ${isPadded ? "gap-2 p-2" : ""}
        ${className}`}
    >
      {activePos && (
        <div
          className={`absolute bg-white shadow-sm 
            ${isPadded ? "border top-1/2 -translate-y-1/2" : "border-x inset-0"} border-gray-30 transition-all duration-300 rounded-md`}
          style={{
            width: activePos.width + 6,
            transform: `translateX(${isPadded ? activePos.left : activePos.left - 4}px)`,
            height: isPadded ? activePos.height : "100%",
          }}
        />
      )}

      {options.map((opt) => {
        const isActive = opt.value === value;

        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            role="tab"
            aria-selected={isActive}
            className={`
              relative z-10 flex items-center gap-2 text-xs sm:text-base transition-all focus:outline-none
              ${equalWidth ? "flex-1 justify-center" : ""}
              py-2 px-2 rounded-md cursor-pointer
              ${
                isActive
                  ? "text-dark-base-70"
                  : "text-gray-35 hover:text-dark-base-70"
              }
              ${itemClassName}
            `}
          >
            {opt.icon && <span>{opt.icon}</span>}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};
