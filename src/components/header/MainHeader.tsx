"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
  Wrench,
  ArrowRight,
  Phone,
  MessageCircle,
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

  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenWishlist = () => {
    if (wishlistCount === 0) {
      alert("Your wishlist is empty. Browse products and tap the heart icon to save items.");
    } else {
      alert(`You have ${wishlistCount} saved item(s) in your Wishlist.`);
    }
  };

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
    <div className="relative z-30 transition-all bg-white/95">
      {/* Main 70px Bar */}
      <div className="h-[68px] sm:h-[72px] flex items-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3 sm:gap-6">
          {/* 1. Official Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0 py-1">
            <Image
              src="/images/logo.png"
              alt="Nanhey Accessories – CCTV & Security Solutions Begusarai"
              width={190}
              height={52}
              priority
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* 2. Refined Navigation Links with Red Hover Underline */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-xs font-semibold text-zinc-600 hover:text-red-600 transition-colors tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 3. Modern Streamlined Pill Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm xl:max-w-md">
            <form
              onSubmit={handleSearch}
              className="w-full flex items-center bg-zinc-100/90 hover:bg-zinc-100 border border-zinc-200/80 focus-within:border-red-400 focus-within:bg-white rounded-full px-3 py-1.5 transition-all text-xs"
            >
              {/* Category Dropdown */}
              <div className="relative flex items-center pr-2 border-r border-zinc-200 shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-transparent pr-4 text-[11px] font-medium text-zinc-600 focus:outline-none cursor-pointer hover:text-red-600 transition-colors"
                >
                  <option value="All">All</option>
                  <option value="HD Cameras">HD Cameras</option>
                  <option value="IP Cameras">IP Cameras</option>
                  <option value="DVR/NVR">DVR/NVR</option>
                  <option value="WiFi">WiFi</option>
                  <option value="Storage">Storage</option>
                  <option value="Accessories">Accessories</option>
                </select>
                <ChevronDown className="absolute right-0 h-3 w-3 text-zinc-400 pointer-events-none" />
              </div>

              {/* Input field */}
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("searchPlaceholder") || "Search cameras, DVR..."}
                className="w-full bg-transparent px-2 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
              />

              {/* Quiet Icon Button */}
              <button
                type="submit"
                className="p-1 text-zinc-400 hover:text-red-600 transition-colors shrink-0"
                aria-label="Search"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

          {/* 4. Elegant Consolidated Action Cluster with Red Accents */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Account Icon (Hidden on mobile, accessible via drawer) */}
            <button
              onClick={onOpenAccount}
              className="hidden sm:flex p-2 rounded-full text-zinc-600 hover:text-red-600 hover:bg-red-50/50 transition-colors"
              title="My Account"
              aria-label="My Account"
            >
              <User className="h-4 w-4" />
            </button>

            {/* Wishlist Icon (Hidden on mobile, accessible via drawer) */}
            <button
              onClick={handleOpenWishlist}
              className="hidden sm:flex p-2 rounded-full text-zinc-600 hover:text-red-600 hover:bg-red-50/50 transition-colors relative"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 flex h-2 w-2 items-center justify-center rounded-full bg-red-600 ring-2 ring-white" />
              )}
            </button>

            {/* Cart Delicate Bordered Pill: icon-only on mobile, full price pill on sm+ */}
            <button
              onClick={openCart}
              className="border border-zinc-200 hover:border-red-300 hover:bg-red-50/20 rounded-full px-2.5 py-1.5 sm:px-3 sm:py-1.5 flex items-center gap-1.5 sm:gap-2 transition-all shadow-2xs group shrink-0"
              aria-label="Shopping Cart"
            >
              <div className="relative flex items-center justify-center">
                <ShoppingCart className="h-4 w-4 sm:h-3.5 sm:w-3.5 text-zinc-700 group-hover:text-red-600 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 flex h-3.5 min-w-3.5 px-1 items-center justify-center rounded-full bg-red-600 text-[8px] font-bold text-white leading-none">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline tabular-nums text-xs font-semibold text-zinc-800 group-hover:text-red-600 transition-colors">
                {cartTotalFormatted}
              </span>
            </button>

            {/* Single Primary CTA: Red Precision Installation Pill */}
            <button
              onClick={onRequestInstallation}
              className="hidden md:inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-xs shadow-red-600/25 shrink-0"
            >
              <Wrench className="h-3.5 w-3.5" />
              <span>Request Installation</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full text-zinc-700 hover:text-red-600 hover:bg-red-50/50 transition-colors ml-0.5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Portalized Mobile Menu Drawer rendered directly into document.body */}
      {mounted &&
        mobileMenuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[120] xl:hidden">
            {/* Dark Backdrop Blur */}
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            />

            {/* Slide-out Drawer Panel */}
            <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between p-5 z-10 overflow-y-auto animate-in slide-in-from-right duration-200">
              {/* Drawer Top: Logo + Close Button */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                  {/* Logo in Drawer */}
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center group shrink-0 py-0.5"
                  >
                    <Image
                      src="/images/logo.png"
                      alt="Nanhey Accessories – CCTV & Security Solutions Begusarai"
                      width={160}
                      height={44}
                      className="h-7 sm:h-8 w-auto object-contain"
                    />
                  </Link>

                  {/* Close Button */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Drawer Body: Search Bar */}
                <div className="mt-4">
                  <form
                    onSubmit={(e) => {
                      handleSearch(e);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center bg-zinc-100/90 border border-zinc-200 focus-within:border-red-400 focus-within:bg-white rounded-full px-3 py-1.5 text-xs"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search cameras, DVR, NVR..."
                      className="w-full bg-transparent px-2 text-xs text-zinc-800 placeholder:text-zinc-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="p-1 text-zinc-500 hover:text-red-600 transition-colors"
                      aria-label="Search"
                    >
                      <Search className="h-3.5 w-3.5" />
                    </button>
                  </form>
                </div>

                {/* Quick Account & Wishlist Actions */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenAccount) onOpenAccount();
                    }}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:bg-red-50/30 text-xs font-semibold text-zinc-800 transition-colors text-left"
                  >
                    <User className="h-4 w-4 text-red-600 shrink-0" />
                    <span className="truncate">My Account</span>
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleOpenWishlist();
                    }}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:bg-red-50/30 text-xs font-semibold text-zinc-800 transition-colors text-left relative"
                  >
                    <Heart className="h-4 w-4 text-red-600 shrink-0" />
                    <span className="truncate">Wishlist</span>
                    {wishlistCount > 0 && (
                      <span className="ml-auto bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                        {wishlistCount}
                      </span>
                    )}
                  </button>
                </div>

                {/* Navigation Links in Drawer */}
                <div className="mt-4 space-y-0.5">
                  <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider px-3 mb-1.5">
                    Navigation
                  </div>
                  {navLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-700 hover:text-red-600 hover:bg-red-50/40 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-3 w-3 text-zinc-400" />
                    </Link>
                  ))}
                </div>

                {/* Quick Services Section */}
                <div className="mt-4 pt-3 border-t border-zinc-100">
                  <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider px-3 mb-1.5">
                    Direct Services
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="/installation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex flex-col p-2 rounded-lg bg-zinc-50 border border-zinc-200/70 hover:border-red-300 hover:bg-red-50/20 transition-colors text-xs"
                    >
                      <span className="font-semibold text-zinc-900 text-[11px]">Doorstep Setup</span>
                      <span className="text-[9px] text-zinc-500 mt-0.5">Certified Engineers</span>
                    </Link>
                    <Link
                      href="/amc"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex flex-col p-2 rounded-lg bg-zinc-50 border border-zinc-200/70 hover:border-red-300 hover:bg-red-50/20 transition-colors text-xs"
                    >
                      <span className="font-semibold text-zinc-900 text-[11px]">AMC Contracts</span>
                      <span className="text-[9px] text-zinc-500 mt-0.5">Annual Maintenance</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Actions & Contacts */}
              <div className="pt-4 border-t border-zinc-100 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onRequestInstallation) onRequestInstallation();
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 text-xs shadow-xs shadow-red-600/25 transition-all"
                >
                  <Wrench className="h-3.5 w-3.5" />
                  <span>Request Installation</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <a
                    href="tel:+919065224224"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg border border-zinc-200 bg-zinc-50 text-[11px] font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-red-500" />
                    <span>Call Us</span>
                  </a>

                  <a
                    href="https://wa.me/919065224224?text=Hi%20Nanhey%20Accessories,%20I%20am%20interested%20in%20CCTV%20cameras."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg border border-emerald-200 bg-emerald-50 text-[11px] font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
