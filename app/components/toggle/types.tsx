export interface ToggleOption {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export interface BaseToggleProps {
  options: ToggleOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  equalWidth?: boolean;
  className?: string;
  itemClassName?: string;
  isPadded?: boolean;
}

export interface ElementPosition {
  width: number;
  height: number;
  left: number;
}

export interface UseElementPositionsOptions {
  selector?: string;
  adjustLeft?: (left: number, index: number) => number;
}
