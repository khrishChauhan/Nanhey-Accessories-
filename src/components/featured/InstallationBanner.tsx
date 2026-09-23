"use client";

import React from "react";
import { Wrench, CheckCircle2, ArrowRight } from "lucide-react";

interface InstallationBannerProps {
  onBookNow: () => void;
}

export default function InstallationBanner({
  onBookNow,
}: InstallationBannerProps) {
  const checklist = [
    {
      title: "Certified Engineers",
      desc: "Experienced technicians with 10+ years in Begusarai",
    },
    {
      title: "Concealed Wiring",
      desc: "Clean conduit casing with zero exposed cabling",
    },
    {
      title: "Handover & Training",
      desc: "Complete mobile app pairing and client demonstration",
    },
  ];

  return (
    <div
      id="installation"
      className="flex flex-col h-full rounded-lg bg-[#09090B] text-white border border-zinc-800 p-6 shadow-sm justify-between space-y-6"
    >
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Doorstep Service
          </span>
          <span className="text-[11px] font-medium text-zinc-400">
            Same-Day Slots
          </span>
        </div>
        <h3 className="text-lg font-bold text-white tracking-tight">
          Professional Installation
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
          Standardized mounting, testing, and maintenance by certified technicians.
        </p>
      </div>

      {/* 3-Point Checklist */}
      <div className="space-y-3.5 my-auto">
        {checklist.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold text-white leading-tight">
                {item.title}
              </h4>
              <p className="text-[11px] text-zinc-400 leading-tight mt-0.5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action & Hotline */}
      <div className="pt-3 border-t border-zinc-800/80 space-y-3">
        <button
          onClick={onBookNow}
          className="w-full flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs py-3 rounded-lg transition-colors"
        >
          <span>Schedule Technician</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

        <div className="text-center">
          <span className="text-[11px] text-zinc-400">
            Direct Line:{" "}
            <a
              href="tel:+919065224224"
              className="text-zinc-200 hover:text-white underline underline-offset-4"
            >
              +91 9065224224
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
