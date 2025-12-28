import React from "react";
import { cn } from "../../lib/utils";

export type CheckboxSizeType = "small" | "medium";

export interface CheckboxInterface {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: CheckboxSizeType;
  indeterminate?: boolean;
}

export const Checkbox: React.FunctionComponent<CheckboxInterface> = ({
  checked = false,
  onChange,
  label,
  disabled = false,
  size = "medium",
  indeterminate = false,
}) => {
  const sizeClasses: Record<CheckboxSizeType, string> = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
  };

  const labelSizeClasses: Record<CheckboxSizeType, string> = {
    small: "text-sm",
    medium: "text-base",
  };

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label
      className={cn(
        "flex items-center gap-2 cursor-pointer",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <div
        onClick={handleClick}
        className={cn(
          "rounded border-2 flex items-center justify-center transition-all",
          sizeClasses[size],
          checked || indeterminate
            ? "bg-orange-500 border-orange-500"
            : "bg-white border-gray-300 hover:border-orange-400",
          disabled && "hover:border-gray-300"
        )}
      >
        {checked && !indeterminate && (
          <svg
            viewBox="0 0 12 12"
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {indeterminate && (
          <svg
            viewBox="0 0 12 12"
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M2 6h8" strokeLinecap="round" />
          </svg>
        )}
      </div>
      {label && (
        <span
          className={cn("text-slate-700 select-none", labelSizeClasses[size])}
        >
          {label}
        </span>
      )}
    </label>
  );
};
