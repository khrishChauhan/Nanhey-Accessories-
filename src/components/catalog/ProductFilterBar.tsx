"use client";

import React from "react";
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  Sparkles,
  Check,
} from "lucide-react";
import { CategoryType, BrandType, CATEGORIES_LIST } from "@/data/products";

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
  { id: "Hikvision", name: "Hikvision" },
  { id: "Dahua", name: "Dahua" },
  { id: "Seagate", name: "Seagate" },
  { id: "Western Digital", name: "Western Digital" },
  { id: "Nanhey Vision", name: "Nanhey Vision" },
];

export default function ProductFilterBar({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults,
  totalProducts,
}: ProductFilterBarProps) {
  const isFiltered =
    filters.category !== "all" ||
    filters.brand !== "all" ||
    filters.searchQuery.trim() !== "" ||
    filters.sortBy !== "featured" ||
    filters.onlyInStock;

  return (
    <div className="space-y-4 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm">
      {/* Top Row: Search Input + Sorting + Stock Toggle */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Search inside catalog */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by model, resolution, 4K, audio, PoE..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-slate-50 focus:bg-white focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 transition-all placeholder:text-slate-400"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: "" })}
              className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Right Controls: Sort Dropdown & In-Stock Pill */}
        <div className="flex flex-wrap items-center justify-between md:justify-end gap-2.5 w-full md:w-auto">
          {/* In-Stock Filter Toggle */}
          <button
            onClick={() => onFilterChange({ onlyInStock: !filters.onlyInStock })}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-colors ${
              filters.onlyInStock
                ? "bg-green-50 border-brand-accent-green text-emerald-700"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            <div
              className={`h-2 w-2 rounded-full ${
                filters.onlyInStock ? "bg-brand-accent-green" : "bg-slate-300"
              }`}
            />
            <span>In Stock Only</span>
          </button>

          {/* Sort Dropdown */}
          <div className="relative flex-1 sm:flex-none">
            <select
              value={filters.sortBy}
              onChange={(e) =>
                onFilterChange({
                  sortBy: e.target.value as FilterState["sortBy"],
                })
              }
              className="w-full appearance-none bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl pl-3.5 pr-8 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:border-brand-red cursor-pointer"
            >
              <option value="featured">Sort: Featured & Recommended</option>
              <option value="bestseller">Sort: Top Best Sellers</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Customer Rating (Highest)</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-2.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
          </div>

          {/* Clear Filters Reset */}
          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 text-xs font-bold text-brand-red hover:text-red-700 px-2 py-1 transition-colors"
            >
              <X className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs (Scrollable on mobile) */}
      <div className="border-t border-slate-100 pt-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES_LIST.map((cat) => {
            const isActive = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onFilterChange({ category: cat.id })}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                  isActive
                    ? "bg-brand-red text-white shadow-md shadow-brand-red/25"
                    : "bg-slate-100/80 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
          Brands:
        </span>
        {BRANDS.map((b) => {
          const isActive = filters.brand === b.id;
          return (
            <button
              key={b.id}
              onClick={() => onFilterChange({ brand: b.id })}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                isActive
                  ? "bg-slate-900 text-white font-bold"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
              }`}
            >
              {b.name}
            </button>
          );
        })}
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-slate-800">{totalResults}</span>
          <span>Security Products Found</span>
          {totalResults !== totalProducts && (
            <span className="text-slate-400">
              (Filtered from {totalProducts} total items)
            </span>
          )}
        </div>
        <span className="text-[11px] text-brand-accent-green font-bold">
          ● All Authentic & Brand Warranted
        </span>
      </div>
    </div>
  );
}
