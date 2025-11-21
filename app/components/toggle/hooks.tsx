import { useCallback, useEffect, useRef, useState } from "react";
import { ElementPosition, UseElementPositionsOptions } from "./types";

export function useElementPositions<T extends HTMLElement = HTMLElement>({
  selector,
  adjustLeft,
}: UseElementPositionsOptions) {
  const containerRef = useRef<T>(null);
  const [positions, setPositions] = useState<ElementPosition[]>([]);

  const calculatePositions = useCallback(() => {
    if (!containerRef.current) return;

    const sel = selector || "button";
    const elements = Array.from(containerRef.current.querySelectorAll(sel));

    const rects = elements.map((el, index) => {
      const r = el.getBoundingClientRect();
      const parentLeft = containerRef.current!.getBoundingClientRect().left;
      const left = r.left - parentLeft;

      return {
        width: r.width,
        height: r.height,
        left: adjustLeft ? adjustLeft(left, index) : left,
      };
    });

    setPositions(rects);
  }, [adjustLeft, selector]);

  useEffect(() => {
    calculatePositions();
    if (!containerRef.current) return;

    const ro = new ResizeObserver(calculatePositions);
    ro.observe(containerRef.current);

    return () => ro.disconnect();
  }, [calculatePositions]);

  return { containerRef, positions };
}
