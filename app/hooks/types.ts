export interface UseArrowNavigationProps<T> {
  list: T[];
  activeIndex: number;
  onSelect: (item: T) => void;
  loop?: boolean;
}

export interface UsePathnameCheckerOptions {
  paths?: string[];
  prefix?: string;
}
