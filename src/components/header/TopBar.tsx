"use client";

import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TopBar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="bg-zinc-950 text-zinc-400 text-[11px] h-[30px] flex items-center border-b border-zinc-900/80 px-4 relative z-40">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Left: Location & Hours */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors">
            <MapPin className="h-3 w-3 text-red-500 shrink-0" />
            <span className="font-normal text-zinc-300 truncate max-w-[200px] sm:max-w-none">
              {t("storeAddress")}
            </span>
          </div>
          <span className="hidden md:inline text-zinc-800">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-zinc-400">
            <Clock className="h-3 w-3 text-zinc-500 shrink-0" />
            <span>{t("workingHours")}</span>
          </div>
        </div>

        {/* Right: Phone & Minimal [EN | हिंदी] Pill */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919065224224"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-red-400 transition-colors"
          >
            <Phone className="h-3 w-3 text-red-500 shrink-0" />
            <span className="tabular-nums font-medium">+91 9065224224</span>
          </a>

          <span className="text-zinc-800">|</span>

          {/* Minimal Language Toggle Pill */}
          <div className="inline-flex items-center bg-zinc-900/90 border border-zinc-800 rounded-full p-0.5 text-[10px]">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === "en"
                  ? "bg-red-600 text-white font-semibold shadow-xs shadow-red-600/30"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                language === "hi"
                  ? "bg-red-600 text-white font-semibold shadow-xs shadow-red-600/30"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
