"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  Wrench,
  Flame,
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
    { name: "HD CCTV Cameras (Analog)", count: "48+ Products", icon: Video, href: "/#catalog" },
    { name: "IP & Network Cameras", count: "36+ Products", icon: Shield, href: "/#catalog" },
    { name: "WiFi & Smart Wireless Cameras", count: "24+ Products", icon: Wifi, href: "/#catalog" },
    { name: "PTZ & Speed Dome Cameras", count: "12+ Products", icon: Video, href: "/#catalog" },
    { name: "DVR (Digital Video Recorders)", count: "20+ Products", icon: HardDrive, href: "/#catalog" },
    { name: "NVR (Network Video Recorders)", count: "18+ Products", icon: HardDrive, href: "/#catalog" },
    { name: "Surveillance Hard Disks (1TB - 8TB)", count: "14+ Products", icon: HardDrive, href: "/#catalog" },
    { name: "CCTV Cables & Connectors", count: "30+ Products", icon: Cable, href: "/#catalog" },
    { name: "Power Supplies & SMPS Adapters", count: "22+ Products", icon: Zap, href: "/#catalog" },
    { name: "Special Combo Packages", count: "10+ Packages", icon: Flame, isHot: true, href: "/#builder" },
  ];

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "CCTV CAMERAS", href: "/#catalog" },
    { label: "DVR / NVR", href: "/#catalog" },
    { label: "WIFI CAMERAS", href: "/#catalog" },
    { label: "INSTALLATION", href: "/installation" },
    { label: "AMC SERVICES", href: "/amc" },
    { label: "DEALER B2B", href: "/dealer" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <nav className="bg-[#090D14]/95 backdrop-blur-md border-t border-white/10 text-white relative z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left: Prominent Category Mega-Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              onMouseEnter={() => setIsCategoryMenuOpen(true)}
              className="flex items-center gap-2.5 bg-brand-ruby hover:bg-brand-ruby-600 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase px-4 sm:px-6 py-4 shadow-ruby hover:shadow-glow transition-all duration-200"
            >
              <Menu className="h-5 w-5 stroke-[2.5]" />
              <span>ALL CATEGORIES</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isCategoryMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isCategoryMenuOpen && (
              <div
                onMouseLeave={() => setIsCategoryMenuOpen(false)}
                className="absolute top-full left-0 w-72 sm:w-80 bg-white text-slate-800 rounded-b-2xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1"
              >
                <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Top Product Categories
                </div>
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={idx}
                      href={cat.href}
                      onClick={() => setIsCategoryMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-red-50/60 hover:text-brand-ruby transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover:bg-brand-ruby group-hover:text-white transition-all">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-brand-ruby transition-colors">
                          {cat.name}
                        </span>
                      </div>
                      {cat.isHot ? (
                        <span className="bg-brand-ruby text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase shadow-sm">
                          HOT
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400">
                          {cat.count}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-bold tracking-wider">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="px-2.5 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all relative flex items-center gap-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-brand-ruby scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Action: Request Installation Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            <Link
              href="/installation"
              className="flex items-center gap-2 bg-gradient-to-r from-brand-ruby via-red-600 to-brand-ruby-deep hover:from-brand-ruby-600 hover:to-brand-ruby text-white font-extrabold text-xs uppercase tracking-wider px-3.5 sm:px-4 py-2 rounded-xl shadow-ruby hover:shadow-glow transition-all duration-300 active:scale-95 group"
            >
              <Wrench className="h-4 w-4 group-hover:rotate-45 transition-transform" />
              <span>REQUEST INSTALLATION</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090D14] border-t border-white/10 px-4 py-4 space-y-2 animate-in slide-in-from-top">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-semibold text-slate-200 hover:bg-brand-ruby hover:text-white transition-colors"
              >
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/installation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-brand-ruby text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-ruby active:scale-95 transition-all"
            >
              <Wrench className="h-4 w-4" />
              Book Installation Technician
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
