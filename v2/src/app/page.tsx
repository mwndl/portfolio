"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [bgSrc, setBgSrc] = useState(
    "https://www.gravatar.com/avatar/d87fbc718cafb7c4a7ce26efd1f227cc?s=1000"
  );

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#f5f5f7] text-[#1d1d1f]">
      {/* Ambient Personal Gravatar Background Image */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
        <Image
          src={bgSrc}
          alt=""
          fill
          sizes="100vw"
          priority
          onError={() => setBgSrc("/avatar.jpg")}
          className="object-cover scale-110 blur-[90px] filter saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7]/60 via-[#f5f5f7]/80 to-[#f5f5f7]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Floating Translucent Dock Navbar */}
        <Navbar onOpenContact={handleOpenContact} />

        {/* Sections */}
        <About onOpenContact={handleOpenContact} />
        <Skills />
        <Experience />
        <Footer />
      </div>

      {/* Contact Sheet Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </main>
  );
}
