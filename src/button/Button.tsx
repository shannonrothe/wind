import React from "react";
import { BaseProps } from "../index";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent) => void;
  variant?: "primary" | "secondary";
  active?: boolean;
  disabled?: boolean;
  pointerEvents?: boolean;
} & BaseProps;

const VARIANTS = {
  primary: {
    bg: "bg-blue-600",
    hover: "bg-blue-500",
    active: "bg-blue-700",
  },
  secondary: {
    bg: "bg-orange-600",
    hover: "bg-orange-500",
    active: "bg-orange-700",
  },
};

export const Button = React.forwardRef(
  ({ children, onClick, ...rest }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { active, disabled, pointerEvents = false, variant = "primary" } = rest;

    if (disabled) {
      onClick = undefined;
    }

    const classes = [
      "outline-none",
      "focus:outline-none",
      "text-sm",
      "font-bold",
      "text-white",
      VARIANTS[variant].bg,
      !active && `hover:${VARIANTS[variant].hover}`,
      "px-5",
      "py-2",
      "rounded",
      "transition-colors",
      "duration-100",
      "ease-in",
      active && VARIANTS[variant].active,
      !pointerEvents && (disabled || active) && "pointer-events-none",
      disabled && "opacity-50",
      !disabled && pointerEvents && "focus:shadow-outline",
    ];

    return (
      <button ref={ref} onClick={onClick} className={`${classes.join(" ")}`}>
        {children}
      </button>
    );
  }
);
