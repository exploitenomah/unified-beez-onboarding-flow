import { useMemo } from "react";

export default function useActiveIndex<T>(
  list: T[],
  predicate: (item: T) => boolean,
) {
  const activeIndex = useMemo(
    () => list.findIndex(predicate),
    [list, predicate],
  );
  const activeItem = activeIndex !== -1 ? list[activeIndex] : null;

  return { activeIndex, activeItem };
}
