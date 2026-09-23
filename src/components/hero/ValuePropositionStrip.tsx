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
    <div className="bg-white border-b border-zinc-200/80 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
          {/* 4 Standard Minimalist Items */}
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 py-1"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-100 text-zinc-700 shrink-0">
                  <Icon className="h-4 w-4 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-0.5 leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 5th Column: Minimalist WhatsApp Inquiry Link */}
          <a
            href="https://wa.me/919065224224?text=Hi%20Nanhey%20Accessories,%20I%20want%20to%20place%20an%20order%20or%20inquire%20about%20CCTV%20cameras."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 text-zinc-800 transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="h-4 w-4 text-zinc-600" />
              <div>
                <p className="text-[10px] uppercase font-bold text-zinc-400">
                  Instant Support
                </p>
                <p className="text-xs font-semibold text-zinc-900">
                  WhatsApp: 9065224224
                </p>
              </div>
            </div>
            <ArrowRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}
