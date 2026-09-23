"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  Wrench,
  Shield,
  HardDrive,
  Wifi,
  Video,
  Cable,
  Zap,
  X,
} from "lucide-react";

interface NavigationBarProps {
  onRequestInstallation: () => void;
}

export default function NavigationBar({
  onRequestInstallation,
}: NavigationBarProps) {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: "HD CCTV Cameras", count: "48 Models", icon: Video, href: "/#catalog" },
    { name: "IP & Network Cameras", count: "36 Models", icon: Shield, href: "/#catalog" },
    { name: "WiFi & Smart Cameras", count: "24 Models", icon: Wifi, href: "/#catalog" },
    { name: "PTZ Speed Dome Cameras", count: "12 Models", icon: Video, href: "/#catalog" },
    { name: "DVR (Analog Recorders)", count: "20 Models", icon: HardDrive, href: "/#catalog" },
    { name: "NVR (Network Recorders)", count: "18 Models", icon: HardDrive, href: "/#catalog" },
    { name: "Surveillance Storage", count: "14 Models", icon: HardDrive, href: "/#catalog" },
    { name: "Cables & Connectors", count: "30 Models", icon: Cable, href: "/#catalog" },
    { name: "Power Supplies (SMPS)", count: "22 Models", icon: Zap, href: "/#catalog" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Cameras", href: "/#catalog" },
    { label: "DVR / NVR", href: "/#catalog" },
    { label: "Smart WiFi", href: "/#catalog" },
    { label: "Installation", href: "/installation" },
    { label: "AMC Contract", href: "/amc" },
    { label: "Dealer B2B", href: "/dealer" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-zinc-200/80 text-zinc-900 relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Left: Minimal All Categories Button */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              onMouseEnter={() => setIsCategoryMenuOpen(true)}
              className="flex items-center gap-2 text-xs font-semibold text-zinc-800 hover:text-zinc-950 py-2 transition-colors"
            >
              <Menu className="h-4 w-4 text-zinc-500" />
              <span>Catalog</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-zinc-400 transition-transform duration-200 ${
                  isCategoryMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Quiet Minimal Dropdown */}
            {isCategoryMenuOpen && (
              <div
                onMouseLeave={() => setIsCategoryMenuOpen(false)}
                className="absolute top-full left-0 w-72 bg-white text-zinc-800 rounded-lg shadow-lg border border-zinc-200 py-1.5 z-50 animate-in fade-in"
              >
                <div className="px-3.5 py-1.5 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider border-b border-zinc-100">
                  Categories
                </div>
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={idx}
                      href={cat.href}
                      onClick={() => setIsCategoryMenuOpen(false)}
                      className="flex items-center justify-between px-3.5 py-2 hover:bg-zinc-50 text-xs font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{cat.name}</span>
                      </div>
                      <span className="text-[10px] text-zinc-400 tabular-nums">
                        {cat.count}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Desktop Clean Editorial Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-medium text-zinc-600">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:text-zinc-950 transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Action: Clean Installation Link & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/installation"
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-800 hover:text-brand-red transition-colors"
            >
              <Wrench className="h-3.5 w-3.5 text-zinc-500" />
              <span>Book Technician</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-zinc-600 hover:text-zinc-950 rounded-md transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-50 border-t border-zinc-200 px-4 py-3 space-y-2 animate-in slide-in-from-top">
          <div className="grid grid-cols-2 gap-1.5 pb-2 border-b border-zinc-200">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-xs font-medium text-zinc-700 hover:text-zinc-950 hover:bg-white rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-1">
            <Link
              href="/installation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 bg-zinc-900 text-white py-2 rounded-md text-xs font-medium transition-colors"
            >
              <Wrench className="h-3.5 w-3.5" />
              Schedule Doorstep Installation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
