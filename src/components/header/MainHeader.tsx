"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
  Camera,
  Cctv,
} from "lucide-react";

interface MainHeaderProps {
  cartCount?: number;
  cartTotal?: string;
  wishlistCount?: number;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
  onOpenAccount?: () => void;
}

export default function MainHeader({
  cartCount = 2,
  cartTotal = "₹4,498",
  wishlistCount = 3,
  onOpenCart,
  onOpenWishlist,
  onOpenAccount,
}: MainHeaderProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    alert(`Searching for "${searchQuery}" in "${selectedCategory}"`);
  };

  return (
    <div className="bg-white border-b border-slate-100 py-3.5 px-4 shadow-sm relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <a href="/" className="flex items-center gap-3 group">
            {/* Logo Badge */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-red to-red-700 text-white shadow-lg shadow-brand-red/25 group-hover:scale-105 transition-transform">
              <ShieldCheck className="h-7 w-7 text-white" />
              <div className="absolute -bottom-1 -right-1 bg-slate-950 rounded-full p-1 border-2 border-white">
                <Cctv className="h-3 w-3 text-brand-red" />
              </div>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-brand-red transition-colors">
                  NANHEY
                </span>
                <span className="text-xl sm:text-2xl font-light tracking-tight text-brand-red">
                  ACCESSORIES
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-green animate-pulse"></span>
                <span className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase">
                  Your Trusted Security Partner
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Global Search Bar with Category Selector */}
        <div className="w-full lg:max-w-2xl flex-1">
          <form
            onSubmit={handleSearch}
            className="flex items-stretch rounded-xl border-2 border-brand-red/80 bg-white shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-brand-red/30 focus-within:border-brand-red transition-all"
          >
            {/* Category Dropdown */}
            <div className="relative hidden sm:flex items-center bg-slate-50 border-r border-slate-200">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-transparent pl-3 pr-8 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer hover:text-brand-red transition-colors"
              >
                <option value="All Categories">All Categories</option>
                <option value="HD Cameras">HD Cameras</option>
                <option value="IP Cameras">IP Cameras</option>
                <option value="DVR/NVR">DVR / NVR</option>
                <option value="WiFi Cameras">WiFi Cameras</option>
                <option value="Hard Disks">Surveillance Hard Disk</option>
                <option value="Accessories">CCTV Accessories</option>
              </select>
              <ChevronDown className="absolute right-2.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
            </div>

            {/* Input Field */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search CCTV cameras, DVR, NVR, CP Plus, Hikvision, Hard Disks..."
                className="w-full px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            {/* Red Search Button */}
            <button
              type="submit"
              className="bg-brand-red px-5 sm:px-6 py-2.5 text-white font-bold flex items-center justify-center gap-1.5 hover:bg-brand-red-600 active:scale-95 transition-all"
              aria-label="Search"
            >
              <Search className="h-4 w-4 stroke-[2.5]" />
              <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold">
                Search
              </span>
            </button>
          </form>
        </div>

        {/* Action Items: Account, Wishlist, Cart */}
        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-6 w-full lg:w-auto pt-1 lg:pt-0 border-t lg:border-t-0 border-slate-100">
          {/* User Account */}
          <button
            onClick={onOpenAccount || (() => alert("User Account Modal: Sign in or register for quotation and warranty management."))}
            className="flex items-center gap-2 text-left p-1.5 rounded-xl hover:bg-slate-50 transition-colors group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors">
              <User className="h-5 w-5" />
            </div>
            <div className="hidden xl:block">
              <p className="text-[10px] uppercase font-bold text-slate-400 leading-tight">
                Sign In
              </p>
              <p className="text-xs font-bold text-slate-800 leading-tight group-hover:text-brand-red">
                My Account
              </p>
            </div>
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist || (() => alert("Wishlist: 3 items saved"))}
            className="relative flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-50 transition-colors group"
            aria-label="Wishlist"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-[10px] font-extrabold text-white shadow-sm ring-2 ring-white">
                  {wishlistCount}
                </span>
              )}
            </div>
            <div className="hidden xl:block text-left">
              <p className="text-[10px] uppercase font-bold text-slate-400 leading-tight">
                Saved
              </p>
              <p className="text-xs font-bold text-slate-800 leading-tight group-hover:text-brand-red">
                Wishlist
              </p>
            </div>
          </button>

          {/* Cart */}
          <button
            onClick={onOpenCart || (() => alert(`Cart: ${cartCount} items totaling ${cartTotal}`))}
            className="flex items-center gap-2.5 p-1.5 rounded-xl bg-slate-50 hover:bg-red-50/50 border border-slate-200/80 hover:border-brand-red/30 transition-all group"
            aria-label="Shopping Cart"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-white shadow-md shadow-brand-red/25 group-hover:scale-105 transition-transform">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-extrabold text-white ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="text-left pr-2">
              <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">
                My Cart
              </p>
              <p className="text-xs font-extrabold text-brand-red leading-tight mt-0.5">
                {cartTotal}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
