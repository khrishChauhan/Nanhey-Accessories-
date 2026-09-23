"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TopBar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="bg-[#09090B] border-b border-zinc-800/80 text-zinc-400 text-xs py-2 px-4 transition-colors relative z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left: Location & Hours */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-center md:text-left">
          <div className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors">
            <MapPin className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
            <span className="font-normal text-zinc-300">
              {t("storeAddress")}
            </span>
          </div>
          <span className="hidden sm:inline text-zinc-700">/</span>
          <div className="hidden lg:flex items-center gap-1.5 text-zinc-400">
            <Clock className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
            <span>{t("workingHours")}</span>
          </div>
        </div>

        {/* Right: Phone, Email, Minimal Language Toggle */}
        <div className="flex items-center gap-4 text-xs">
          {/* Minimal Language Toggle */}
          <div className="flex items-center gap-1 text-[11px] font-medium text-zinc-400">
            <button
              onClick={() => setLanguage("en")}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                language === "en" ? "text-white font-semibold" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              EN
            </button>
            <span className="text-zinc-700">/</span>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                language === "hi" ? "text-white font-semibold" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              हिंदी
            </button>
          </div>

          <span className="text-zinc-800">|</span>

          <a
            href="tel:+919065224224"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
            <span className="tabular-nums">+91 9065224224</span>
          </a>

          <span className="hidden sm:inline text-zinc-800">|</span>

          <a
            href="mailto:info@nanheyaccessories.com"
            className="hidden sm:flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
            <span>info@nanheyaccessories.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
