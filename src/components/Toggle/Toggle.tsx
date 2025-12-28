import React from "react";
import { cn } from "../../lib/utils";

export type ToggleSizeType = "small" | "medium" | "large";

export interface ToggleInterface {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: ToggleSizeType;
}

export const Toggle: React.FunctionComponent<ToggleInterface> = ({
  checked = false,
  onChange,
  label,
  disabled = false,
  size = "medium",
}) => {
  const trackSizeClasses: Record<ToggleSizeType, string> = {
    small: "w-8 h-4",
    medium: "w-10 h-5",
    large: "w-12 h-6",
  };

  const thumbSizeClasses: Record<ToggleSizeType, string> = {
    small: "w-3 h-3",
    medium: "w-4 h-4",
    large: "w-5 h-5",
  };

  const thumbTranslateClasses: Record<ToggleSizeType, string> = {
    small: "translate-x-4",
    medium: "translate-x-5",
    large: "translate-x-6",
  };

  const labelSizeClasses: Record<ToggleSizeType, string> = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label
      className={cn(
        "flex items-center gap-3 cursor-pointer",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "relative rounded-full transition-colors",
          trackSizeClasses[size],
          checked ? "bg-orange-500" : "bg-gray-300",
          !disabled && "hover:opacity-90"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 bg-white rounded-full shadow transition-transform",
            thumbSizeClasses[size],
            checked && thumbTranslateClasses[size]
          )}
        />
      </button>
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
