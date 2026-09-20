"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { appleElementSpring, appleSnappySpring } from "@/lib/appleSprings";
import { SpringButton } from "./SpringButton";
import { Shortcuts } from "./Shortcuts";
import { ArrowUpRight, MessageSquare, Code2, GraduationCap } from "lucide-react";

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();
  const [avatarSrc, setAvatarSrc] = useState(
    "https://www.gravatar.com/avatar/d87fbc718cafb7c4a7ce26efd1f227cc?s=800"
  );

  return (
    <section id="about" className="pt-32 pb-16 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={appleElementSpring}
        className="flex flex-col items-center text-center space-y-8"
      >
        {/* Profile Avatar Image (Gravatar) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={appleSnappySpring}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-2xl bg-neutral-200">
            <Image
              src={avatarSrc}
              alt="Marcos Wiendl"
              fill
              sizes="(max-width: 640px) 112px, 128px"
              priority
              onError={() => setAvatarSrc("/avatar.jpg")}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...appleElementSpring, delay: 0.1 }}
            className="apple-title-xl text-[#1d1d1f]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...appleElementSpring, delay: 0.2 }}
            className="text-lg sm:text-xl font-medium text-neutral-600 leading-relaxed tracking-tight"
          >
            {t.hero.role}
          </motion.p>
        </div>

        {/* Bio Card with Gravatar Ambient Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...appleElementSpring, delay: 0.3 }}
          className="glass-panel squircle-lg p-6 sm:p-8 max-w-3xl text-left space-y-5 shadow-xl relative overflow-hidden border border-neutral-200/80"
        >
          {/* Gravatar Background Watermark Overlay */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full overflow-hidden opacity-10 pointer-events-none blur-xl">
            <Image
              src={avatarSrc}
              alt=""
              fill
              onError={() => setAvatarSrc("/avatar.jpg")}
              className="object-cover"
            />
          </div>

          <p className="apple-body text-neutral-800 relative z-10">
            {t.hero.subtitle1}
          </p>

          <p className="apple-body text-neutral-600 relative z-10">
            {t.hero.subtitle2}
          </p>

          {/* Key Facts Pill Grid */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-600 relative z-10">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-100/90 border border-neutral-200/50">
              <GraduationCap className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Sistemas para Internet + MBA Full Stack</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-100/90 border border-neutral-200/50">
              <Code2 className="w-4 h-4 text-purple-500 shrink-0" />
              <span>Java, Spring Boot, React, Next.js, Node.js</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...appleElementSpring, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <SpringButton variant="primary" size="lg" onClick={onOpenContact}>
            <span>{t.hero.contactBtn}</span>
            <MessageSquare className="w-4 h-4" />
          </SpringButton>

          <a
            href={t.hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <SpringButton variant="glass" size="lg">
              <span>{t.hero.resume}</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </SpringButton>
          </a>
        </motion.div>

        {/* Shortcuts Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...appleElementSpring, delay: 0.5 }}
          className="pt-4"
        >
          <Shortcuts onOpenContact={onOpenContact} />
        </motion.div>
      </motion.div>
    </section>
  );
};
