"use client";

import React from "react";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ValuePropositionStrip() {
  const { t } = useLanguage();

  const valueProps = [
    {
      title: "Direct Showroom Dispatch",
      subtitle: "Begusarai store inventory",
      icon: Truck,
    },
    {
      title: "Certified Hardware",
      subtitle: "100% genuine warranty",
      icon: ShieldCheck,
    },
    {
      title: "GST Tax Invoice",
      subtitle: "Full ITC input credit",
      icon: RotateCcw,
    },
    {
      title: "Local Engineers",
      subtitle: "Doorstep maintenance & care",
      icon: Headphones,
    },
  ];

  return (
    <div className="bg-white border-b border-zinc-200/80 py-5 sm:py-6 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Grid: 2 columns on mobile, 5 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 items-stretch">
          {/* 4 Items arranged in 2x2 Grid on Mobile */}
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl border border-zinc-100 bg-zinc-50/70 hover:bg-white hover:border-zinc-200 transition-all group"
              >
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-red-50 text-red-600 border border-red-100/80 shrink-0 group-hover:scale-105 group-hover:bg-red-100/80 transition-all">
                  <Icon className="h-4 w-4 stroke-[1.75]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold text-zinc-900 group-hover:text-red-600 transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-0.5 leading-tight truncate">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 5th Item: Instant Support WhatsApp Card (Full width on mobile col-span-2, 5th col on desktop) */}
          <a
            href="https://wa.me/919065224224?text=Hi%20Nanhey%20Accessories,%20I%20want%20to%20place%20an%20order%20or%20inquire%20about%20CCTV%20cameras."
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 lg:col-span-1 flex items-center justify-between p-3 rounded-xl bg-zinc-50 hover:bg-red-50/30 border border-zinc-200/80 hover:border-red-300 text-zinc-800 transition-colors group mt-1 lg:mt-0"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/60 shrink-0">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] uppercase font-bold text-red-600 tracking-wider">
                  Instant Support
                </p>
                <p className="text-[11px] sm:text-xs font-bold text-zinc-900 group-hover:text-red-600 transition-colors truncate">
                  WhatsApp: 9065224224
                </p>
              </div>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
