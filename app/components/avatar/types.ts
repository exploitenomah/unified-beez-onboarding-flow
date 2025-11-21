export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  rounded?: "full" | "md";
  name?: string;
  className?: string;
}

export interface AvatarWithInfoProps extends AvatarProps {
  name: string;
  info?: string;
  direction?: "row" | "col";
}
