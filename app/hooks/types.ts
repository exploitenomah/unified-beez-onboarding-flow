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

export type DeviceType = "mobile" | "tablet" | "desktop";

export interface SmartScrollIntoViewOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  container?: HTMLElement | null;
  enabled?: boolean;
  requireFullVisibility?: boolean;
  rootMargin?: string;
}
