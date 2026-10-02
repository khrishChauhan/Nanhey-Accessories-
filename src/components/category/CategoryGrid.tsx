"use client";

import React from "react";
import { Video, Cctv, ArrowRight, Shield } from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  count: string;
  tag: string;
  description: string;
  icon: React.ElementType;
  priceStart: string;
}

interface CategoryGridProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  const categories: CategoryItem[] = [
    {
      id: "ip-camera",
      name: "CP PLUS IP STQC Series",
      count: "16 Models",
      tag: "STQC Certified",
      description: "2MP Diamond · 4MP WDR · 6MP 3K — H.265+ PoE IP Cameras, Two-Way Audio, 60M IR, Tender Ready",
      icon: Shield,
      priceStart: "Starting from ₹4,170",
    },
    {
      id: "cp-2.4mp",
      name: "CP PLUS 2.4MP Analog",
      count: "4 Models",
      tag: "1080P Full HD",
      description: "40M & 20M Smart Dual IR Domes & Bullets with Two-Way Coaxial Audio",
      icon: Video,
      priceStart: "Starting from ₹1,674",
    },
    {
      id: "cp-5mp",
      name: "CP PLUS 5MP Analog",
      count: "6 Models",
      tag: "Ultra HD 5MP",
      description: "5MP Ultra HD — Dual IR, Guard+ 24/7 Full Color Night Vision with Audio",
      icon: Cctv,
      priceStart: "Starting from ₹1,768",
    },
  ];

  const handleCategoryClick = (e: React.MouseEvent, catId: string) => {
    if (onSelectCategory) {
      e.preventDefault();
      onSelectCategory(catId);
      const el = document.getElementById("catalog");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="categories" className="py-14 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-red-600 block mb-1">
              Official Dealer Inventory
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              CP PLUS Camera Series
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => handleCategoryClick(e, "all")}
              className="text-xs font-semibold text-zinc-700 hover:text-red-600 bg-zinc-100 hover:bg-red-50 border border-zinc-200 hover:border-red-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>View All 26 Cameras</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href="#catalog"
                onClick={(e) => handleCategoryClick(e, cat.id)}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-50/70 hover:bg-white border border-zinc-200/80 hover:border-red-200 hover:shadow-md transition-all cursor-pointer overflow-hidden"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-zinc-800 border border-zinc-200/70 group-hover:bg-red-50 group-hover:text-red-600 group-hover:border-red-200 transition-colors shadow-xs">
                      <Icon className="h-6 w-6 stroke-[1.75]" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                        {cat.tag}
                      </span>
                      <span className="text-[11px] text-zinc-500 font-medium tabular-nums">
                        {cat.count}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-zinc-950 group-hover:text-red-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-900">
                    {cat.priceStart}
                  </span>
                  <span className="text-xs font-semibold text-red-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Explore Models</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
