"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-neutral-200/80 text-center text-xs text-neutral-500">
      <div className="max-w-4xl mx-auto">
        <p className="tracking-tight">
          © {currentYear} {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};
