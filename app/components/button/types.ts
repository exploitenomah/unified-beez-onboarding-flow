type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonColor = "primary" | "yellow" | "danger";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  fullWidth?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  isLoading?: boolean;
}

export interface ButtonPropsWithColor extends ButtonProps {
  variant?: "primary" | "tertiary";
  color?: ButtonColor;
}

export interface ButtonPropsWithoutColor extends ButtonProps {
  variant: "secondary";
  color?: never;
}

export interface AuthProviderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconAlt: string;
  iconSrc: string;
  fullWidth?: boolean;
}

export interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: string;
  href?: never;
}
export interface TextButtonAsLinkProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  as?: string;
  disabled?: never;
}
