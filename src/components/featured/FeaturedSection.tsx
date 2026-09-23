"use client";

import React from "react";
import PackageBuilder from "./PackageBuilder";
import BestSellingProducts from "./BestSellingProducts";
import InstallationBanner from "./InstallationBanner";

interface FeaturedSectionProps {
  onBookInstallation: () => void;
  onBuildPackage?: (pkg: {
    cameras: number;
    storage: string;
    audio: string;
    price: number;
  }) => void;
}

export default function FeaturedSection({
  onBookInstallation,
  onBuildPackage,
}: FeaturedSectionProps) {
  return (
    <section className="py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
            System Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
            Configured Packages & Installation
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Choose verified best-sellers or use our estimator to configure a custom system for your property.
          </p>
        </div>

        {/* 3-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Column 1: Package Builder (4 cols) */}
          <div className="lg:col-span-4 flex">
            <PackageBuilder onBuildPackage={onBuildPackage} />
          </div>

          {/* Column 2: Best Selling Equipment (5 cols) */}
          <div className="lg:col-span-5 flex">
            <BestSellingProducts />
          </div>

          {/* Column 3: Installation Services (3 cols) */}
          <div className="lg:col-span-3 flex">
            <InstallationBanner onBookNow={onBookInstallation} />
          </div>
        </div>
      </div>
    </section>
  );
}
