"use client";

import React from "react";
import {
  Wrench,
  CheckCircle2,
  Phone,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Award,
  Clock,
} from "lucide-react";

interface InstallationBannerProps {
  onBookNow: () => void;
}

export default function InstallationBanner({
  onBookNow,
}: InstallationBannerProps) {
  const checklist = [
    {
      title: "Trained Technicians",
      desc: "Certified professionals with 10+ years experience",
    },
    {
      title: "Neat & Perfect Wiring",
      desc: "Casing & pipe concealment with zero exposed wires",
    },
    {
      title: "After Installation Support",
      desc: "Instant on-site repair & remote troubleshooting",
    },
  ];

  return (
    <div
      id="installation"
      className="flex flex-col h-full rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl overflow-hidden relative group"
    >
      {/* Background glow and subtle mesh */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Tag */}
      <div className="p-5 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-red text-white shadow-md">
            <Wrench className="h-4 w-4" />
          </div>
          <span className="text-[11px] font-black uppercase tracking-wider text-brand-red">
            Doorstep Service
          </span>
        </div>
        <span className="text-[10px] font-extrabold uppercase bg-brand-accent-green/20 text-brand-accent-green px-2 py-0.5 rounded border border-brand-accent-green/30">
          Begusarai & Bihar
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
        {/* Main Content */}
        <div>
          <h3 className="text-xl font-black tracking-tight leading-snug">
            PROFESSIONAL INSTALLATION SERVICE
          </h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Hassle-free, clean installation for homes, offices, showrooms, and industrial plants by certified security engineers.
          </p>
        </div>

        {/* Technician Visual Showcase Card */}
        <div className="relative rounded-xl bg-slate-950/90 border border-slate-800 p-4 text-center overflow-hidden">
          <div className="flex items-center justify-center py-4">
            <div className="relative">
              {/* Graphic Icon Composition */}
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-brand-red text-brand-red shadow-lg group-hover:scale-105 transition-transform">
                <Wrench className="h-10 w-10 stroke-[1.5]" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-brand-accent-green text-slate-950 rounded-full p-1.5 shadow-md">
                <CheckCircle2 className="h-4 w-4 fill-slate-950 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800 text-[11px]">
            <span className="font-bold text-white">⚡ Same-Day Installation Slot</span>
            <p className="text-slate-400 text-[10px]">
              Book before 12 PM for today's appointment
            </p>
          </div>
        </div>

        {/* 3-Point Checklist */}
        <div className="space-y-3">
          {checklist.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-950 border border-brand-red/50 text-brand-red shrink-0 mt-0.5">
                <CheckCircle2 className="h-3.5 w-3.5 fill-brand-red text-slate-950" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action & Hotline */}
        <div className="pt-2 space-y-3">
          <button
            onClick={onBookNow}
            className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-600 active:scale-[0.98] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-brand-red/30 transition-all group"
          >
            <span>BOOK NOW</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="text-center">
            <span className="text-[11px] text-slate-400">
              Direct Helpline:{" "}
              <a
                href="tel:+919065224224"
                className="font-bold text-brand-accent-green hover:underline"
              >
                +91 9065224224
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
