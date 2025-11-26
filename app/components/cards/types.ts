export interface OnboardingStepCardProps {
  className?: string;
  children: React.ReactNode;
}

export interface OnboardingStepCardWithHeader extends OnboardingStepCardProps {
  type: "image" | "icon" | "custom";
  imageSrc?: string;
  imageAlt?: string;
  icon?: React.ReactNode;
  customHeader?: React.ReactNode;
}
export interface OnboardingStepCardWithCustomHeader
  extends OnboardingStepCardProps {
  type: "custom";
  customHeader: React.ReactNode;
  imageSrc?: never;
  imageAlt?: never;
  icon?: never;
  imageWidth?: never;
  imageHeight?: never;
}
export interface OnboardingStepCardWithHeaderImage
  extends OnboardingStepCardProps {
  type: "image";
  imageSrc?: string;
  imageAlt?: string;
  icon?: never;
  imageWidth?: number;
  imageHeight?: number;
  customHeader?: never;
}
export interface OnboardingStepCardWithHeaderIcon
  extends OnboardingStepCardProps {
  type: "icon";
  icon?: React.ReactNode;
  imageSrc?: never;
  imageAlt?: never;
  imageWidth?: never;
  imageHeight?: never;
  customHeader?: never;
}

export interface HeadingAndSubHeadingProps {
  heading?: string;
  subHeading?: string;
  headingVariant?: "sm" | "md";
}
