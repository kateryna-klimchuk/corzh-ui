import React from "react";
import { IconType } from "../IconType";

export interface StarIconProps extends IconType {
  filled?: boolean;
}

export const StarIcon: React.FunctionComponent<StarIconProps> = ({
  strokeWidth = 1.6,
  filled = false,
  ...props
}) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
