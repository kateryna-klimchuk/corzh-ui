import React from "react";

export const MockLink: React.FC<{
  to: string;
  className?: string;
  children: React.ReactNode;
}> = ({ to, className, children }) => (
  <a href={to} className={className}>
    {children}
  </a>
);
