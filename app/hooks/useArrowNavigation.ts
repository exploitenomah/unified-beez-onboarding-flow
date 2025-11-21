import { useCallback } from "react";
import { UseArrowNavigationProps } from "./types";

export default function useArrowNavigation<T>({
  list,
  activeIndex,
  onSelect,
  loop = true,
}: UseArrowNavigationProps<T>) {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (activeIndex === -1 || list.length === 0) return;

      if (e.key === "ArrowRight") {
        const next = loop
          ? (activeIndex + 1) % list.length
          : Math.min(activeIndex + 1, list.length - 1);
        onSelect(list[next]);
      }

      if (e.key === "ArrowLeft") {
        const prev = loop
          ? (activeIndex - 1 + list.length) % list.length
          : Math.max(activeIndex - 1, 0);
        onSelect(list[prev]);
      }
    },
    [activeIndex, list, onSelect, loop],
  );

  return { handleKeyDown };
}
