import Image from "next/image";
import { isString, isUndefined } from "@utils/is";
import Icon from "@components/icons/Icon";
import OnboardingStepCard from "./OnboardingStepCard";
import {
  HeadingAndSubHeadingProps,
  OnboardingStepCardWithHeaderIcon,
  OnboardingStepCardWithHeaderImage,
} from "./types";
import HeadingAndSubHeading from "./HeadingAndSubHeading";

export default function OnboardingStepCardWithHeader({
  className,
  children,
  imageSrc,
  imageAlt,
  icon,
  type,
  heading,
  subHeading,
}: (OnboardingStepCardWithHeaderImage | OnboardingStepCardWithHeaderIcon) &
  Partial<HeadingAndSubHeadingProps>) {
  return (
    <OnboardingStepCard className={className}>
      <div
        className={`mb-6 mx-auto w-max 
        ${icon ? "p-2 bg-white rounded-md border border-[#ECECEC] shadow-[1px_3px_6.9px_0_rgba(0,0,0,0.10)]" : ""}`}
      >
        {type === "image" && isString(imageSrc) && isString(imageAlt) && (
          <Image src={imageSrc} alt={imageAlt} width={260} height={84} />
        )}
        {type === "icon" && !isUndefined(icon) && <Icon icon={icon} />}
      </div>
      {(isString(heading) || isString(subHeading)) && (
        <HeadingAndSubHeading heading={heading} subHeading={subHeading} />
      )}
      {children}
    </OnboardingStepCard>
  );
}
