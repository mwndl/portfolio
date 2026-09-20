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
        "flex items-center gap-1 p-1 rounded-full bg-neutral-200/70 backdrop-blur-md border border-neutral-300/40 select-none max-w-full overflow-x-auto scrollbar-none shrink-0",
        className
      )}
    >
      {options.map((option) => {
        const isActive = value === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className="relative px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 z-10 shrink-0 whitespace-nowrap"
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                transition={appleElementSpring}
                className="absolute inset-0 bg-white rounded-full shadow-xs z-0"
              />
            )}
            <span
              className={clsx(
                "relative z-10 flex items-center gap-1.5 transition-colors duration-200 whitespace-nowrap",
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
