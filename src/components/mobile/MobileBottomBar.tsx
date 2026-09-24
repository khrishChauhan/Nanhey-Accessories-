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
      style={{ paddingBottom: "env(safe-area-inset-bottom, 8px)" }}
    >
      <div className="w-full max-w-md mx-auto grid grid-cols-5 items-center text-center px-1 py-1">
        {/* Home */}
        <Link
          href="/"
          className="min-w-0 flex flex-col items-center justify-center py-1 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <Home className="h-4 w-4 shrink-0" />
          <span className="text-[9px] font-semibold text-zinc-500 block truncate leading-tight mt-0.5 w-full">
            Home
          </span>
        </Link>

        {/* Categories */}
        <Link
          href="/#catalog"
          className="min-w-0 flex flex-col items-center justify-center py-1 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <Grid className="h-4 w-4 shrink-0" />
          <span className="text-[9px] font-semibold text-zinc-500 block truncate leading-tight mt-0.5 w-full">
            Catalog
          </span>
        </Link>

        {/* Builder / Center Minimal Button */}
        <Link
          href="/#builder"
          className="min-w-0 flex flex-col items-center justify-center -mt-3 group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white shadow-sm group-active:scale-95 transition-transform shrink-0">
            <Cctv className="h-4 w-4" />
          </div>
          <span className="text-[9px] font-semibold text-zinc-900 block truncate leading-tight mt-0.5 w-full">
            Builder
          </span>
        </Link>

        {/* Cart Trigger */}
        <button
          onClick={openCart}
          className="min-w-0 flex flex-col items-center justify-center py-1 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <div className="relative inline-flex items-center justify-center">
            <ShoppingCart className="h-4 w-4 shrink-0" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-3.5 min-w-[14px] px-0.5 items-center justify-center rounded-full bg-red-600 text-[8px] font-black text-white ring-1 ring-white">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[9px] font-semibold text-zinc-500 block truncate leading-tight mt-0.5 w-full">
            Cart
          </span>
        </button>

        {/* WhatsApp / Contact */}
        <a
          href="https://wa.me/919065224224?text=Hi%20Nanhey%20Accessories,%20I%20am%20interested%20in%20CCTV%20cameras."
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-0 flex flex-col items-center justify-center py-1 text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          <span className="text-[9px] font-semibold text-zinc-500 block truncate leading-tight mt-0.5 w-full">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
}
