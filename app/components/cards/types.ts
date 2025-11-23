export interface OnboardingStepCardProps {
  className?: string;
  children: React.ReactNode;
}

export interface OnboardingStepCardWithHeaderImageProps
  extends OnboardingStepCardProps {
  imageSrc: string;
  imageAlt: string;
  icon?: never;
}

export interface OnboardingStepCardWithHeaderIconProps
  extends OnboardingStepCardProps {
  icon: React.ReactNode;
  imageSrc?: never;
  imageAlt?: never;
}
