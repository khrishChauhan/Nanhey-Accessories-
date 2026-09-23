"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
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
      alert("Your wishlist is empty. Browse products and tap the heart icon to save them!");
    } else {
      alert(`You have ${wishlistCount} saved item(s) in your Wishlist.`);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 px-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] relative z-30 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="flex items-center gap-3.5 group">
            {/* Luxury Logo Badge */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D9222A] via-[#FF2E44] to-[#8A0E15] text-white shadow-ruby group-hover:scale-105 group-hover:shadow-glow transition-all duration-300">
              <ShieldCheck className="h-7 w-7 text-white stroke-[2.2]" />
              <div className="absolute -bottom-1 -right-1 bg-[#090D14] rounded-full p-1 border-2 border-white shadow-sm">
                <Cctv className="h-3 w-3 text-brand-ruby" />
              </div>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-brand-ruby transition-colors">
                  NANHEY
                </span>
                <span className="text-xl sm:text-2xl font-light tracking-tight text-brand-ruby">
                  ACCESSORIES
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                  Your Trusted Security Partner
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Global Search Bar with Category Selector */}
        <div className="w-full lg:max-w-2xl flex-1">
          <form
            onSubmit={handleSearch}
            className="flex items-stretch rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white focus-within:bg-white shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-brand-ruby/25 focus-within:border-brand-ruby transition-all duration-200"
          >
            {/* Category Dropdown */}
            <div className="relative hidden sm:flex items-center bg-slate-100/70 border-r border-slate-200/80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-transparent pl-3.5 pr-8 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer hover:text-brand-ruby transition-colors"
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
                placeholder={t("searchPlaceholder")}
                className="w-full px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
              />
            </div>

            {/* Rich Ruby Search Button */}
            <button
              type="submit"
              className="bg-brand-ruby px-5 sm:px-6 py-2.5 text-white font-bold flex items-center justify-center gap-1.5 hover:bg-brand-ruby-600 active:scale-95 shadow-sm hover:shadow-ruby transition-all duration-200"
              aria-label="Search"
            >
              <Search className="h-4 w-4 stroke-[2.5]" />
              <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold">
                {t("searchBtn")}
              </span>
            </button>
          </form>
        </div>

        {/* Action Items: Account, Wishlist, Cart */}
        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-5 w-full lg:w-auto pt-1 lg:pt-0 border-t lg:border-t-0 border-slate-100">
          {/* User Account */}
          <button
            onClick={onOpenAccount}
            className="flex items-center gap-2.5 text-left p-1.5 rounded-xl hover:bg-slate-100/70 transition-all group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-brand-ruby/10 group-hover:text-brand-ruby transition-all">
              <User className="h-5 w-5" />
            </div>
            <div className="hidden xl:block">
              <p className="text-[10px] uppercase font-bold text-slate-400 leading-tight">
                {t("signIn")}
              </p>
              <p className="text-xs font-bold text-slate-800 leading-tight group-hover:text-brand-ruby transition-colors">
                {t("myAccount")}
              </p>
            </div>
          </button>

          {/* Wishlist */}
          <button
            onClick={handleOpenWishlist}
            className="relative flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-slate-100/70 transition-all group"
            aria-label="Wishlist"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-brand-ruby/10 group-hover:text-brand-ruby transition-all">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-ruby text-[10px] font-extrabold text-white shadow-ruby ring-2 ring-white">
                  {wishlistCount}
                </span>
              )}
            </div>
            <div className="hidden xl:block text-left">
              <p className="text-[10px] uppercase font-bold text-slate-400 leading-tight">
                {t("saved")}
              </p>
              <p className="text-xs font-bold text-slate-800 leading-tight group-hover:text-brand-ruby transition-colors">
                {t("wishlist")}
              </p>
            </div>
          </button>

          {/* Cart with Drawer Trigger */}
          <button
            onClick={openCart}
            className="flex items-center gap-2.5 p-1.5 rounded-xl bg-slate-50 hover:bg-red-50/40 border border-slate-200/80 hover:border-brand-ruby/30 transition-all group shadow-sm"
            aria-label="Shopping Cart"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand-ruby text-white shadow-ruby group-hover:scale-105 group-hover:shadow-glow transition-all duration-300">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#090D14] text-[10px] font-extrabold text-white ring-2 ring-white animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="text-left pr-2">
              <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">
                {t("myCart")}
              </p>
              <p className="text-xs font-black text-brand-ruby leading-tight mt-0.5">
                {cartTotalFormatted}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
