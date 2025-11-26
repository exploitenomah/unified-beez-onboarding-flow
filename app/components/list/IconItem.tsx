import { IconItemProps } from "./types";

export default function IconItem({ icon, text }: IconItemProps) {
  return (
    <div className="flex items-center gap-1.5 text-dark-base-70 font-bold leading-base">
      {icon}
      <span>{text}</span>
    </div>
  );
}
