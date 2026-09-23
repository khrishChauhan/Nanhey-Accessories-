"use client";

import React from "react";
import {
  Award,
  Users,
  HeartHandshake,
  Percent,
  FileCheck,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function TrustBadgesBar() {
  const trustItems = [
    {
      title: "10+ Years Experience",
      desc: "Begusarai's Pioneer",
      icon: Award,
    },
    {
      title: "5000+ Happy Clients",
      desc: "Homes, Shops & Offices",
      icon: Users,
    },
    {
      title: "100% Satisfaction",
      desc: "Guaranteed Performance",
      icon: HeartHandshake,
    },
    {
      title: "Bulk Discounts",
      desc: "Contractors & Dealers",
      icon: Percent,
    },
    {
      title: "GST Invoice Available",
      desc: "100% Tax Compliant",
      icon: FileCheck,
    },
    {
      title: "AMC Services",
      desc: "Annual Maintenance",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-slate-900 border-t border-b border-slate-800 py-8 px-4 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-brand-red/60 hover:bg-slate-800/80 transition-all duration-200 group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all mb-2.5 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-xs font-black text-white group-hover:text-brand-red transition-colors leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5 leading-tight font-medium">
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
