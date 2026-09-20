"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { appleSnappySpring } from "@/lib/appleSprings";
import { FileText, Linkedin, Github, Mail, ExternalLink } from "lucide-react";

interface ShortcutsProps {
  onOpenContact: () => void;
}

export const Shortcuts: React.FC<ShortcutsProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  const shortcutItems = [
    {
      id: "resume",
      label: t.shortcuts.resume,
      icon: <FileText className="w-4 h-4 text-blue-500" />,
      href: t.hero.resumeUrl,
      external: true,
    },
    {
      id: "linkedin",
      label: t.shortcuts.linkedin,
      icon: <Linkedin className="w-4 h-4 text-sky-600" />,
      href: "https://www.linkedin.com/in/marcoswiendl",
      external: true,
    },
    {
      id: "github",
      label: t.shortcuts.github,
      icon: <Github className="w-4 h-4 text-neutral-900" />,
      href: "https://github.com/mwndl",
      external: true,
    },
    {
      id: "email",
      label: t.shortcuts.email,
      icon: <Mail className="w-4 h-4 text-emerald-500" />,
      action: onOpenContact,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {shortcutItems.map((item) => {
        const Content = (
          <>
            <span className="p-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/50">
              {item.icon}
            </span>
            <span className="font-semibold">{item.label}</span>
            {item.external && <ExternalLink className="w-3 h-3 text-neutral-400" />}
          </>
        );

        const className =
          "glass-panel squircle px-4 py-2.5 text-xs font-medium text-neutral-800 hover:text-neutral-900 transition-colors cursor-pointer flex items-center gap-2 shadow-xs border border-neutral-200/80 select-none";

        if (item.href) {
          return (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.04, y: -2 }}
              transition={appleSnappySpring}
              className={className}
            >
              {Content}
            </motion.a>
          );
        }

        return (
          <motion.button
            key={item.id}
            onClick={item.action}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.04, y: -2 }}
            transition={appleSnappySpring}
            className={className}
          >
            {Content}
          </motion.button>
        );
      })}
    </div>
  );
};
