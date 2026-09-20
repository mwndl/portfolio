"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SegmentedControl, Option } from "./SegmentedControl";
import { appleElementSpring, appleSheetSpring } from "@/lib/appleSprings";
import { SpringButton } from "./SpringButton";
import {
  Code,
  Layers,
  Server,
  Database,
  Terminal,
  Cpu,
  Boxes,
  GitBranch,
  Cloud,
  Network,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type CategoryFilter = "all" | "languages" | "frameworks" | "devops" | "security_ai";

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedSkill, setSelectedSkill] = useState<(typeof t.skills.items)[0] | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filterOptions: Option<CategoryFilter>[] = [
    { id: "all", label: t.skills.categories.all },
    { id: "languages", label: t.skills.categories.languages },
    { id: "frameworks", label: t.skills.categories.frameworks },
    { id: "devops", label: t.skills.categories.devops },
    { id: "security_ai", label: t.skills.categories.security_ai },
  ];

  const filteredItems = t.skills.items.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const limit = isMobile ? 5 : 12;
  const visibleItems = isExpanded ? filteredItems : filteredItems.slice(0, limit);
  const hasMore = filteredItems.length > limit;

  const handleCategoryChange = (category: CategoryFilter) => {
    setActiveCategory(category);
    setIsExpanded(false);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "java":
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case "typescript":
      case "javascript":
        return <Code className="w-5 h-5 text-blue-500" />;
      case "python":
        return <Terminal className="w-5 h-5 text-emerald-500" />;
      case "html":
        return <Code className="w-5 h-5 text-orange-500" />;
      case "springboot":
        return <Server className="w-5 h-5 text-emerald-600" />;
      case "react":
      case "nextjs":
        return <Layers className="w-5 h-5 text-sky-500" />;
      case "nodejs":
        return <Server className="w-5 h-5 text-green-600" />;
      case "docker":
        return <Boxes className="w-5 h-5 text-sky-500" />;
      case "git":
        return <GitBranch className="w-5 h-5 text-red-500" />;
      case "database":
        return <Database className="w-5 h-5 text-indigo-500" />;
      case "aws":
        return <Cloud className="w-5 h-5 text-amber-600" />;
      case "haproxy":
        return <Network className="w-5 h-5 text-purple-500" />;
      case "linux":
        return <Terminal className="w-5 h-5 text-[#1d1d1f]" />;
      case "ai":
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
      case "meta":
        return <MessageSquare className="w-5 h-5 text-emerald-500" />;
      case "security":
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      default:
        return <Code className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="space-y-8 sm:space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="apple-title-lg text-[#1d1d1f]">
            {t.skills.title}
          </h2>
          <p className="apple-body text-neutral-600 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Segmented Control */}
        <div className="flex justify-center overflow-x-auto max-w-full pb-2 scrollbar-none">
          <SegmentedControl
            layoutId="skills-category-pill"
            options={filterOptions}
            value={activeCategory}
            onChange={handleCategoryChange}
          />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={appleElementSpring}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedSkill(item)}
                className="glass-panel squircle p-5 cursor-pointer flex flex-col justify-between space-y-3 shadow-xs hover:shadow-xl transition-shadow border border-neutral-200/80 select-none group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-neutral-100/90 border border-neutral-200/50 group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                </div>

                <div>
                  <h3 className="apple-title-md text-[#1d1d1f] group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Ver Mais / Ver Menos Button */}
        {hasMore && (
          <div className="flex justify-center pt-2">
            <SpringButton
              variant="glass"
              size="md"
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-2.5 flex items-center gap-2 font-semibold text-xs text-neutral-800 border border-neutral-300/80 bg-neutral-100/90 hover:bg-neutral-200/90 shadow-xs"
            >
              <span>{isExpanded ? t.skills.showLess : t.skills.showMore}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-neutral-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-neutral-600" />
              )}
            </SpringButton>
          </div>
        )}
      </div>

      {/* Skill Detail Popover Sheet Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-black/30 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={appleSheetSpring}
              className="glass-panel squircle-lg p-6 sm:p-8 max-w-md w-full z-10 space-y-5 shadow-2xl relative border border-neutral-200/90"
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-neutral-100 border border-neutral-200/50">
                  {getIcon(selectedSkill.icon)}
                </div>
                <div>
                  <h3 className="apple-title-md text-[#1d1d1f]">
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              <p className="apple-body text-neutral-700 text-sm">
                {selectedSkill.description}
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 rounded-full bg-[#1d1d1f] text-white text-xs font-semibold hover:bg-[#333336] transition-colors"
                >
                  {t.contact.closeBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
