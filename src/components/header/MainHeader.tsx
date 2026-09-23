"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
  Wrench,
} from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { useLanguage } from "@/context/LanguageContext";

interface MainHeaderProps {
  onOpenAccount?: () => void;
  onRequestInstallation?: () => void;
}

export default function MainHeader({
  onOpenAccount,
  onRequestInstallation,
}: MainHeaderProps) {
  const { cartCount, cartTotalFormatted, wishlistCount, openCart } = useShop();
  const { t } = useLanguage();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "All Products", href: "/#catalog" },
    { label: "CCTV Cameras", href: "/#catalog" },
    { label: "DVR/NVR", href: "/#catalog" },
    { label: "WiFi Cameras", href: "/#catalog" },
    { label: "Installation", href: "/installation" },
    { label: "AMC Plans", href: "/amc" },
    { label: "B2B Dealer", href: "/dealer" },
  ];

  return (
    <div className="h-[68px] sm:h-[72px] flex items-center px-4 sm:px-6 relative z-30 transition-all bg-white/95">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
        {/* Logo Redesign (Clean & Authoritative) */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          {/* Refined Monochrome Camera Aperture / Shield Glyph */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 text-white shadow-xs ring-1 ring-zinc-800 transition-transform group-hover:scale-105 shrink-0">
            <svg
              className="w-5 h-5 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <circle cx="12" cy="11" r="3" className="stroke-white" />
              <circle cx="12" cy="11" r="1" className="fill-red-500" />
            </svg>
          </div>

          {/* Clean Wordmark */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1 leading-none">
              <span className="font-black text-base sm:text-lg tracking-tight text-zinc-950">
                NANHEY
              </span>
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-red-600">
                SECURITY
              </span>
            </div>
            <span className="text-[9px] tracking-[0.22em] font-medium text-zinc-400 uppercase mt-0.5">
              Begusarai
            </span>
          </div>
        </Link>

        {/* Refined Navigation Links - Desktop */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition-colors tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-zinc-950 hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Triggers */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* User Account */}
          <button
            onClick={onOpenAccount}
            className="p-2 rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            title="Account"
            aria-label="Account"
          >
            <User className="h-4 w-4" />
          </button>

          {/* Wishlist */}
          <button
            onClick={() => alert(`You have ${wishlistCount} item(s) in wishlist.`)}
            className="p-2 rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors relative"
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart className="h-4 w-4" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-600" />
            )}
          </button>

          {/* Cart Pill */}
          <button
            onClick={openCart}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-900 text-xs font-semibold transition-all shadow-xs"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-4 w-4 text-zinc-700" />
            <span className="tabular-nums">{cartTotalFormatted}</span>
            {cartCount > 0 && (
              <span className="flex h-4 min-w-4 px-1 items-center justify-center rounded-full bg-zinc-900 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary CTA: Request Installation */}
          <button
            onClick={onRequestInstallation}
            className="hidden sm:flex items-center gap-1.5 bg-zinc-900 hover:bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-xs"
          >
            <Wrench className="h-3.5 w-3.5" />
            <span>Request Installation</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
