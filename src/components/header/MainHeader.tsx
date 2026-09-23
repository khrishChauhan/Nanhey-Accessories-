"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
  Cctv,
} from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { useLanguage } from "@/context/LanguageContext";

interface MainHeaderProps {
  onOpenAccount?: () => void;
}

export default function MainHeader({ onOpenAccount }: MainHeaderProps) {
  const { cartCount, cartTotalFormatted, wishlistCount, openCart } = useShop();
  const { t } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const el = document.getElementById("catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenWishlist = () => {
    if (wishlistCount === 0) {
      alert("Your wishlist is empty. Browse products and tap the heart icon to save them.");
    } else {
      alert(`You have ${wishlistCount} saved item(s) in your Wishlist.`);
    }
  };

  return (
    <div className="bg-white border-b border-zinc-200/80 py-3.5 px-4 relative z-30 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Minimalist Brand Logo & Identity */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Architectural Camera Emblem */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white transition-transform group-hover:scale-105">
              <Cctv className="h-5 w-5 stroke-[1.75]" />
            </div>

            {/* Clean Typographic Logo */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5 tracking-tight font-black text-lg text-zinc-950">
                <span>NANHEY</span>
                <span className="font-light text-zinc-400">ACCESSORIES</span>
              </div>
              <span className="text-[10px] font-medium tracking-wider text-zinc-400 uppercase">
                CCTV & Security Solutions
              </span>
            </div>
          </Link>
        </div>

        {/* Minimalist Architectural Search Bar */}
        <div className="w-full lg:max-w-xl flex-1">
          <form
            onSubmit={handleSearch}
            className="flex items-center rounded-lg bg-zinc-50 border border-zinc-200/80 px-2.5 py-1.5 focus-within:bg-white focus-within:border-zinc-400 transition-colors"
          >
            {/* Category Filter Selector */}
            <div className="relative hidden sm:flex items-center pr-2 border-r border-zinc-200">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-transparent pr-5 text-xs font-medium text-zinc-600 focus:outline-none cursor-pointer hover:text-zinc-900 transition-colors"
              >
                <option value="All Categories">All Categories</option>
                <option value="HD Cameras">HD Cameras</option>
                <option value="IP Cameras">IP Cameras</option>
                <option value="DVR/NVR">DVR / NVR</option>
                <option value="WiFi Cameras">WiFi Cameras</option>
                <option value="Hard Disks">Surveillance Storage</option>
                <option value="Accessories">Accessories</option>
              </select>
              <ChevronDown className="absolute right-1 h-3 w-3 text-zinc-400 pointer-events-none" />
            </div>

            {/* Input Field */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="flex-1 px-3 py-1 text-xs text-zinc-800 placeholder:text-zinc-400 bg-transparent focus:outline-none"
            />

            {/* Quiet Search Button */}
            <button
              type="submit"
              className="p-1.5 text-zinc-400 hover:text-zinc-900 rounded-md transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Minimal Action Triggers: Account, Wishlist, Cart */}
        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-5 w-full lg:w-auto pt-2 lg:pt-0 border-t lg:border-t-0 border-zinc-100">
          {/* User Account */}
          <button
            onClick={onOpenAccount}
            className="flex items-center gap-2 p-1.5 rounded-lg text-zinc-600 hover:text-zinc-950 transition-colors group"
          >
            <User className="h-4 w-4" />
            <span className="text-xs font-medium hidden sm:inline">
              {t("myAccount")}
            </span>
          </button>

          {/* Wishlist */}
          <button
            onClick={handleOpenWishlist}
            className="relative flex items-center gap-2 p-1.5 rounded-lg text-zinc-600 hover:text-zinc-950 transition-colors group"
            aria-label="Wishlist"
          >
            <div className="relative">
              <Heart className="h-4 w-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-zinc-900 text-[9px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="text-xs font-medium hidden sm:inline">
              {t("wishlist")}
            </span>
          </button>

          {/* Cart with Clean Monochrome Trigger */}
          <button
            onClick={openCart}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white transition-colors"
            aria-label="Shopping Cart"
          >
            <div className="relative">
              <ShoppingCart className="h-4 w-4 text-zinc-200" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-red text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-xs font-semibold tabular-nums">
              {cartTotalFormatted}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
