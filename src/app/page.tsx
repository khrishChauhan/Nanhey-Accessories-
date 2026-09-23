"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import ValuePropositionStrip from "@/components/hero/ValuePropositionStrip";
import CategoryGrid from "@/components/category/CategoryGrid";
import FeaturedSection from "@/components/featured/FeaturedSection";
import { ProductItem } from "@/components/featured/BestSellingProducts";
import TrustBadgesBar from "@/components/trust/TrustBadgesBar";
import Footer from "@/components/footer/Footer";
import MobileBottomBar from "@/components/mobile/MobileBottomBar";
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

  const handleOpenGeneralInstallation = () => {
    setSelectedPackageText("Standard CCTV Installation Service");
    setIsInstallationModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col antialiased">
      {/* 1. Global Navigation Header */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={3}
      />

      {/* 2. Hero Security Banner */}
      <HeroSection
        onRequestQuote={() => {
          setSelectedPackageText("Custom CCTV Consultation");
          setIsInstallationModalOpen(true);
        }}
      />

      {/* 3. Value Proposition Icons Bar */}
      <ValuePropositionStrip />

      {/* 4. Shop By Category Grid (8 Cards + View All) */}
      <CategoryGrid />

      {/* 5. 3-Column Featured Section (Builder + Best Sellers + Installation) */}
      <FeaturedSection
        onBookInstallation={handleOpenGeneralInstallation}
        onAddToCart={handleAddToCart}
        onBuildPackage={handleBuildPackage}
      />

      {/* 6. Trust Badges Section */}
      <TrustBadgesBar />

      {/* 7. Comprehensive Footer */}
      <Footer onRequestInstallation={handleOpenGeneralInstallation} />

      {/* 8. Fixed Mobile Quick Bottom Bar */}
      <MobileBottomBar onRequestInstallation={handleOpenGeneralInstallation} />

      {/* 9. Interactive Technician Booking Modal */}
      <InstallationModal
        isOpen={isInstallationModalOpen}
        onClose={() => setIsInstallationModalOpen(false)}
        defaultPackage={selectedPackageText}
      />
    </main>
  );
}
