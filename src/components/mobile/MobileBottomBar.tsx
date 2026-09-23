"use client";

import React from "react";
import {
  Home,
  Grid,
  Cctv,
  Phone,
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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-1.5 px-3 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-5 gap-1 items-center text-center">
        {/* Home */}
        <a
          href="#"
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-brand-red transition-colors"
        >
          <Home className="h-5 w-5" />
          <span className="text-[10px] font-semibold mt-0.5">Home</span>
        </a>

        {/* Categories */}
        <a
          href="#categories"
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-brand-red transition-colors"
        >
          <Grid className="h-5 w-5" />
          <span className="text-[10px] font-semibold mt-0.5">Catalog</span>
        </a>

        {/* Builder / Center Highlight */}
        <a
          href="#builder"
          className="flex flex-col items-center justify-center -mt-4 group"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/40 group-active:scale-95 transition-transform">
            <Cctv className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-black text-brand-red mt-0.5 uppercase tracking-tighter">
            Builder
          </span>
        </a>

        {/* Cart Trigger */}
        <button
          onClick={openCart}
          className="relative flex flex-col items-center justify-center py-1 text-slate-600 hover:text-brand-red transition-colors"
        >
          <div className="relative">
            <ShoppingCart className="h-5 w-5 text-slate-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-red text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold mt-0.5">Cart</span>
        </button>

        {/* WhatsApp Trigger */}
        <a
          href="https://wa.me/919065224224?text=Hi%20Nanhey%20Accessories,%20I%20am%20interested%20in%20CCTV%20cameras."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          <div className="relative">
            <MessageCircle className="h-5 w-5 fill-emerald-600 text-white" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
          </div>
          <span className="text-[10px] font-semibold mt-0.5 text-emerald-700">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
