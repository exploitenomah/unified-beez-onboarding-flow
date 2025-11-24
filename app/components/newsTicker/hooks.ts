import { useEffect, useRef } from "react";
import { UseAutoScrollLoopOptions } from "./types";

export function useAutoScrollLoop({ speed = 1 }: UseAutoScrollLoopOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const offsetRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;
    let animationFrameId: number;

    const step = () => {
      if (!isPausedRef.current) {
        offsetRef.current -= speed;

        if (Math.abs(offsetRef.current) >= totalWidth) {
          offsetRef.current = 0;
        }

        container.style.transform = `translateX(${offsetRef.current}px)`;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  return {
    containerRef,
    isPausedRef,
    offsetRef,
  };
}
