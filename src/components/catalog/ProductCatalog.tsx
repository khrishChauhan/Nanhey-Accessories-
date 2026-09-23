"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, Product } from "@/data/products";
import ProductFilterBar, { FilterState } from "./ProductFilterBar";
import CatalogProductCard from "./CatalogProductCard";
import { SlidersHorizontal, RefreshCw, ShieldCheck } from "lucide-react";

interface ProductCatalogProps {
  initialCategory?: string;
}

export default function ProductCatalog({ initialCategory = "all" }: ProductCatalogProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    brand: "all",
    searchQuery: "",
    sortBy: "featured",
    onlyInStock: false,
  });

  const [visibleCount, setVisibleCount] = useState<number>(12);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setVisibleCount(12); // Reset pagination on filter change
  };

  const handleResetFilters = () => {
    setFilters({
      category: "all",
      brand: "all",
      searchQuery: "",
      sortBy: "featured",
      onlyInStock: false,
    });
    setVisibleCount(12);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (filters.category !== "all" && product.category !== filters.category) {
        return false;
      }

      // Brand filter
      if (filters.brand !== "all" && product.brand !== filters.brand) {
        return false;
      }

      // Stock filter
      if (filters.onlyInStock && !product.inStock) {
        return false;
      }

      // Search Query filter
      if (filters.searchQuery.trim() !== "") {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCat = product.categoryName.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesFeatures = product.features.some((f) =>
          f.toLowerCase().includes(query)
        );
        const matchesSpecs =
          product.specs &&
          Object.values(product.specs).some((val) =>
            val?.toLowerCase().includes(query)
          );

        if (
          !matchesName &&
          !matchesBrand &&
          !matchesCat &&
          !matchesDesc &&
          !matchesFeatures &&
          !matchesSpecs
        ) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === "price-asc") {
        return a.price - b.price;
      }
      if (filters.sortBy === "price-desc") {
        return b.price - a.price;
      }
      if (filters.sortBy === "rating") {
        return b.rating - a.rating;
      }
      if (filters.sortBy === "bestseller") {
        return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      }
      // "featured" default
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [filters]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  return (
    <section id="catalog" className="py-14 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider mb-2">
            <span>Genuine Begusarai Inventory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            FULL SECURITY HARDWARE CATALOG
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Browse 50+ authentic CCTV cameras, AI network devices, digital recorders, surveillance storage drives, and installation hardware.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8">
          <ProductFilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            totalResults={filteredProducts.length}
            totalProducts={PRODUCTS.length}
          />
        </div>

        {/* Product Cards Grid */}
        {displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {displayedProducts.map((product) => (
                <CatalogProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Show More Pagination Button */}
            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 shadow-sm transition-all"
                >
                  <RefreshCw className="h-4 w-4 text-brand-red" />
                  <span>
                    Show More ({filteredProducts.length - visibleCount} Remaining)
                  </span>
                </button>
              </div>
            )}
          </>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 mx-auto mb-4">
              <SlidersHorizontal className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              No matching security products found
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-5">
              Try modifying your search query or reset your brand/category filters to view our full inventory.
            </p>
            <button
              onClick={handleResetFilters}
              className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl shadow-lg shadow-brand-red/25 hover:bg-brand-red-600 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
