type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonColor = "primary" | "yellow" | "danger";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  fullWidth?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
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
  authIcon: React.ReactNode;
  fullWidth?: boolean;
}
