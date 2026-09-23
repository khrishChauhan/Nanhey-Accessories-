"use client";

import React, { useState } from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import NavigationBar from "./NavigationBar";
import InstallationModal from "../modal/InstallationModal";
import AuthModal from "../auth/AuthModal";

export default function Header() {
  const [isInstallationModalOpen, setIsInstallationModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-sm">
      <TopBar />
      <MainHeader onOpenAccount={() => setIsAuthModalOpen(true)} />
      <NavigationBar
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
