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

interface HeroSectionProps {
  onShopNow?: () => void;
  onRequestQuote?: () => void;
}

export default function HeroSection({
  onShopNow,
  onRequestQuote,
}: HeroSectionProps) {
  const uspChips = [
    { text: "High Quality Products", icon: Award },
    { text: "Best Price Guaranteed", icon: Zap },
    { text: "Expert Installation", icon: CheckCircle2 },
    { text: "After Sales Support", icon: Clock },
  ];

  const trustBadges = [
    { title: "100% Original", desc: "Genuine CP Plus & Hikvision", icon: ShieldCheck },
    { title: "Warranty Assured", desc: "Up to 2 Years Brand Warranty", icon: Award },
    { title: "Secure Payments", desc: "UPI, Cards & Cash On Delivery", icon: Lock },
    { title: "Fast Delivery", desc: "Across Begusarai & Bihar", icon: Zap },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-12 lg:py-20 border-b border-slate-800">
      {/* Background Tech Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e52e06_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Call to Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red"></span>
              </span>
              <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
                #1 CCTV & Security Solutions in Begusarai
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              PREMIUM SECURITY –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-brand-red to-orange-500">
                SMARTER PROTECTION
              </span>{" "}
              FOR EVERY PLACE
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              High Quality CCTV Cameras & Security Solutions for Home, Shop, Office & Industry. 
              Authorized seller of CP Plus, Hikvision, Dahua & Realtime biometric systems in Begusarai, Bihar.
            </p>

            {/* Feature Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              {uspChips.map((chip, idx) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/70 text-xs font-semibold text-slate-200 hover:border-brand-red/50 transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-red" />
                    <span>{chip.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#bestsellers"
                onClick={onShopNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-600 text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-brand-red/30 transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#builder"
                onClick={onRequestQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-white font-bold text-sm tracking-wide px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Cctv className="h-4 w-4 text-brand-red" />
                <span>Build Custom CCTV Package</span>
              </a>
            </div>

            {/* Phone Quick Dial */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 pt-2">
              <PhoneCall className="h-4 w-4 text-brand-accent-green" />
              <span>
                Need instant consultation? Call directly:{" "}
                <a
                  href="tel:+919065224224"
                  className="font-bold text-white hover:text-brand-red underline underline-offset-4"
                >
                  +91 9065224224
                </a>
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Showcase & Trust Box (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/70 p-6 shadow-2xl backdrop-blur-sm overflow-hidden">
              {/* Surveillance Badge */}
              <div className="flex items-center justify-between border-b border-slate-700/70 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-600 animate-pulse"></div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-200">
                    REC ● 4K UHD SURVEILLANCE
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold bg-brand-red/20 text-brand-red px-2 py-0.5 rounded border border-brand-red/30">
                  AI MOTION DETECT
                </span>
              </div>

              {/* Graphic Mockup Area */}
              <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 mb-6 shadow-inner text-center">
                {/* SVG Visual Graphic of CCTV Dome + Bullet Setup */}
                <div className="relative h-44 w-full flex items-center justify-center bg-radial from-slate-800/50 to-slate-950 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <div className="w-48 h-48 border border-brand-red rounded-full animate-ping"></div>
                    <div className="w-32 h-32 border border-slate-600 rounded-full"></div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center gap-6">
                    {/* Bullet Camera Graphic */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 shadow-lg text-brand-red">
                        <Video className="h-8 w-8" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-300 mt-2">
                        CP Plus 4K Bullet
                      </span>
                      <span className="text-[10px] text-brand-accent-green font-semibold">
                        Full Color Night Vision
                      </span>
                    </div>

                    <div className="h-12 w-[1px] bg-slate-800"></div>

                    {/* Dome Camera Graphic */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 shadow-lg text-brand-red">
                        <Cctv className="h-8 w-8" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-300 mt-2">
                        Hikvision Smart Dome
                      </span>
                      <span className="text-[10px] text-brand-accent-green font-semibold">
                        Two-Way Audio + Cloud
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Pill */}
                <div className="mt-3 flex items-center justify-between text-left text-xs bg-slate-900/90 rounded-lg p-2.5 border border-slate-800">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">
                      Customer Satisfaction
                    </p>
                    <p className="font-extrabold text-white text-sm">
                      4.9 / 5.0 (500+ Reviews)
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-slate-400">
                      Local Experience
                    </p>
                    <p className="font-extrabold text-brand-red text-sm">
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
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-850/60 border border-slate-700/60 hover:border-slate-600 transition-colors"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red shrink-0 mt-0.5">
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
