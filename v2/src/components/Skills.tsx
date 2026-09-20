"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SegmentedControl, Option } from "./SegmentedControl";
import { appleElementSpring, appleSheetSpring } from "@/lib/appleSprings";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type CategoryFilter = "all" | "languages" | "frameworks" | "devops" | "security_ai";

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedSkill, setSelectedSkill] = useState<(typeof t.skills.items)[0] | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  // Reset scroll position when category changes
  useEffect(() => {
    setActiveSlide(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeCategory]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    if (clientWidth > 0) {
      const newIndex = Math.round(scrollLeft / (clientWidth * 0.75));
      setActiveSlide(Math.min(Math.max(0, newIndex), filteredItems.length - 1));
    }
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth * 0.78;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveSlide(index);
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
        <div className="flex justify-center overflow-x-auto max-w-full pb-2 no-scrollbar">
          <SegmentedControl
            layoutId="skills-category-pill"
            options={filterOptions}
            value={activeCategory}
            onChange={(val) => setActiveCategory(val)}
          />
        </div>

        {/* Mobile Touch Swiper Carousel (sm:hidden) */}
        <div className="block sm:hidden space-y-3">
          <div className="relative">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 pt-1 px-1 scrollbar-none scroll-smooth"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={appleElementSpring}
                    onClick={() => setSelectedSkill(item)}
                    className="snap-center shrink-0 w-[78vw] max-w-[270px] glass-panel squircle p-5 cursor-pointer flex flex-col justify-between space-y-3 shadow-md border border-neutral-200/90 select-none active:scale-95 transition-transform"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-2xl bg-neutral-100/90 border border-neutral-200/50">
                        {getIcon(item.icon)}
                      </div>
                      <span className="text-[10px] font-semibold tracking-wide text-neutral-400 uppercase">
                        {item.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="apple-title-md text-[#1d1d1f]">
                        {item.name}
                      </h3>
                      <p className="text-xs text-neutral-500 line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Carousel Pagination Dots & Navigation Controls */}
          <div className="flex items-center justify-between px-2 pt-1">
            <button
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="p-1.5 rounded-full bg-neutral-100 text-neutral-600 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === idx
                      ? "w-4 bg-blue-600"
                      : "w-1.5 bg-neutral-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                scrollToSlide(Math.min(filteredItems.length - 1, activeSlide + 1))
              }
              disabled={activeSlide === filteredItems.length - 1}
              className="p-1.5 rounded-full bg-neutral-100 text-neutral-600 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Skills Cards Grid (hidden sm:grid) */}
        <motion.div
          layout
          className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
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
