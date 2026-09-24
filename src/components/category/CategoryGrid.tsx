"use client";

import React from "react";
import {
  Video,
  Shield,
  Wifi,
  Cctv,
  HardDrive,
  Cpu,
  Database,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  count: string;
  icon: React.ElementType;
}

interface CategoryGridProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  const categories: CategoryItem[] = [
    { id: "hd-camera", name: "HD Cameras", count: "48 Models", icon: Video },
    { id: "ip-camera", name: "IP & Network", count: "35 Models", icon: Shield },
    { id: "wifi-camera", name: "Smart WiFi", count: "26 Models", icon: Wifi },
    { id: "ptz-camera", name: "PTZ Dome", count: "15 Models", icon: Cctv },
    { id: "dvr", name: "DVR Recorders", count: "20 Models", icon: Cpu },
    { id: "nvr", name: "NVR Recorders", count: "18 Models", icon: Database },
    { id: "hard-disk", name: "Surveillance HDD", count: "12 Models", icon: HardDrive },
    { id: "accessories", name: "Cables & SMPS", count: "65 Items", icon: SlidersHorizontal },
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
    <section id="categories" className="py-16 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
              Category Directory
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
              Hardware Categories
            </h2>
          </div>
          <p className="text-xs text-zinc-500 max-w-sm">
            Select a category to filter live inventory at the Begusarai showroom.
          </p>
        </div>

        {/* 9 Clean Architectural Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href="#catalog"
                onClick={(e) => handleCategoryClick(e, cat.id)}
                className="group flex flex-col justify-between p-4 rounded-lg bg-zinc-50/70 hover:bg-white border border-zinc-200/70 hover:border-zinc-300 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded bg-white text-zinc-600 border border-zinc-200/60 group-hover:text-zinc-950 transition-colors">
                    <Icon className="h-4 w-4 stroke-[1.6]" />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-medium tabular-nums">
                    {cat.count}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-xs text-zinc-900 group-hover:text-zinc-950 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-zinc-400 group-hover:text-zinc-600 flex items-center gap-1 mt-1 transition-colors">
                    <span>View all</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            );
          })}

          {/* 9th Card: View All */}
          <a
            href="#catalog"
            onClick={(e) => handleCategoryClick(e, "all")}
            className="col-span-2 sm:col-span-1 group flex flex-col justify-between p-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                Full Stock
              </span>
              <span className="text-[10px] text-zinc-400 tabular-nums">50+</span>
            </div>

            <div>
              <h3 className="font-semibold text-xs text-white">
                All Products
              </h3>
              <span className="text-[11px] text-zinc-400 group-hover:text-white flex items-center gap-1 mt-1 transition-colors">
                <span>Open Catalog</span>
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
