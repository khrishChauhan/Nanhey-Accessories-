"use client";

import React, { useState } from "react";
import {
  Star,
  ShoppingCart,
  Check,
  Eye,
  Heart,
  Video,
  HardDrive,
  Wifi,
  Cable,
  Cpu,
  Cctv,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

interface CatalogProductCardProps {
  product: Product;
}

export default function CatalogProductCard({ product }: CatalogProductCardProps) {
  const { addToCart, toggleWishlist, isWishlisted, openQuickView } = useShop();
  const [isAdded, setIsAdded] = useState(false);
  const wishlisted = isWishlisted(product.id);

  const getProductIcon = (category: string) => {
    switch (category) {
      case "hd-camera":
        return Video;
      case "wifi-camera":
        return Wifi;
      case "dvr":
      case "nvr":
        return Cpu;
      case "hard-disk":
        return HardDrive;
      case "accessories":
        return Cable;
      default:
        return Cctv;
    }
  };

  const Icon = getProductIcon(product.category);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      `Hi Nanhey Accessories! I want to inquire about ${product.name} (₹${product.price.toLocaleString("en-IN")}). Is it in stock at your Begusarai store?`
    );
    window.open(`https://wa.me/919065224224?text=${msg}`, "_blank");
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-brand-red/60 shadow-sm hover:shadow-xl hover:shadow-brand-red/10 transition-all duration-300 p-4">
      {/* Top Badges & Wishlist Button */}
      <div className="flex items-center justify-between gap-1 mb-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          {product.discount && (
            <span className="bg-brand-red text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm">
              {product.discount}
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-slate-900 text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded shadow-sm">
              Best Seller
            </span>
          )}
        </div>

        <button
          onClick={() => toggleWishlist(product)}
          className={`p-1.5 rounded-lg border transition-colors ${
            wishlisted
              ? "bg-red-50 border-brand-red text-brand-red"
              : "bg-slate-50 border-slate-200 text-slate-400 hover:text-brand-red hover:bg-white"
          }`}
          title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-label="Wishlist"
        >
          <Heart className={`h-4 w-4 ${wishlisted ? "fill-brand-red" : ""}`} />
        </button>
      </div>

      {/* Product Image / Icon Showcase */}
      <div
        onClick={() => openQuickView(product)}
        className="relative flex h-40 w-full items-center justify-center rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-red-50/40 group-hover:border-red-100 transition-all cursor-pointer overflow-hidden my-1"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-md group-hover:scale-110 group-hover:text-brand-red transition-all duration-300">
          <Icon className="h-10 w-10 stroke-[1.5]" />
        </div>

        {/* Hover Quick View Trigger Overlay */}
        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <span className="inline-flex items-center gap-1.5 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
            <Eye className="h-3.5 w-3.5 text-brand-red" />
            Quick View
          </span>
        </div>
      </div>

      {/* Meta Info */}
      <div className="space-y-1.5 mt-2">
        <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase font-bold tracking-wider">
          <span>{product.brand}</span>
          <span className="text-brand-accent-green font-semibold lowercase">
            ● in stock
          </span>
        </div>

        {/* Title */}
        <h4
          onClick={() => openQuickView(product)}
          className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-brand-red cursor-pointer transition-colors line-clamp-2 leading-tight"
          title={product.name}
        >
          {product.name}
        </h4>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span>{product.rating}</span>
          <span className="text-slate-400 font-normal">
            ({product.reviewCount})
          </span>
        </div>

        {/* Features Chips */}
        <div className="flex flex-wrap gap-1 pt-1">
          {product.features.slice(0, 2).map((feat, i) => (
            <span
              key={i}
              className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium truncate max-w-[130px]"
            >
              {feat}
            </span>
          ))}
        </div>
      </div>

      {/* Price & Action Row */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        {/* Price */}
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-brand-red">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-[11px] text-slate-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>
          <span className="text-[9px] text-slate-500 font-semibold">
            {product.warranty.split(" ")[0]} {product.warranty.split(" ")[1]} War.
          </span>
        </div>

        {/* Action Buttons: WhatsApp & Add to Cart */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleWhatsAppEnquiry}
            className="p-2 rounded-xl border border-emerald-200 text-emerald-600 hover:bg-emerald-50 transition-colors"
            title="Ask on WhatsApp"
            aria-label="Ask on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </button>

          <button
            onClick={handleAddToCart}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
              isAdded
                ? "bg-brand-accent-green text-white"
                : "bg-brand-red text-white hover:bg-brand-red-600 active:scale-95 shadow-brand-red/25"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdded ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingCart className="h-3.5 w-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
