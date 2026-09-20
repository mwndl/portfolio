"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { appleSnappySpring } from "@/lib/appleSprings";
import { clsx } from "clsx";

interface SpringButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const SpringButton: React.FC<SpringButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2",
    lg: "px-7 py-3.5 text-base font-semibold gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#1d1d1f] text-white hover:bg-[#333336] shadow-sm shadow-black/10",
    secondary:
      "bg-neutral-200/80 text-neutral-900 hover:bg-neutral-300/80",
    glass:
      "glass-panel text-neutral-900 hover:bg-white shadow-xs border border-neutral-200/80",
    ghost:
      "bg-transparent text-neutral-700 hover:bg-neutral-200/60",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={appleSnappySpring}
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
