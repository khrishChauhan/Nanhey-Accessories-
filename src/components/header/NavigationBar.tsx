"use client";

import React, { useState } from "react";
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
  Tag,
  PhoneCall,
  Info,
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
    { name: "HD CCTV Cameras (Analog)", count: "48+ Products", icon: Video },
    { name: "IP & Network Cameras", count: "36+ Products", icon: Shield },
    { name: "WiFi & Smart Wireless Cameras", count: "24+ Products", icon: Wifi },
    { name: "PTZ & Speed Dome Cameras", count: "12+ Products", icon: Video },
    { name: "DVR (Digital Video Recorders)", count: "18+ Products", icon: HardDrive },
    { name: "NVR (Network Video Recorders)", count: "16+ Products", icon: HardDrive },
    { name: "Surveillance Hard Disks (1TB - 8TB)", count: "14+ Products", icon: HardDrive },
    { name: "CCTV Cables & Connectors (3+1, RG59)", count: "30+ Products", icon: Cable },
    { name: "Power Supplies & SMPS Adapters", count: "22+ Products", icon: Zap },
    { name: "Special Combo Packages", count: "10+ Packages", icon: Flame, isHot: true },
  ];

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "CCTV CAMERAS", href: "#categories" },
    { label: "DVR / NVR", href: "#categories" },
    { label: "WIFI CAMERAS", href: "#categories" },
    { label: "ACCESSORIES", href: "#categories" },
    { label: "OFFERS", href: "#bestsellers", isBadge: "HOT" },
    { label: "INSTALLATION", href: "#installation" },
    { label: "ABOUT US", href: "#about" },
    { label: "CONTACT US", href: "#contact" },
  ];

  return (
    <nav className="bg-slate-900 border-t border-slate-800 text-white relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left: Prominent Category Mega-Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              onMouseEnter={() => setIsCategoryMenuOpen(true)}
              className="flex items-center gap-2.5 bg-brand-red hover:bg-brand-red-600 text-white font-black text-xs sm:text-sm tracking-wider uppercase px-4 sm:px-6 py-4 shadow-md transition-colors"
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
                className="absolute top-full left-0 w-72 sm:w-80 bg-white text-slate-800 rounded-b-xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1"
              >
                <div className="px-4 py-2 border-b border-slate-100 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Top Product Categories
                </div>
                {categories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <a
                      key={idx}
                      href="#categories"
                      onClick={() => setIsCategoryMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-red-50/60 hover:text-brand-red transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover:bg-brand-red group-hover:text-white transition-colors">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-xs font-semibold text-slate-800 group-hover:text-brand-red">
                          {cat.name}
                        </span>
                      </div>
                      {cat.isHot ? (
                        <span className="bg-brand-red text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                          HOT
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400">
                          {cat.count}
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-bold tracking-wide">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-2.5 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 transition-colors relative flex items-center gap-1 group"
              >
                <span>{link.label}</span>
                {link.isBadge && (
                  <span className="bg-brand-red text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase leading-none shadow-sm animate-pulse">
                    {link.isBadge}
                  </span>
                )}
                <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </div>

          {/* Right Action: Request Installation Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={onRequestInstallation}
              className="flex items-center gap-2 bg-gradient-to-r from-brand-red to-red-600 hover:from-brand-red-600 hover:to-red-700 text-white font-extrabold text-xs uppercase tracking-wider px-3.5 sm:px-4 py-2 rounded-lg shadow-md shadow-brand-red/20 hover:shadow-brand-red/40 transition-all active:scale-95"
            >
              <Wrench className="h-4 w-4 animate-bounce" />
              <span>REQUEST INSTALLATION</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
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
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-4 py-4 space-y-2 animate-in slide-in-from-top">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900 text-xs font-semibold text-slate-200 hover:bg-brand-red hover:text-white transition-colors"
              >
                <span>{link.label}</span>
                {link.isBadge && (
                  <span className="bg-brand-red text-white text-[9px] px-1.5 py-0.5 rounded">
                    {link.isBadge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestInstallation();
              }}
              className="w-full flex items-center justify-center gap-2 bg-brand-red text-white py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <Wrench className="h-4 w-4" />
              Book Installation Technician
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
