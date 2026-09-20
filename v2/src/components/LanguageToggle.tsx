"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SegmentedControl } from "./SegmentedControl";

export const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <SegmentedControl
      layoutId="lang-toggle-pill"
      value={lang}
      onChange={(val) => setLang(val as "pt" | "en")}
      options={[
        { id: "pt", label: "PT" },
        { id: "en", label: "EN" },
      ]}
    />
  );
};
