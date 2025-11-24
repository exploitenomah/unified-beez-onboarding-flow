import { toast, ToastOptions } from "react-toastify";
import { ToastMessage } from "./types";

export const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 4000,
};

export const showSuccess = (msg: ToastMessage, options?: ToastOptions) =>
  toast.success(msg, { ...defaultOptions, ...options });

export const showError = (msg: ToastMessage, options?: ToastOptions) =>
  toast.error(msg, { ...defaultOptions, ...options });

export const showInfo = (msg: ToastMessage, options?: ToastOptions) =>
  toast.info(msg, { ...defaultOptions, ...options });

export const showWarning = (msg: ToastMessage, options?: ToastOptions) =>
  toast.warning(msg, { ...defaultOptions, ...options });

export const showToast = (msg: ToastMessage, options?: ToastOptions) =>
  toast(msg, { ...defaultOptions, ...options });

export function toastPromise<T>(
  promise: Promise<T>,
  messages: {
    pending: string;
    success: string;
    error: string;
  },
) {
  return toast.promise(
    promise,
    {
      pending: messages.pending,
      success: messages.success,
      error: messages.error,
    },
    defaultOptions,
  );
}
