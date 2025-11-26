import { createElement } from "react";
import { SectionHeadingProps } from "./types";

export default function SectionHeading({
  children,
  className,
  as = "h1",
  ...rest
}: SectionHeadingProps) {
  return createElement(
    as,
    { className: `section-heading ${className}`, ...rest },
    children,
  );
}
