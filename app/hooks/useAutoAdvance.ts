import { useState, useEffect, useCallback } from "react";

interface UseAutoAdvanceOptions {
  length: number;
  interval?: number;
  loop?: boolean;
  startIndex?: number;
}

export function useAutoAdvance({
  length,
  interval = 3000,
  loop = true,
  startIndex = 0,
}: UseAutoAdvanceOptions) {
  const [current, setCurrent] = useState(startIndex);

  const next = useCallback(() => {
    setCurrent((prev) => {
      if (prev + 1 < length) return prev + 1;
      return loop ? 0 : prev;
    });
  }, [length, loop]);

  const prev = useCallback(() => {
    setCurrent((prev) => {
      if (prev - 1 >= 0) return prev - 1;
      return loop ? length - 1 : prev;
    });
  }, [length, loop]);

  useEffect(() => {
    if (length <= 1) return;

    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer);
  }, [length, interval, next]);

  return {
    current,
    next,
    prev,
    setCurrent,
  };
}
