import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import { Icon } from "../Icon/Icon";

export type SelectSizeType = "small" | "medium" | "large";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectInterface {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  size?: SelectSizeType;
}

export const Select: React.FunctionComponent<SelectInterface> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  helperText,
  error,
  disabled = false,
  size = "medium",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sizeClasses: Record<SelectSizeType, string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-2 text-base",
    large: "px-4 py-3 text-lg",
  };

  const handleSelect = (option: SelectOption) => {
    if (!option.disabled && onChange) {
      onChange(option.value);
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-1" ref={selectRef}>
      {label && (
        <label className="text-sm font-medium text-slate-700">{label}</label>
      )}
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={cn(
            "w-full rounded-md border bg-white transition-all text-left",
            "focus:outline-none focus:ring-2",
            "disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500",
            "flex items-center justify-between",
            sizeClasses[size],
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-300 focus:border-orange-400 focus:ring-orange-400/20"
          )}
        >
          <span className={cn(!selectedOption && "text-gray-400")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <Icon.DownArrow
            className={cn(
              "w-4 h-4 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                disabled={option.disabled}
                onClick={() => handleSelect(option)}
                className={cn(
                  "w-full px-3 py-2 text-left transition-colors",
                  "hover:bg-orange-50",
                  option.value === value && "bg-orange-100 text-orange-700",
                  option.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {(error || helperText) && (
        <p className={cn("text-xs", error ? "text-red-500" : "text-gray-500")}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};
