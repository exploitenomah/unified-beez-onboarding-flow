import { isString } from "@utils/is";
import { HeadingAndSubHeadingProps } from "./types";

export default function HeadingAndSubHeading({
  heading,
  subHeading,
}: HeadingAndSubHeadingProps) {
  return (
    <div className="py-3.25 flex flex-col gap-3 justify-center items-center text-center">
      {isString(heading) && (
        <h1 className="text-xl font-bold leading-[80%]">{heading}</h1>
      )}
      {isString(subHeading) && (
        <p className="text-base font-normal leading-[148%] text-dark-base-100/70">
          {subHeading}
        </p>
      )}
    </div>
  );
}
