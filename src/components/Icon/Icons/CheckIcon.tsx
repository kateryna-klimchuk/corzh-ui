import React from "react";
import { IconType } from "../IconType";

export const CheckIcon: React.FunctionComponent<IconType> = ({
  strokeWidth = 1.6,
  ...props
}) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
