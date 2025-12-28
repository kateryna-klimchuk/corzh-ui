import React from "react";
import { cn } from "../../lib/utils";

export type AvatarSizeType = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatusType = "online" | "offline" | "busy" | "away";

export interface AvatarInterface {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSizeType;
  status?: AvatarStatusType;
  className?: string;
}

export interface AvatarGroupInterface {
  children: React.ReactNode;
  max?: number;
  size?: AvatarSizeType;
}

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const AvatarRoot: React.FunctionComponent<AvatarInterface> = ({
  src,
  alt = "",
  name,
  size = "md",
  status,
  className,
}) => {
  const sizeClasses: Record<AvatarSizeType, string> = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-16 h-16 text-xl",
  };

  const statusSizeClasses: Record<AvatarSizeType, string> = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-4 h-4",
  };

  const statusColorClasses: Record<AvatarStatusType, string> = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-red-500",
    away: "bg-yellow-500",
  };

  const initials = name ? getInitials(name) : "";

  return (
    <div className={cn("relative inline-block", className)}>
      <div
        className={cn(
          "rounded-full overflow-hidden flex items-center justify-center font-medium",
          "bg-orange-100 text-orange-700",
          sizeClasses[size]
        )}
      >
        {src ? (
          <img src={src} alt={alt || name} className="w-full h-full object-cover" />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-white",
            statusSizeClasses[size],
            statusColorClasses[status]
          )}
        />
      )}
    </div>
  );
};

const AvatarGroup: React.FunctionComponent<AvatarGroupInterface> = ({
  children,
  max,
  size = "md",
}) => {
  const childArray = React.Children.toArray(children);
  const visibleChildren = max ? childArray.slice(0, max) : childArray;
  const remainingCount = max ? childArray.length - max : 0;

  const sizeClasses: Record<AvatarSizeType, string> = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-16 h-16 text-xl",
  };

  const overlapClasses: Record<AvatarSizeType, string> = {
    xs: "-ml-2",
    sm: "-ml-3",
    md: "-ml-3",
    lg: "-ml-4",
    xl: "-ml-5",
  };

  return (
    <div className="flex items-center">
      {visibleChildren.map((child, index) => (
        <div
          key={index}
          className={cn(
            "relative",
            index > 0 && overlapClasses[size]
          )}
          style={{ zIndex: visibleChildren.length - index }}
        >
          {React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<AvatarInterface>, {
                size,
                className: "ring-2 ring-white",
              })
            : child}
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className={cn(
            "rounded-full flex items-center justify-center font-medium",
            "bg-gray-200 text-gray-600 ring-2 ring-white",
            sizeClasses[size],
            overlapClasses[size]
          )}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export const Avatar = {
  Root: AvatarRoot,
  Group: AvatarGroup,
};
