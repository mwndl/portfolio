"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Translation } from "@/lib/translations";

type Language = "pt" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved && (saved === "pt" || saved === "en")) {
      setLangState(saved);
    } else {
      const browserLang = navigator.language.startsWith("pt") ? "pt" : "en";
      setLangState(browserLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
