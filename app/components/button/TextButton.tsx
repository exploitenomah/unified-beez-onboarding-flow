import { createElement } from "react";
import { TextButtonAsLinkProps, TextButtonProps } from "./types";

const TextButton = ({
  as,
  children,
  disabled = false,
  className,
  ...props
}: TextButtonProps | TextButtonAsLinkProps) => {
  return createElement(
    as || "a",
    {
      className: `text-btn 
        ${className}`,
      disabled,
      ...props,
    },
    children,
  );
};

export default TextButton;
