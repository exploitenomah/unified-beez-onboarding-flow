import AvatarWithInfo from "@components/avatar/AvatarWithInfo";
import { ReviewCardProps } from "./types";

const ReviewCard = ({
  review,
  name,
  info,
  avatar,
  className,
}: ReviewCardProps) => {
  return (
    <div
      className={`rounded-4xl border border-gray-30 p-6 bg-white shadow-sm ${className}`}
    >
      <p className="text-base text-dark-base-70 mb-4 leading-base">{review}</p>

      <AvatarWithInfo name={name} info={info} src={avatar} size={40} />
    </div>
  );
};

export default ReviewCard;
