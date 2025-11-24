export interface OnboardingStepCardProps {
  className?: string;
  children: React.ReactNode;
}

export interface OnboardingStepCardWithHeader extends OnboardingStepCardProps {
  type: "image" | "icon";
  imageSrc?: string;
  imageAlt?: string;
  icon?: React.ReactNode;
}
export interface OnboardingStepCardWithHeaderImage
  extends OnboardingStepCardProps {
  type: "image";
  imageSrc?: string;
  imageAlt?: string;
  icon?: never;
}
export interface OnboardingStepCardWithHeaderIcon
  extends OnboardingStepCardProps {
  type: "icon";
  imageSrc?: never;
  imageAlt?: never;
  icon?: React.ReactNode;
}

export interface HeadingAndSubHeadingProps {
  heading?: string;
  subHeading?: string;
}
