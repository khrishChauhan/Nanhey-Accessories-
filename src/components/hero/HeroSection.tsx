"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Cctv,
  Video,
  Award,
  Clock,
  Sparkles,
  PhoneCall,
  Zap,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onShopNow?: () => void;
  onRequestQuote?: () => void;
}

export default function HeroSection({
  onShopNow,
  onRequestQuote,
}: HeroSectionProps) {
  const { t } = useLanguage();

  const uspChips = [
    { text: t("chipQuality"), icon: Award },
    { text: t("chipPrice"), icon: Zap },
    { text: t("chipInstall"), icon: CheckCircle2 },
    { text: t("chipSupport"), icon: Clock },
  ];

  const trustBadges = [
    { title: "100% Original", desc: "Genuine CP Plus & Hikvision", icon: ShieldCheck },
    { title: "Warranty Assured", desc: "Up to 2 Years Brand Warranty", icon: Award },
    { title: "Secure Payments", desc: "UPI, Cards & Cash On Delivery", icon: Lock },
    { title: "Fast Delivery", desc: "Across Begusarai & Bihar", icon: Zap },
  ];

  return (
    <section className="relative bg-[#090D14] text-white overflow-hidden py-14 lg:py-24 border-b border-white/10">
      {/* Studio Lighting & Ambient Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#131C31_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-ruby-glow rounded-full blur-3xl pointer-events-none opacity-80"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-ruby/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Live Indicator Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-white/10 shadow-inner backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-ruby-glow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-ruby"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-slate-200">
                ● {t("heroPill")}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              {t("heroTitlePrefix")}{" "}
              <span className="text-gradient-ruby drop-shadow-sm">
                {t("heroTitleHighlight")}
              </span>{" "}
              {t("heroTitleSuffix")}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t("heroSubtitle")}
            </p>

            {/* Feature Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              {uspChips.map((chip, idx) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:border-brand-ruby/60 hover:bg-white/10 transition-all duration-200"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-ruby-glow" />
                    <span>{chip.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#catalog"
                onClick={onShopNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-ruby via-red-600 to-brand-ruby-deep hover:from-brand-ruby-600 hover:to-brand-ruby text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-ruby hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>{t("shopNow")}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#builder"
                onClick={onRequestQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-sm tracking-wide px-7 py-4 rounded-xl border border-white/15 hover:border-brand-ruby/50 backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <Cctv className="h-4 w-4 text-brand-ruby" />
                <span>{t("buildCustomPackage")}</span>
              </a>
            </div>

            {/* Phone Quick Dial */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 pt-1">
              <PhoneCall className="h-4 w-4 text-emerald-400" />
              <span>
                Need instant consultation? Call directly:{" "}
                <a
                  href="tel:+919065224224"
                  className="font-bold text-white hover:text-brand-ruby underline underline-offset-4 decoration-brand-ruby/60 transition-colors"
                >
                  +91 9065224224
                </a>
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Showcase & Trust Box (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Backlight for Camera Frame */}
            <div className="absolute inset-0 bg-brand-ruby/15 blur-2xl rounded-3xl -z-10"></div>

            <div className="relative rounded-2xl bg-slate-900/70 border border-white/10 p-6 shadow-2xl backdrop-blur-xl overflow-hidden hover:border-brand-ruby/40 transition-all duration-300 group">
              {/* Surveillance Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-brand-ruby animate-pulse"></div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-200">
                    REC ● 4K UHD SURVEILLANCE
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-brand-ruby/15 text-brand-ruby px-2.5 py-0.5 rounded-full border border-brand-ruby/30">
                  AI MOTION DETECT
                </span>
              </div>

              {/* Graphic Mockup Area */}
              <div className="relative rounded-xl bg-[#060A10] border border-white/10 p-4 mb-5 shadow-inner text-center overflow-hidden">
                <div className="relative h-44 w-full flex items-center justify-center bg-[radial-gradient(circle_at_center,#1E293B_0%,#060A10_80%)] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className="w-52 h-52 border border-brand-ruby rounded-full animate-ping"></div>
                    <div className="w-36 h-36 border border-slate-600 rounded-full"></div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center gap-6">
                    {/* Bullet Camera Graphic */}
                    <div className="flex flex-col items-center group/cam">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/80 border border-white/10 shadow-lg text-brand-ruby group-hover/cam:scale-105 group-hover/cam:border-brand-ruby/50 transition-all duration-300">
                        <Video className="h-8 w-8 text-brand-ruby-glow" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-200 mt-2.5">
                        CP Plus 4K Bullet
                      </span>
                      <span className="text-[10px] text-emerald-400 font-semibold">
                        Full Color Night Vision
                      </span>
                    </div>

                    <div className="h-14 w-[1px] bg-white/10"></div>

                    {/* Dome Camera Graphic */}
                    <div className="flex flex-col items-center group/cam">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/80 border border-white/10 shadow-lg text-brand-ruby group-hover/cam:scale-105 group-hover/cam:border-brand-ruby/50 transition-all duration-300">
                        <Cctv className="h-8 w-8 text-brand-ruby-glow" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-200 mt-2.5">
                        Hikvision Smart Dome
                      </span>
                      <span className="text-[10px] text-emerald-400 font-semibold">
                        Two-Way Audio + Cloud
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Pill */}
                <div className="mt-3.5 flex items-center justify-between text-left text-xs bg-slate-900/90 rounded-xl p-3 border border-white/5">
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                      Customer Satisfaction
                    </p>
                    <p className="font-extrabold text-white text-sm">
                      4.9 / 5.0 (500+ Reviews)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                      Local Experience
                    </p>
                    <p className="font-extrabold text-brand-ruby text-sm">
                      10+ Years in Begusarai
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Trust Badges in 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3">
                {trustBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/40 border border-white/5 hover:border-brand-ruby/30 transition-all duration-200"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-ruby/15 text-brand-ruby shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white leading-tight">
                          {badge.title}
                        </h4>
                        <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                          {badge.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
