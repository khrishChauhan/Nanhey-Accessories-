"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TopBar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Location & Working Hours */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-center md:text-left">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="h-3.5 w-3.5 text-brand-red shrink-0" />
            <span>{t("storeAddress")}</span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="h-3.5 w-3.5 text-brand-accent-green shrink-0" />
            <span>{t("workingHours")}</span>
          </div>
        </div>

        {/* Right: Phone, Email, Language Switcher & Socials */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs">
          {/* Language Switcher Toggle Pill */}
          <div className="flex items-center rounded-lg bg-slate-800 p-0.5 border border-slate-700">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                language === "en"
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                language === "hi"
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              हिंदी
            </button>
          </div>

          <span className="text-slate-600">|</span>

          <a
            href="tel:+919065224224"
            className="flex items-center gap-1.5 font-medium hover:text-brand-red transition-colors text-white"
          >
            <Phone className="h-3.5 w-3.5 text-brand-red shrink-0" />
            <span>+91 9065224224</span>
          </a>

          <span className="hidden sm:inline text-slate-600">|</span>

          <a
            href="mailto:info@nanheyaccessories.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-brand-red transition-colors"
          >
            <Mail className="h-3.5 w-3.5 text-brand-red shrink-0" />
            <span>info@nanheyaccessories.com</span>
          </a>

          <span className="hidden sm:inline text-slate-600">|</span>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#1877F2] transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/919065224224"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-brand-accent-green transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 0C5.397 0 0 5.397 0 12.031c0 2.118.552 4.185 1.603 6.007L0 24l6.147-1.579a12.032 12.032 0 0 0 5.884 1.526h.005c6.634 0 12.032-5.397 12.032-12.031 0-3.214-1.252-6.234-3.526-8.508C18.267 1.252 15.246 0 12.031 0zm0 22.029h-.004a9.98 9.98 0 0 1-5.088-1.39l-.365-.216-3.778.971.99-3.68-.237-.378a9.972 9.972 0 0 1-1.53-5.305c0-5.525 4.496-10.021 10.024-10.021 2.678 0 5.195 1.043 7.088 2.936a9.96 9.96 0 0 1 2.935 7.085c0 5.526-4.498 10.022-10.024 10.022zm5.495-7.502c-.301-.151-1.782-.879-2.058-.98-.276-.1-.477-.151-.678.151-.201.301-.778.98-.954 1.181-.176.201-.352.226-.653.075-.301-.151-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.151-.678-1.632-.929-2.235-.245-.588-.494-.508-.678-.517l-.578-.01c-.201 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.912 1.23 3.113.151.201 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.722.23 1.378.197 1.898.12.579-.086 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.352z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
