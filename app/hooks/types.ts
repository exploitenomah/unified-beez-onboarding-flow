export interface UseArrowNavigationProps<T> {
  list: T[];
  activeIndex: number;
  onSelect: (item: T) => void;
  loop?: boolean;
}
