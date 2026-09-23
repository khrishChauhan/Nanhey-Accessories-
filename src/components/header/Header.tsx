"use client";

import React, { useState } from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import NavigationBar from "./NavigationBar";
import InstallationModal from "../modal/InstallationModal";

interface HeaderProps {
  onOpenAccount?: () => void;
}

export default function Header({ onOpenAccount }: HeaderProps) {
  const [isInstallationModalOpen, setIsInstallationModalOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-sm">
      <TopBar />
      <MainHeader onOpenAccount={onOpenAccount} />
      <NavigationBar
        onRequestInstallation={() => setIsInstallationModalOpen(true)}
      />

      {/* Installation Request Modal */}
      <InstallationModal
        isOpen={isInstallationModalOpen}
        onClose={() => setIsInstallationModalOpen(false)}
      />
    </header>
  );
}
