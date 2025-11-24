"use client";
import { createPortal } from "react-dom";
import { useClientReady } from "@hooks/useClientReady";
import { useHandleModal } from "./hooks";
import { AppModalProps } from "./types";

export default function AppModal({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick = true,
  containerClassName = "",
  usePortal = true,
}: AppModalProps) {
  const clientReady = useClientReady();
  const { overlayRef, handleOverlayClick, contentRef } = useHandleModal({
    closeOnOverlayClick,
    onClose,
    isOpen,
  });
  const modalContent = (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-black/25 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={contentRef}
        className={`relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-transparent transition-all ${containerClassName}`}
      >
        {children}
      </div>
    </div>
  );

  if (!usePortal || !clientReady) return modalContent;

  return createPortal(modalContent, window.document.body);
}
