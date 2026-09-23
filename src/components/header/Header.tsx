"use client";

import React, { useState } from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import NavigationBar from "./NavigationBar";
import InstallationModal from "../modal/InstallationModal";

interface HeaderProps {
  cartCount?: number;
  cartTotal?: string;
  wishlistCount?: number;
}

export default function Header({
  cartCount = 2,
  cartTotal = "₹4,498",
  wishlistCount = 3,
}: HeaderProps) {
  const [isInstallationModalOpen, setIsInstallationModalOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-sm">
      <TopBar />
      <MainHeader
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlistCount}
      />
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
