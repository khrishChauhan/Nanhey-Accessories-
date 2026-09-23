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
      desc: "Begusarai's Security Leader",
      icon: Award,
    },
    {
      title: "5000+ Installations",
      desc: "Homes, Shops & Factories",
      icon: Users,
    },
    {
      title: "100% Satisfaction",
      desc: "Guaranteed Performance",
      icon: HeartHandshake,
    },
    {
      title: "B2B Wholesale Margins",
      desc: "Contractors & Integrators",
      icon: Percent,
    },
    {
      title: "GST ITC Compliant",
      desc: "100% Tax Invoices",
      icon: FileCheck,
    },
    {
      title: "Doorstep AMC & Care",
      desc: "Begusarai Rapid Support",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#090D14] border-t border-b border-white/10 py-10 px-4 text-white relative overflow-hidden">
      {/* Ambient Ruby Beams */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-ruby/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-brand-ruby/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-ruby/50 hover:bg-white/10 hover:shadow-ruby hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-ruby/15 text-brand-ruby-glow group-hover:bg-brand-ruby group-hover:text-white group-hover:shadow-ruby transition-all duration-300 mb-3 shadow-inner">
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>
                <h4 className="text-xs font-black text-white group-hover:text-brand-ruby-glow transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-slate-400 mt-1 leading-tight font-medium">
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
