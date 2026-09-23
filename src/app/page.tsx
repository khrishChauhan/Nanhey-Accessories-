"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import ValuePropositionStrip from "@/components/hero/ValuePropositionStrip";
import CategoryGrid from "@/components/category/CategoryGrid";
import FeaturedSection from "@/components/featured/FeaturedSection";
import { ProductItem } from "@/components/featured/BestSellingProducts";
import InstallationModal from "@/components/modal/InstallationModal";

export default function HomePage() {
  const [isInstallationModalOpen, setIsInstallationModalOpen] = useState(false);
  const [selectedPackageText, setSelectedPackageText] = useState<string>("");
  const [cartCount, setCartCount] = useState<number>(2);
  const [cartTotal, setCartTotal] = useState<string>("₹4,498");

  const handleAddToCart = (product: ProductItem) => {
    setCartCount((prev) => prev + 1);
  };

  const handleBuildPackage = (pkg: {
    cameras: number;
    storage: string;
    audio: string;
    price: number;
  }) => {
    setSelectedPackageText(
      `${pkg.cameras} Cameras Kit (${pkg.storage}, Audio: ${pkg.audio}) - Est. ₹${pkg.price.toLocaleString("en-IN")}`
    );
    setIsInstallationModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Global Header */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={3}
      />

      {/* Hero Section */}
      <HeroSection
        onRequestQuote={() => {
          setSelectedPackageText("Custom CCTV Consultation");
          setIsInstallationModalOpen(true);
        }}
      />

      {/* Value Proposition Strip */}
      <ValuePropositionStrip />

      {/* Shop By Category Grid */}
      <CategoryGrid />

      {/* 3-Column Featured Section */}
      <FeaturedSection
        onBookInstallation={() => {
          setSelectedPackageText("Standard CCTV Installation Service");
          setIsInstallationModalOpen(true);
        }}
        onAddToCart={handleAddToCart}
        onBuildPackage={handleBuildPackage}
      />

      {/* Installation & Booking Modal */}
      <InstallationModal
        isOpen={isInstallationModalOpen}
        onClose={() => setIsInstallationModalOpen(false)}
        defaultPackage={selectedPackageText}
      />
    </main>
  );
}
