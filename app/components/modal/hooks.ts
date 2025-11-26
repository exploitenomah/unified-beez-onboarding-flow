import { useRef, useEffect, useCallback } from "react";
import { getFirstFocusable } from "@app/utils/a11y";
import { useKeyDown } from "@hooks/useKeyDown";
import { useHandleModalProps } from "./types";

export function useHandleModal({
  isOpen,
  onClose,
  closeOnOverlayClick,
}: useHandleModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useKeyDown("Escape", onClose, isOpen);

  useEffect(() => {
    if (isOpen && contentRef.current)
      getFirstFocusable(contentRef.current)?.focus();
  }, [isOpen]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!closeOnOverlayClick) return;
      if (e.target === overlayRef.current) onClose();
    },
    [closeOnOverlayClick, onClose],
  );
  return { overlayRef, contentRef, handleOverlayClick };
}
