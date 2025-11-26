import { isString } from "@app/utils/is";
import SectionHeading from "@components/headings/SectionHeading";
import { HeadingAndSubHeadingProps } from "./types";

export default function HeadingAndSubHeading({
  heading,
  subHeading,
  headingVariant = "sm",
}: HeadingAndSubHeadingProps) {
  return (
    <div className="py-3.25 flex flex-col gap-3 justify-center items-center text-center">
      {isString(heading) && (
        <SectionHeading
          as="h1"
          className={`${headingVariant === "sm" ? "text-xl" : "text-2xl"} leading-[80%]"`}
        >
          {heading}
        </SectionHeading>
      )}
      {isString(subHeading) && (
        <p className="text-base font-normal leading-[148%] text-dark-base-100/70 max-w-112.5">
          {subHeading}
        </p>
      )}
    </div>
  );
}
