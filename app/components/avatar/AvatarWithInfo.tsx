import Avatar from "./Avatar";
import { AvatarWithInfoProps } from "./types";

const AvatarWithInfo = ({
  name,
  info,
  direction = "row",
  size = 40,
  ...avatarProps
}: AvatarWithInfoProps) => {
  return (
    <div
      className={`
        flex items-center gap-3
        ${direction === "col" ? "flex-col text-center" : "flex-row"}
      `}
    >
      <Avatar {...avatarProps} name={name} size={size} />

      <div className="flex flex-col">
        <span className="text-base font-bold text-primary-100">{name}</span>
        {info && (
          <span className="text-md font-normal leading-base text-dark-base-700">
            {info}
          </span>
        )}
      </div>
    </div>
  );
};

export default AvatarWithInfo;
