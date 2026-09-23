"use client";

import React from "react";
import { Search, X, ChevronDown } from "lucide-react";
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
    <div className="space-y-3.5 bg-white rounded-lg border border-zinc-200/80 p-4 shadow-sm">
      {/* Top Row: Search Input + Sorting + Stock Toggle */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Search inside catalog */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search model, resolution, 4K, audio, PoE..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full pl-9 pr-8 py-2 rounded-md border border-zinc-200 text-xs bg-zinc-50/60 focus:bg-white focus:border-zinc-400 focus:outline-none transition-colors placeholder:text-zinc-400"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: "" })}
              className="absolute right-2.5 top-2.5 text-zinc-400 hover:text-zinc-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Right Controls: Sort Dropdown & In-Stock Filter */}
        <div className="flex flex-wrap items-center justify-between md:justify-end gap-2 w-full md:w-auto">
          {/* In-Stock Filter Toggle */}
          <button
            onClick={() => onFilterChange({ onlyInStock: !filters.onlyInStock })}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              filters.onlyInStock
                ? "bg-zinc-900 text-white border-zinc-900"
                : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300"
            }`}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full ${
                filters.onlyInStock ? "bg-emerald-400" : "bg-zinc-300"
              }`}
            />
            <span>In Stock</span>
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
              className="w-full appearance-none bg-white border border-zinc-200 hover:border-zinc-300 rounded-md pl-3 pr-7 py-1.5 text-xs font-medium text-zinc-700 focus:outline-none focus:border-zinc-400 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="bestseller">Best Sellers</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <ChevronDown className="absolute right-2 top-2 h-3.5 w-3.5 text-zinc-400 pointer-events-none" />
          </div>

          {/* Clear Filters Reset */}
          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 px-2 py-1 transition-colors"
            >
              <X className="h-3 w-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs (Minimalist Horizontal Row) */}
      <div className="border-t border-zinc-100 pt-2.5">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES_LIST.map((cat) => {
            const isActive = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onFilterChange({ category: cat.id })}
                className={`whitespace-nowrap px-3 py-1 rounded text-xs transition-colors ${
                  isActive
                    ? "bg-zinc-900 text-white font-medium"
                    : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Filter Row */}
      <div className="flex flex-wrap items-center gap-1 pt-0.5">
        <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mr-1">
          Brand:
        </span>
        {BRANDS.map((b) => {
          const isActive = filters.brand === b.id;
          return (
            <button
              key={b.id}
              onClick={() => onFilterChange({ brand: b.id })}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                isActive
                  ? "bg-zinc-200 text-zinc-900 font-semibold"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              {b.name}
            </button>
          );
        })}
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-zinc-400 pt-1 border-t border-zinc-100">
        <span>
          Showing <span className="font-semibold text-zinc-700">{totalResults}</span> of {totalProducts} products
        </span>
        <span className="text-[11px] text-zinc-500">
          GST Invoices & Warranty Included
        </span>
      </div>
    </div>
  );
}
