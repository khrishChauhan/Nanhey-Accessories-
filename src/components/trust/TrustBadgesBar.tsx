"use client";

import React from "react";
import {
  Award,
  Users,
  HeartHandshake,
  Percent,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

export default function TrustBadgesBar() {
  const trustItems = [
    {
      title: "10+ Years Heritage",
      desc: "Begusarai Security Leader",
      icon: Award,
    },
    {
      title: "5,000+ Clients",
      desc: "Homes, Retail & Offices",
      icon: Users,
    },
    {
      title: "100% Genuine",
      desc: "Authorized Brand Stock",
      icon: HeartHandshake,
    },
    {
      title: "Wholesale Margin",
      desc: "Contractors & Integrators",
      icon: Percent,
    },
    {
      title: "GST Tax Invoice",
      desc: "100% ITC Input Credit",
      icon: FileCheck,
    },
    {
      title: "Doorstep Support",
      desc: "Local Begusarai Care",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-white border-t border-b border-zinc-200/80 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 rounded-lg border border-zinc-100 bg-zinc-50/50 hover:border-zinc-200 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded bg-white text-zinc-700 border border-zinc-200/60 mb-2.5">
                  <Icon className="h-4 w-4 stroke-[1.6]" />
                </div>
                <h4 className="text-xs font-semibold text-zinc-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-zinc-400 mt-0.5 leading-tight font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
