import Image from "next/image";
import Icon from "@components/icons/Icon";
import OnboardingStepCard from "./OnboardingStepCard";
import {
  OnboardingStepCardWithHeaderIconProps,
  OnboardingStepCardWithHeaderImageProps,
} from "./types";

export default function OnboardingStepCardWithHeaderImage({
  className,
  children,
  imageSrc,
  imageAlt,
  icon,
}:
  | OnboardingStepCardWithHeaderImageProps
  | OnboardingStepCardWithHeaderIconProps) {
  return (
    <OnboardingStepCard className={className}>
      <div
        className={`mb-6 mx-auto w-max 
        ${icon ? "p-2 bg-white rounded-md border border-[#ECECEC] shadow-[1px_3px_6.9px_0_rgba(0,0,0,0.10)]" : ""}`}
      >
        {imageSrc && imageAlt && (
          <Image src={imageSrc} alt={imageAlt} width={260} height={84} />
        )}
        {icon && <Icon icon={icon} />}
      </div>
      {children}
    </OnboardingStepCard>
  );
}
