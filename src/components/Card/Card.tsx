import React from "react";
import { cn } from "../../lib/utils";

export interface CardInterface {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export interface CardHeaderInterface {
  children?: React.ReactNode;
  className?: string;
}

export interface CardBodyInterface {
  children?: React.ReactNode;
  className?: string;
}

export interface CardFooterInterface {
  children?: React.ReactNode;
  className?: string;
}

export interface CardImageInterface {
  src: string;
  alt: string;
  className?: string;
}

const CardRoot: React.FunctionComponent<CardInterface> = ({
  children,
  className,
  onClick,
  hoverable = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-white rounded-lg border border-gray-200 overflow-hidden",
        hoverable && "hover:shadow-md transition-shadow cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FunctionComponent<CardHeaderInterface> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("px-4 py-3 border-b border-gray-100", className)}>
      {children}
    </div>
  );
};

const CardBody: React.FunctionComponent<CardBodyInterface> = ({
  children,
  className,
}) => {
  return <div className={cn("px-4 py-4", className)}>{children}</div>;
};

const CardFooter: React.FunctionComponent<CardFooterInterface> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "px-4 py-3 border-t border-gray-100 bg-gray-50",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardImage: React.FunctionComponent<CardImageInterface> = ({
  src,
  alt,
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-full h-48 object-cover", className)}
    />
  );
};

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Image: CardImage,
};
