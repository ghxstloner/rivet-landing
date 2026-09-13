import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "white" | "outlineWhite";
type ButtonSize = "sm" | "md" | "block";

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-btn font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-white hover:bg-graphite",
  outline:
    "text-ink [outline:1.5px_solid_#0A0A0A] [outline-offset:-0.75px] hover:bg-paper",
  white: "bg-white text-ink hover:bg-paper",
  outlineWhite:
    "text-white [outline:1.5px_solid_#FFFFFF] [outline-offset:-0.75px] hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-[9px] text-sm leading-[17px]",
  md: "px-[22px] py-3 text-base leading-[19px]",
  block: "w-full px-4 py-3 text-[15px] leading-normal",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
