"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { appleSheetSpring, appleSnappySpring } from "@/lib/appleSprings";
import { SpringButton } from "./SpringButton";
import { X, Send, CheckCircle2, Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  const handleReset = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
          />

          {/* Sheet / Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={appleSheetSpring}
            className="glass-panel squircle-lg p-6 sm:p-8 max-w-lg w-full z-10 space-y-6 shadow-2xl relative border border-neutral-200/90 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 rounded-full bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={appleSnappySpring}
                className="text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="apple-title-md text-[#1d1d1f]">
                    {t.contact.successTitle}
                  </h3>
                  <p className="apple-body text-sm text-neutral-600 max-w-xs mx-auto">
                    {t.contact.successDesc}
                  </p>
                </div>

                <div className="pt-4">
                  <SpringButton variant="primary" size="md" onClick={handleReset}>
                    {t.contact.closeBtn}
                  </SpringButton>
                </div>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-blue-500 text-xs font-semibold uppercase tracking-wider">
                    <Mail className="w-4 h-4" />
                    <span>{t.contact.title}</span>
                  </div>
                  <h3 className="apple-title-md text-[#1d1d1f]">
                    {t.contact.modalTitle}
                  </h3>
                  <p className="apple-body text-xs text-neutral-500">
                    {t.contact.modalSubtitle}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-100/90 border border-neutral-300/60 text-sm text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-100/90 border border-neutral-300/60 text-sm text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-100/90 border border-neutral-300/60 text-sm text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <SpringButton
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={status === "sending"}
                      className="w-full sm:w-auto"
                    >
                      {status === "sending" ? (
                        <span>{t.contact.sendingBtn}</span>
                      ) : (
                        <>
                          <span>{t.contact.sendBtn}</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </SpringButton>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
