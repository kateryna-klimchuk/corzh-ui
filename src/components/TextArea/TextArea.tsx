import React, { forwardRef } from "react";
import { cn } from "../../lib/utils";

export type TextAreaVariantType = "default" | "error" | "success";

export interface TextAreaInterface
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextAreaVariantType;
  label?: string;
  helperText?: string;
  error?: string;
  showCharCount?: boolean;
  maxLength?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaInterface>(
  (
    {
      variant = "default",
      label,
      helperText,
      error,
      showCharCount = false,
      maxLength,
      className,
      disabled,
      value,
      ...props
    },
    ref
  ) => {
    const currentVariant = error ? "error" : variant;
    const charCount = typeof value === "string" ? value.length : 0;

    const variantClasses: Record<TextAreaVariantType, string> = {
      default:
        "border-gray-300 focus:border-orange-400 focus:ring-orange-400/20",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500/20",
      success:
        "border-green-500 focus:border-green-500 focus:ring-green-500/20",
    };

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-slate-700">{label}</label>
        )}
        <textarea
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          className={cn(
            "w-full rounded-md border bg-white px-3 py-2 text-base transition-all",
            "focus:outline-none focus:ring-2",
            "disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500",
            "resize-y min-h-[100px]",
            variantClasses[currentVariant],
            className
          )}
          {...props}
        />
        <div className="flex justify-between">
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
          {showCharCount && maxLength && (
            <p className="text-xs text-gray-500 ml-auto">
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
