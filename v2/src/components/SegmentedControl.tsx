"use client";

import React from "react";
import { motion } from "framer-motion";
import { appleElementSpring } from "@/lib/appleSprings";
import { clsx } from "clsx";

export interface Option<T extends string> {
  id: T;
  label: string;
  icon?: React.ReactNode;
}

interface SegmentedControlProps<T extends string> {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  layoutId?: string;
  className?: string;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  layoutId = "segmented-pill",
  className,
}: SegmentedControlProps<T>) {
  return (
    <div
      className={clsx(
        "inline-flex p-1 rounded-full bg-neutral-200/70 backdrop-blur-md border border-neutral-300/40 select-none",
        className
      )}
    >
      {options.map((option) => {
        const isActive = value === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className="relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 z-10"
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                transition={appleElementSpring}
                className="absolute inset-0 bg-white rounded-full shadow-sm z-0"
              />
            )}
            <span
              className={clsx(
                "relative z-10 flex items-center gap-1.5 transition-colors duration-200",
                isActive
                  ? "text-[#1d1d1f] font-semibold"
                  : "text-neutral-600 hover:text-neutral-900"
              )}
            >
              {option.icon}
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
