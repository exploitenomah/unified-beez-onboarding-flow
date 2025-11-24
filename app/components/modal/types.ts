export interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
  containerClassName?: string;
  usePortal?: boolean;
}

export interface useHandleModalProps {
  closeOnOverlayClick: boolean;
  isOpen: boolean;
  onClose: () => void;
}
