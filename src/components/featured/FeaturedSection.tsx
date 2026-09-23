"use client";

import React from "react";
import PackageBuilder from "./PackageBuilder";
import BestSellingProducts, { ProductItem } from "./BestSellingProducts";
import InstallationBanner from "./InstallationBanner";

interface FeaturedSectionProps {
  onBookInstallation: () => void;
  onAddToCart?: (product: ProductItem) => void;
  onBuildPackage?: (pkg: {
    cameras: number;
    storage: string;
    audio: string;
    price: number;
  }) => void;
}

export default function FeaturedSection({
  onBookInstallation,
  onAddToCart,
  onBuildPackage,
}: FeaturedSectionProps) {
  return (
    <section className="py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider mb-2">
            <span>Security Engineering & Retail</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            CUSTOM PACKAGES, TOP PRODUCTS & EXPERT INSTALLATION
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Choose a readymade best-seller or use our intelligent estimator to configure a custom surveillance system tailored to your budget and layout.
          </p>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Column 1: BUILD YOUR CCTV PACKAGE (4 cols) */}
          <div className="lg:col-span-4 flex">
            <PackageBuilder onBuildPackage={onBuildPackage} />
          </div>

          {/* Column 2: BEST SELLING PRODUCTS (5 cols) */}
          <div className="lg:col-span-5 flex">
            <BestSellingProducts onAddToCart={onAddToCart} />
          </div>

          {/* Column 3: PROFESSIONAL INSTALLATION SERVICE (3 cols) */}
          <div className="lg:col-span-3 flex">
            <InstallationBanner onBookNow={onBookInstallation} />
          </div>
        </div>
      </div>
    </section>
  );
}
