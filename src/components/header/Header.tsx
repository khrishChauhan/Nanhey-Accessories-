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
    <>
      {/* Row 1: Micro Utility Bar (30px) */}
      <TopBar />

      {/* Row 2: Sticky Main Navigation Bar (sticks on mobile and desktop) */}
      <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-zinc-200/80 shadow-xs transition-all">
        <MainHeader
          onOpenAccount={() => setIsAuthModalOpen(true)}
          onRequestInstallation={() => setIsInstallationModalOpen(true)}
        />
      </header>

      {/* Modals rendered OUTSIDE <header> to avoid backdrop-blur containing-block clipping */}
      <InstallationModal
        isOpen={isInstallationModalOpen}
        onClose={() => setIsInstallationModalOpen(false)}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}
