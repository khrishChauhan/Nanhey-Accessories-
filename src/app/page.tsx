"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import ValuePropositionStrip from "@/components/hero/ValuePropositionStrip";
import InstallationModal from "@/components/modal/InstallationModal";

export default function HomePage() {
  const [isInstallationModalOpen, setIsInstallationModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection
        onRequestQuote={() => setIsInstallationModalOpen(true)}
      />

      {/* Value Proposition Strip */}
      <ValuePropositionStrip />

      {/* Temporary placeholder for next components */}
      <div className="max-w-7xl mx-auto px-4 py-12 w-full text-center text-slate-400 text-sm">
        Nanhey Accessories – Loading security catalog...
      </div>

      {/* Modal */}
      <InstallationModal
        isOpen={isInstallationModalOpen}
        onClose={() => setIsInstallationModalOpen(false)}
      />
    </main>
  );
}
