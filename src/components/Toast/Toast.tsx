import React, { createContext, useContext, useState, useCallback } from "react";
import { cn } from "../../lib/utils";
import { Icon } from "../Icon/Icon";

export type ToastVariantType = "info" | "success" | "warning" | "error";
export type ToastPositionType =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

export interface ToastItemInterface {
  id: string;
  variant?: ToastVariantType;
  title?: string;
  message: string;
  duration?: number;
}

export interface ToastInterface extends Omit<ToastItemInterface, "id"> {
  id?: string;
  onClose?: () => void;
}

interface ToastContextInterface {
  toasts: ToastItemInterface[];
  addToast: (toast: Omit<ToastItemInterface, "id">) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextInterface | undefined>(
  undefined
);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export interface ToastProviderInterface {
  children: React.ReactNode;
  position?: ToastPositionType;
}

export const ToastProvider: React.FunctionComponent<ToastProviderInterface> = ({
  children,
  position = "top-right",
}) => {
  const [toasts, setToasts] = useState<ToastItemInterface[]>([]);

  const addToast = useCallback((toast: Omit<ToastItemInterface, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };

    setToasts((prev) => [...prev, newToast]);

    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 5000);
    }

    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const positionClasses: Record<ToastPositionType, string> = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div
        className={cn(
          "fixed z-50 flex flex-col gap-2",
          positionClasses[position]
        )}
      >
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const ToastItem: React.FunctionComponent<ToastInterface> = ({
  variant = "info",
  title,
  message,
  onClose,
}) => {
  const variantClasses: Record<ToastVariantType, string> = {
    info: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-orange-500",
    error: "bg-red-600",
  };

  const icons: Record<ToastVariantType, React.ReactNode> = {
    info: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
    success: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    warning: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    error: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg shadow-lg text-white min-w-[300px] max-w-md",
        "animate-in slide-in-from-right-full",
        variantClasses[variant]
      )}
    >
      <div className="flex-shrink-0">{icons[variant]}</div>
      <div className="flex-1">
        {title && <h4 className="font-medium">{title}</h4>}
        <p className={cn("text-sm", title && "opacity-90")}>{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
        >
          <Icon.Close className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export const Toast = {
  Provider: ToastProvider,
  Item: ToastItem,
};
