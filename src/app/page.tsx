"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import ValuePropositionStrip from "@/components/hero/ValuePropositionStrip";
import CategoryGrid from "@/components/category/CategoryGrid";
import ProductCatalog from "@/components/catalog/ProductCatalog";
import FeaturedSection from "@/components/featured/FeaturedSection";
import TrustBadgesBar from "@/components/trust/TrustBadgesBar";
import Footer from "@/components/footer/Footer";
import MobileBottomBar from "@/components/mobile/MobileBottomBar";
import InstallationModal from "@/components/modal/InstallationModal";
import CartDrawer from "@/components/cart/CartDrawer";
import ProductQuickViewModal from "@/components/product/ProductQuickViewModal";

export default function HomePage() {
  const [isInstallationModalOpen, setIsInstallationModalOpen] = useState(false);
  const [selectedPackageText, setSelectedPackageText] = useState<string>("");
  const [activeCatalogCategory, setActiveCatalogCategory] = useState<string>("all");

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

  const handleOpenGSTQuotation = () => {
    setSelectedPackageText("Official GST Tax Invoice & Quotation Request");
    setIsInstallationModalOpen(true);
  };

  const handleSelectCategoryFromGrid = (categoryId: string) => {
    setActiveCatalogCategory(categoryId);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col antialiased">
      {/* 1. Global Navigation Header (Dynamic Cart & Wishlist via ShopContext) */}
      <Header />

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
      <CategoryGrid onSelectCategory={handleSelectCategoryFromGrid} />

      {/* 5. Full 50+ CCTV Interactive Product Catalog Explorer */}
      <ProductCatalog
        key={activeCatalogCategory}
        initialCategory={activeCatalogCategory}
      />

      {/* 6. 3-Column Featured Section (Builder + Best Sellers + Installation) */}
      <FeaturedSection
        onBookInstallation={handleOpenGeneralInstallation}
        onBuildPackage={handleBuildPackage}
      />

      {/* 7. Trust Badges Section */}
      <TrustBadgesBar />

      {/* 8. Comprehensive Showroom Footer */}
      <Footer onRequestInstallation={handleOpenGeneralInstallation} />

      {/* 9. Fixed Mobile Quick Bottom Bar */}
      <MobileBottomBar onRequestInstallation={handleOpenGeneralInstallation} />

      {/* 10. Slide-Over Cart Drawer with GST & WhatsApp Order Generator */}
      <CartDrawer onRequestGSTQuotation={handleOpenGSTQuotation} />

      {/* 11. Product Quick View Specifications Modal */}
      <ProductQuickViewModal />

      {/* 12. Interactive Technician & Lead Capture Modal */}
      <InstallationModal
        isOpen={isInstallationModalOpen}
        onClose={() => setIsInstallationModalOpen(false)}
        defaultPackage={selectedPackageText}
      />
    </main>
  );
}
