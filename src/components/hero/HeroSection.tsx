"use client";

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Video,
  Cctv,
  CheckCircle2,
  Clock,
  Phone,
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

  return (
    <section className="relative bg-[#09090B] text-white overflow-hidden py-16 lg:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Quiet Editorial Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Minimal Understated Tagline */}
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red"></span>
              <span>Enterprise CCTV & Surveillance</span>
            </div>

            {/* Authoritative Minimal Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white max-w-2xl">
              Security, engineered for absolute clarity.
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Official CP Plus and Hikvision systems with certified doorstep installation, GST compliance, and local Begusarai technical support.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalog"
                onClick={onShopNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs tracking-wide px-6 py-3.5 rounded-lg transition-colors"
              >
                <span>Browse Catalog</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <a
                href="#builder"
                onClick={onRequestQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-zinc-300 hover:text-white font-medium text-xs tracking-wide px-4 py-3.5 transition-colors border border-zinc-800 hover:border-zinc-700 rounded-lg"
              >
                <span>Configure Custom Package</span>
              </a>
            </div>

            {/* Minimalist Metrics Line */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-xs text-zinc-400">
              <div>
                <span className="block font-bold text-white text-sm tabular-nums">10+ Years</span>
                <span className="text-[11px] text-zinc-500">Begusarai Heritage</span>
              </div>
              <div className="h-6 w-[1px] bg-zinc-800 hidden sm:block"></div>
              <div>
                <span className="block font-bold text-white text-sm tabular-nums">5,000+</span>
                <span className="text-[11px] text-zinc-500">Active Deployments</span>
              </div>
              <div className="h-6 w-[1px] bg-zinc-800 hidden sm:block"></div>
              <div>
                <span className="block font-bold text-white text-sm">Authorized</span>
                <span className="text-[11px] text-zinc-500">CP Plus & Hikvision</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Studio Equipment Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl bg-zinc-900/60 border border-zinc-800 p-6 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3.5 mb-5 text-xs">
                <span className="text-zinc-400 font-medium">Hardware Profile</span>
                <span className="text-[11px] text-zinc-400 font-mono">4K UHD / H.265+</span>
              </div>

              {/* Hardware Graphic Area */}
              <div className="relative h-48 w-full flex items-center justify-center rounded-lg bg-zinc-950/80 border border-zinc-800/60 p-4">
                <div className="flex items-center justify-center gap-8">
                  {/* Bullet Spec Item */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200">
                      <Video className="h-7 w-7 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-semibold text-zinc-200 mt-2.5">
                      Bullet Series
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      IP67 Weatherproof
                    </span>
                  </div>

                  <div className="h-12 w-[1px] bg-zinc-800"></div>

                  {/* Dome Spec Item */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200">
                      <Cctv className="h-7 w-7 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-semibold text-zinc-200 mt-2.5">
                      Dome Series
                    </span>
                    <span className="text-[11px] text-zinc-500">
                      Vandal Resistant
                    </span>
                  </div>
                </div>
              </div>

              {/* Quiet Spec Summary */}
              <div className="mt-4 pt-3.5 border-t border-zinc-800/80 grid grid-cols-2 gap-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-zinc-400" />
                  <span>2-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-zinc-400" />
                  <span>Doorstep Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
