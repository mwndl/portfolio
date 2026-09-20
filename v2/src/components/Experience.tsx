"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { appleElementSpring, appleSnappySpring } from "@/lib/appleSprings";
import { Calendar, ChevronDown, CheckCircle2, Building2 } from "lucide-react";

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="apple-title-lg text-[#1d1d1f]">
            {t.experience.title}
          </h2>
          <p className="apple-body text-neutral-600 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Experience List / Accordion */}
        <div className="space-y-4">
          {t.experience.items.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={item.company + item.period}
                transition={appleElementSpring}
                className="glass-panel squircle p-5 sm:p-6 cursor-pointer border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow select-none"
                onClick={() => toggleExpand(index)}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="apple-title-md text-[#1d1d1f]">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-500">
                      <span className="flex items-center gap-1 font-semibold text-neutral-700">
                        <Building2 className="w-3.5 h-3.5 text-blue-500" />
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={appleSnappySpring}
                    className="p-2 rounded-full bg-neutral-100 text-neutral-500 shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Main description */}
                <p className="apple-body text-sm text-neutral-600 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Expandable details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={appleElementSpring}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4 border-t border-neutral-200/60 mt-4">
                        {/* Highlights */}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="space-y-2">
                            <span className="apple-caption text-neutral-400">
                              Destaques
                            </span>
                            <ul className="space-y-1.5 text-xs text-neutral-700">
                              {item.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tech Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-100/90 text-neutral-700 border border-neutral-200/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
