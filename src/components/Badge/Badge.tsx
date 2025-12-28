import React from "react";
import { cn } from "../../lib/utils";

export type BadgeColorType =
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "purple";
export type BadgeSizeType = "small" | "medium";
export type BadgeVariantType = "solid" | "outline" | "dot";

export interface BadgeInterface {
  children?: React.ReactNode;
  color?: BadgeColorType;
  size?: BadgeSizeType;
  variant?: BadgeVariantType;
  className?: string;
}

export const Badge: React.FunctionComponent<BadgeInterface> = ({
  children,
  color = "gray",
  size = "medium",
  variant = "solid",
  className,
}) => {
  const solidColorClasses: Record<BadgeColorType, string> = {
    gray: "bg-gray-100 text-gray-700",
    red: "bg-red-100 text-red-700",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    orange: "bg-orange-100 text-orange-700",
    purple: "bg-purple-100 text-purple-700",
  };

  const outlineColorClasses: Record<BadgeColorType, string> = {
    gray: "border-gray-300 text-gray-700",
    red: "border-red-300 text-red-700",
    green: "border-green-300 text-green-700",
    blue: "border-blue-300 text-blue-700",
    orange: "border-orange-300 text-orange-700",
    purple: "border-purple-300 text-purple-700",
  };

  const dotColorClasses: Record<BadgeColorType, string> = {
    gray: "bg-gray-500",
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
  };

  const sizeClasses: Record<BadgeSizeType, string> = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
  };

  if (variant === "dot") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-slate-700",
          size === "small" ? "text-xs" : "text-sm",
          className
        )}
      >
        <span
          className={cn(
            "rounded-full",
            size === "small" ? "w-1.5 h-1.5" : "w-2 h-2",
            dotColorClasses[color]
          )}
        />
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        sizeClasses[size],
        variant === "solid" && solidColorClasses[color],
        variant === "outline" && ["border", outlineColorClasses[color]],
        className
      )}
    >
      {children}
    </span>
  );
};
