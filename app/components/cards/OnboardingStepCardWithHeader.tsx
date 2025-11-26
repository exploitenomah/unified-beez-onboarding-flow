import Image from "next/image";
import { isString, isUndefined } from "@app/utils/is";
import Icon from "@components/icons/Icon";
import OnboardingStepCard from "./OnboardingStepCard";
import {
  HeadingAndSubHeadingProps,
  OnboardingStepCardWithCustomHeader,
  OnboardingStepCardWithHeaderIcon,
  OnboardingStepCardWithHeaderImage,
} from "./types";
import HeadingAndSubHeading from "./HeadingAndSubHeading";

export default function OnboardingStepCardWithHeader({
  className,
  children,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  icon,
  customHeader,
  type,
  heading,
  subHeading,
  headingVariant,
}: (
  | OnboardingStepCardWithHeaderImage
  | OnboardingStepCardWithHeaderIcon
  | OnboardingStepCardWithCustomHeader
) &
  Partial<HeadingAndSubHeadingProps>) {
  return (
    <OnboardingStepCard className={className}>
      <div>
        <div
          className={`mb-6 mx-auto w-max 
        ${icon ? "p-2 bg-white rounded-md border border-[#ECECEC] shadow-[1px_3px_6.9px_0_rgba(0,0,0,0.10)]" : ""}`}
        >
          {type === "custom" && customHeader}
          {type === "image" && isString(imageSrc) && isString(imageAlt) && (
            <Image
              loading="eager"
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth || 260}
              height={imageHeight || 84}
            />
          )}
          {type === "icon" && !isUndefined(icon) && <Icon icon={icon} />}
        </div>
        {(isString(heading) || isString(subHeading)) && (
          <HeadingAndSubHeading
            headingVariant={headingVariant}
            heading={heading}
            subHeading={subHeading}
          />
        )}
      </div>
      {children}
    </OnboardingStepCard>
  );
}
