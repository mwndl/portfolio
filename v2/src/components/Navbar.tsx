"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { SpringButton } from "./SpringButton";
import { appleSnappySpring } from "@/lib/appleSprings";
import { MessageSquare } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("about");
  const [navAvatar, setNavAvatar] = useState(
    "https://www.gravatar.com/avatar/d87fbc718cafb7c4a7ce26efd1f227cc?s=200"
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={appleSnappySpring}
        className="glass-dock squircle px-2 sm:px-3.5 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-3 md:gap-4 pointer-events-auto transition-all duration-300 max-w-[calc(100vw-1rem)] overflow-x-auto scrollbar-none shrink-0"
      >
        {/* Brand Gravatar Badge */}
        <button
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-1.5 font-bold tracking-tight text-[#1d1d1f] px-0.5 cursor-pointer group shrink-0"
        >
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden ring-1 ring-neutral-300 shrink-0">
            <Image
              src={navAvatar}
              alt="Marcos Wiendl"
              fill
              sizes="28px"
              onError={() => setNavAvatar("/avatar.jpg")}
              className="object-cover group-hover:scale-110 transition-transform"
            />
          </div>
          <span className="hidden md:inline-block text-sm font-semibold tracking-tight whitespace-nowrap">
            Marcos Wiendl
          </span>
        </button>

        <div className="h-4 w-[1px] bg-neutral-300/60 hidden md:block shrink-0" />

        {/* Nav Items */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold rounded-full transition-colors cursor-pointer text-neutral-600 hover:text-neutral-900 shrink-0 whitespace-nowrap"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-dock-active"
                    transition={appleSnappySpring}
                    className="absolute inset-0 bg-neutral-200/90 rounded-full z-0"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="h-4 w-[1px] bg-neutral-300/60 shrink-0" />

        {/* Controls & Contact */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <SpringButton
            variant="primary"
            size="sm"
            onClick={onOpenContact}
            className="ml-0.5 px-2 sm:px-3 py-1.5 flex items-center gap-1.5 shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline whitespace-nowrap">{t.nav.contact}</span>
          </SpringButton>
        </div>
      </motion.nav>
    </header>
  );
};
