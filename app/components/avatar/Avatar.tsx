import Image from "next/image";
import { AvatarProps } from "./types";

const Avatar = ({
  src,
  alt = "",
  name = "",
  size = 40,
  rounded = "full",
  className,
}: AvatarProps) => {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0]?.toUpperCase())
        .slice(0, 2)
        .join("")
    : "?";

  return (
    <div
      style={{ width: size, height: size }}
      className={`
        overflow-hidden flex items-center justify-center
        bg-gray-100 text-gray-500 font-medium select-none
        ${rounded === "full" ? "rounded-full" : "rounded-md"}
        ${className}
      `}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="w-full h-full object-cover"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ) : (
        <span className="text-sm">{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
