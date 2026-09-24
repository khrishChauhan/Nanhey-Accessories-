"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  Grid,
  Cctv,
  MessageCircle,
  ShoppingCart,
} from "lucide-react";
import { useShop } from "@/context/ShopContext";

interface MobileBottomBarProps {
  onRequestInstallation: () => void;
}

export default function MobileBottomBar({
  onRequestInstallation,
}: MobileBottomBarProps) {
  const { cartCount, openCart } = useShop();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-zinc-200 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-5 gap-1 items-center text-center px-2 py-1.5">
        {/* Home */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center py-1 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <Home className="h-4 w-4" />
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </Link>

        {/* Categories */}
        <Link
          href="/#catalog"
          className="flex flex-col items-center justify-center py-1 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <Grid className="h-4 w-4" />
          <span className="text-[10px] font-medium mt-0.5">Catalog</span>
        </Link>

        {/* Builder / Center Minimal Button */}
        <Link
          href="/#builder"
          className="flex flex-col items-center justify-center -mt-3 group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white shadow-sm group-active:scale-95 transition-transform">
            <Cctv className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-semibold text-zinc-900 mt-0.5">
            Builder
          </span>
        </Link>

        {/* Cart Trigger */}
        <button
          onClick={openCart}
          className="relative flex flex-col items-center justify-center py-1 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <div className="relative">
            <ShoppingCart className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand-red text-[8px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium mt-0.5">Cart</span>
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919065224224?text=Hi%20Nanhey%20Accessories,%20I%20am%20interested%20in%20CCTV%20cameras."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-[10px] font-medium mt-0.5">Contact</span>
        </a>
      </div>
    </div>
  );
}
