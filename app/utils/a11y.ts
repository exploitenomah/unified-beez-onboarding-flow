export function getFirstFocusable(root: HTMLElement): HTMLElement | null {
  const selector =
    "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
  return root.querySelector<HTMLElement>(selector);
}
