import React from "react";
import clsx from "clsx";

export interface StoryWrapperInterface {
  title?: string;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const StoryWrapper: React.FunctionComponent<StoryWrapperInterface> = ({
  title,
  className,
  children,
}) => (
  <div className="rounded border bg-white m-2">
    {title && (
      <div className="rounded-t bg-gray-50 px-3 py-2 text-xs font-medium text-gray-900">
        {title}
      </div>
    )}
    <div
      className={clsx(
        "flex space-x-2 rounded-b p-3",
        title === undefined && "rounded-t",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, #fff 10px, transparent 1%) 50%, linear-gradient(#fff 10px, transparent 1%) 50%, rgba(0, 0, 0, 0.065)",
        backgroundSize: "12px 12px",
      }}
    >
      {children}
    </div>
  </div>
);
