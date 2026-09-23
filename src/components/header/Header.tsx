"use client";

import React, { useState } from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import InstallationModal from "../modal/InstallationModal";
import AuthModal from "../auth/AuthModal";

export default function Header() {
  const [isInstallationModalOpen, setIsInstallationModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-zinc-200/80 shadow-xs">
      {/* Row 1: Micro Utility Bar (30px) */}
      <TopBar />

      {/* Row 2: Consolidated 72px Main Navigation Bar */}
      <MainHeader
        onOpenAccount={() => setIsAuthModalOpen(true)}
        onRequestInstallation={() => setIsInstallationModalOpen(true)}
      />

      {/* Installation Request Modal */}
      <InstallationModal
        isOpen={isInstallationModalOpen}
        onClose={() => setIsInstallationModalOpen(false)}
      />

      {/* Customer & Dealer Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
}
