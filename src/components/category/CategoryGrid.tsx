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
  Sparkles,
} from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  count: string;
  icon: React.ElementType;
  badge?: string;
  popular?: boolean;
}

interface CategoryGridProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  const categories: CategoryItem[] = [
    {
      id: "hd-camera",
      name: "HD CCTV Camera",
      count: "48+ Models",
      icon: Video,
      badge: "Popular",
      popular: true,
    },
    {
      id: "ip-camera",
      name: "IP Camera",
      count: "35+ Models",
      icon: Shield,
      badge: "4K UHD",
    },
    {
      id: "wifi-camera",
      name: "WiFi Camera",
      count: "26+ Models",
      icon: Wifi,
      badge: "Smart Home",
      popular: true,
    },
    {
      id: "ptz-camera",
      name: "PTZ Camera",
      count: "15+ Models",
      icon: Cctv,
      badge: "360° View",
    },
    {
      id: "dvr",
      name: "DVR",
      count: "20+ Models",
      icon: Cpu,
      badge: "Analog",
    },
    {
      id: "nvr",
      name: "NVR",
      count: "18+ Models",
      icon: Database,
      badge: "Network",
    },
    {
      id: "hard-disk",
      name: "Hard Disk",
      count: "12+ Models",
      icon: HardDrive,
      badge: "Surveillance",
      popular: true,
    },
    {
      id: "accessories",
      name: "Accessories",
      count: "65+ Items",
      icon: SlidersHorizontal,
      badge: "Cables & SMPS",
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
    <section id="categories" className="py-14 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-9 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-ruby animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-wider text-brand-ruby">
                Explore Security Solutions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              SHOP BY CATEGORY
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Filter our live inventory of 50+ genuine CCTV products with authorized brand warranty and local Begusarai support.
          </p>
        </div>

        {/* 9 Cards Grid (8 Categories + 1 View All Card) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.id}
                href="#catalog"
                onClick={(e) => handleCategoryClick(e, cat.id)}
                className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-ruby/50 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Badge */}
                {cat.badge && (
                  <span
                    className={`absolute top-2.5 right-2.5 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      cat.popular
                        ? "bg-red-50 text-brand-ruby border border-red-200"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}

                {/* Icon Container with Tech Glow */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-800 border border-slate-100 group-hover:bg-brand-ruby group-hover:text-white group-hover:shadow-ruby transition-all duration-300 mt-2 mb-3">
                  <Icon className="h-8 w-8 stroke-[1.6]" />
                </div>

                {/* Category Name & Count */}
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-brand-ruby transition-colors line-clamp-1">
                  {cat.name}
                </h3>
                <span className="text-[11px] font-medium text-slate-400 mt-1">
                  {cat.count}
                </span>

                {/* Hover arrow indicator */}
                <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-brand-ruby opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Filter Catalog</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            );
          })}

          {/* 9th Card: Red Bordered "VIEW ALL Categories" Card */}
          <a
            href="#catalog"
            onClick={(e) => handleCategoryClick(e, "all")}
            className="group relative flex flex-col items-center justify-center text-center p-5 rounded-2xl bg-gradient-to-br from-red-50 via-white to-red-100/30 border-2 border-dashed border-brand-ruby/60 hover:border-solid hover:bg-brand-ruby shadow-sm hover:shadow-ruby transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-ruby shadow-sm group-hover:bg-white group-hover:text-brand-ruby group-hover:scale-110 transition-all mb-3 border border-red-100">
              <Sparkles className="h-7 w-7" />
            </div>

            <h3 className="font-black text-sm text-brand-ruby group-hover:text-white transition-colors">
              VIEW ALL
            </h3>
            <span className="text-xs font-bold text-slate-700 group-hover:text-white/90 transition-colors uppercase tracking-wider">
              50+ Products
            </span>
            <p className="text-[10px] text-slate-500 group-hover:text-white/80 mt-1">
              Explore Live Stock
            </p>

            <div className="mt-3 flex items-center gap-1 text-xs font-extrabold text-brand-ruby group-hover:text-white transition-colors">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
