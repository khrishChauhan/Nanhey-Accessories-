"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
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

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="h-[68px] sm:h-[72px] flex items-center px-4 sm:px-6 relative z-30 transition-all bg-white/95">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3 sm:gap-6">
        {/* 1. Sharp Minimalist Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
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

        {/* 2. Refined Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
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

        {/* 3. Modern Streamlined Pill Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm xl:max-w-md">
          <form
            onSubmit={handleSearch}
            className="w-full flex items-center bg-zinc-100/90 hover:bg-zinc-100 border border-zinc-200/80 focus-within:border-zinc-400 focus-within:bg-white rounded-full px-3 py-1.5 transition-all text-xs"
          >
            {/* Category Dropdown */}
            <div className="relative flex items-center pr-2 border-r border-zinc-200 shrink-0">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-transparent pr-4 text-[11px] font-medium text-zinc-600 focus:outline-none cursor-pointer hover:text-zinc-950 transition-colors"
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
              className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors shrink-0"
              aria-label="Search"
            >
              <Search className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>

        {/* 4. Elegant Consolidated Action Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Account Icon */}
          <button
            onClick={onOpenAccount}
            className="p-2 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            title="My Account"
            aria-label="My Account"
          >
            <User className="h-4 w-4" />
          </button>

          {/* Wishlist Icon */}
          <button
            onClick={handleOpenWishlist}
            className="p-2 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors relative"
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart className="h-4 w-4" />
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-2 w-2 items-center justify-center rounded-full bg-red-600 ring-2 ring-white" />
            )}
          </button>

          {/* Cart Delicate Bordered Pill */}
          <button
            onClick={openCart}
            className="border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 rounded-full px-3 py-1.5 flex items-center gap-2 transition-all shadow-2xs group"
            aria-label="Shopping Cart"
          >
            <div className="relative flex items-center">
              <ShoppingCart className="h-3.5 w-3.5 text-zinc-700 group-hover:text-zinc-950 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-3.5 min-w-3.5 px-1 items-center justify-center rounded-full bg-red-600 text-[8px] font-bold text-white leading-none">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="tabular-nums text-xs font-semibold text-zinc-800">
              {cartTotalFormatted}
            </span>
          </button>

          {/* Single Primary CTA: Request Installation Pill */}
          <button
            onClick={onRequestInstallation}
            className="hidden sm:inline-flex items-center gap-1.5 bg-zinc-900 hover:bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-xs shrink-0"
          >
            <Wrench className="h-3.5 w-3.5" />
            <span>Request Installation</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors ml-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
