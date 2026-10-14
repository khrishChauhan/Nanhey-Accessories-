"use client";

import React, { useRef, useEffect } from "react";
import { Search, X, ChevronDown, ShieldCheck } from "lucide-react";
import { CATEGORIES_LIST } from "@/data/products";

export interface FilterState {
  category: string;
  brand: string;
  searchQuery: string;
  sortBy: "featured" | "price-asc" | "price-desc" | "rating" | "bestseller";
  onlyInStock: boolean;
}

interface ProductFilterBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  totalResults: number;
  totalProducts: number;
}

const BRANDS: { id: string; name: string }[] = [
  { id: "all", name: "All Brands" },
  { id: "CP Plus", name: "CP Plus" },
];

export default function ProductFilterBar({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults,
  totalProducts,
}: ProductFilterBarProps) {
  const activePillRef = useRef<HTMLButtonElement | null>(null);

  const isFiltered =
    filters.category !== "all" ||
    filters.brand !== "all" ||
    filters.searchQuery.trim() !== "" ||
    filters.sortBy !== "featured" ||
    filters.onlyInStock;

  // Auto-scroll the active pill smoothly into view when category changes
  useEffect(() => {
    if (activePillRef.current) {
      activePillRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [filters.category]);

  return (
    <div className="bg-white rounded-2xl border border-zinc-200/90 p-3.5 sm:p-4.5 shadow-xs space-y-3">
      {/* Row 1: Search & Quick Controls (Mobile: Stacked, Desktop: Row) */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
        {/* Search inside catalog */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search 65+ models, 4K, audio, PoE..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full pl-9 pr-9 py-2 rounded-xl border border-zinc-200 text-xs sm:text-sm bg-zinc-50/70 focus:bg-white focus:border-zinc-400 focus:outline-none transition-all placeholder:text-zinc-400"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: "" })}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/60 rounded-full transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Quick Filters Group: In-Stock Toggle, Brand, Sort, Reset */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shrink-0">
          {/* In-Stock Filter Toggle */}
          <button
            onClick={() => onFilterChange({ onlyInStock: !filters.onlyInStock })}
            className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              filters.onlyInStock
                ? "bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs"
                : "bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border-zinc-200/90"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full transition-colors ${
                filters.onlyInStock ? "bg-emerald-500 animate-pulse" : "bg-zinc-300"
              }`}
            />
            <span className="whitespace-nowrap">In Stock</span>
          </button>

          {/* Brand Segmented Control */}
          <div className="shrink-0 inline-flex items-center rounded-xl bg-zinc-100 p-0.5 border border-zinc-200/80">
            {BRANDS.map((b) => {
              const isActive = filters.brand === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => onFilterChange({ brand: b.id })}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-white text-zinc-950 shadow-xs"
                      : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {b.name}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="relative shrink-0">
            <select
              value={filters.sortBy}
              onChange={(e) =>
                onFilterChange({
                  sortBy: e.target.value as FilterState["sortBy"],
                })
              }
              aria-label="Sort products by"
              className="appearance-none bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/90 rounded-xl pl-3 pr-7 py-1.5 text-xs font-semibold text-zinc-700 focus:outline-none focus:border-zinc-400 cursor-pointer transition-colors"
            >
              <option value="featured">Sort: Featured</option>
              <option value="bestseller">Sort: Best Sellers</option>
              <option value="price-asc">Sort: Price Low → High</option>
              <option value="price-desc">Sort: Price High → Low</option>
              <option value="rating">Sort: Highest Rated</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400 pointer-events-none" />
          </div>

          {/* Reset Filters Button */}
          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="shrink-0 flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-2.5 py-1.5 rounded-xl transition-colors whitespace-nowrap"
            >
              <X className="h-3 w-3 stroke-[2.5]" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Row 2: Category Pills Carousel (Modern Mobile-First Touch Scroll) */}
      <div className="relative border-t border-zinc-100 pt-3">
        <div className="flex items-center gap-2 overflow-x-auto py-1 scroll-smooth no-scrollbar [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES_LIST.map((cat) => {
            const isActive = filters.category === cat.id;
            const match = cat.name.match(/^(.*?)(?:\s*\((\d+)\))?$/);
            const label = match ? match[1] : cat.name;
            const count = match ? match[2] : null;

            return (
              <button
                key={cat.id}
                ref={isActive ? activePillRef : null}
                onClick={() => onFilterChange({ category: cat.id })}
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs transition-all ${
                  isActive
                    ? "bg-zinc-900 text-white font-semibold shadow-xs ring-2 ring-zinc-900/10"
                    : "bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border border-zinc-200/75 hover:border-zinc-300 font-medium"
                }`}
              >
                <span className="whitespace-nowrap">{label}</span>
                {count && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold tabular-nums ${
                      isActive
                        ? "bg-zinc-800 text-zinc-200"
                        : "bg-white text-zinc-500 border border-zinc-200/80 shadow-2xs"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Subtle Right-Side Gradient Hint on Mobile */}
        <div className="pointer-events-none absolute right-0 top-3 bottom-1 w-6 bg-gradient-to-l from-white to-transparent opacity-90 sm:hidden" />
      </div>

      {/* Row 3: Product Count & Trust Assurance Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pt-2.5 border-t border-zinc-100 text-xs">
        <div className="flex items-center gap-2 text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span>
            Showing <strong className="font-bold text-zinc-900">{totalResults}</strong> of {totalProducts} verified products
          </span>
          {isFiltered && (
            <span className="text-[10px] font-semibold text-red-600 bg-red-50 border border-red-100 px-1.5 py-0.5 rounded-md">
              Filtered
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
          <span>GST Tax Invoices & Official Warranty Included</span>
        </div>
      </div>
    </div>
  );
}
