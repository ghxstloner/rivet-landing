import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Container({ as: Tag = "div", className = "", children }: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[120px] ${className}`}
    >
      {children}
    </Tag>
  );
}
