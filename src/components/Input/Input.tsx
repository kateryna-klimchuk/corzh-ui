import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

export type InputSizeType = "small" | "medium" | "large";
export type InputVariantType = "default" | "error" | "success";

export interface InputInterface
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSizeType;
  variant?: InputVariantType;
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputInterface>(
  (
    {
      size = "medium",
      variant = "default",
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const currentVariant = error ? "error" : variant;

    const sizeClasses: Record<InputSizeType, string> = {
      small: "px-2 py-1 text-sm",
      medium: "px-3 py-2 text-base",
      large: "px-4 py-3 text-lg",
    };

    const variantClasses: Record<InputVariantType, string> = {
      default:
        "border-gray-300 focus:border-orange-400 focus:ring-orange-400/20",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500/20",
      success:
        "border-green-500 focus:border-green-500 focus:ring-green-500/20",
    };

    const iconSizeClasses: Record<InputSizeType, string> = {
      small: "w-4 h-4",
      medium: "w-5 h-5",
      large: "w-6 h-6",
    };

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-slate-700">{label}</label>
        )}
        <div className="relative">
          {leftIcon && (
            <div
              className={cn(
                "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                iconSizeClasses[size]
              )}
            >
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            disabled={disabled}
            className={cn(
              "w-full rounded-md border bg-white transition-all",
              "focus:outline-none focus:ring-2",
              "disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500",
              sizeClasses[size],
              variantClasses[currentVariant],
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <div
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400",
                iconSizeClasses[size]
              )}
            >
              {rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={cn(
              "text-xs",
              error ? "text-red-500" : "text-gray-500"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
