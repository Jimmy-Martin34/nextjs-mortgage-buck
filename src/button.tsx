"use client";

import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "ghost" | "outline";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    default: "bg-card text-foreground border border-border hover:bg-muted/50",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "bg-transparent hover:bg-muted/30",
    outline: "border border-border hover:bg-muted/30",
  };
  return <button className={clsx(base, variants[variant], className)} {...props} />;
}
