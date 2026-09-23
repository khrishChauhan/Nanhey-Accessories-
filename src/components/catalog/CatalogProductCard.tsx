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
    <div className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/80 hover:border-brand-ruby/50 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-card-hover transition-all duration-300 p-4 hover:-translate-y-1">
      {/* Top Badges & Wishlist Button */}
      <div className="flex items-center justify-between gap-1 mb-2.5">
        <div className="flex items-center gap-1.5 flex-wrap">
          {product.discount && (
            <span className="bg-brand-ruby text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-ruby">
              {product.discount}
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-[#090D14] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10 shadow-sm">
              Best Seller
            </span>
          )}
        </div>

        <button
          onClick={() => toggleWishlist(product)}
          className={`p-1.5 rounded-xl border transition-all duration-200 hover:scale-110 active:scale-95 ${
            wishlisted
              ? "bg-red-50 border-brand-ruby text-brand-ruby shadow-sm"
              : "bg-slate-50 border-slate-200 text-slate-400 hover:text-brand-ruby hover:bg-white"
          }`}
          title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-label="Wishlist"
        >
          <Heart className={`h-4 w-4 ${wishlisted ? "fill-brand-ruby" : ""}`} />
        </button>
      </div>

      {/* Product Image / Icon Showcase - Smooth Zoom Container */}
      <div
        onClick={() => openQuickView(product)}
        className="relative flex h-40 w-full items-center justify-center rounded-xl bg-slate-50/80 border border-slate-100 group-hover:bg-red-50/30 group-hover:border-red-100/60 transition-all duration-300 cursor-pointer overflow-hidden my-1"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm group-hover:scale-110 group-hover:text-brand-ruby group-hover:shadow-ruby transition-all duration-300">
          <Icon className="h-10 w-10 stroke-[1.6]" />
        </div>

        {/* Hover Quick View Trigger Overlay */}
        <div className="absolute inset-0 bg-[#090D14]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
          <span className="inline-flex items-center gap-1.5 bg-white text-slate-900 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl hover:scale-105 transition-transform">
            <Eye className="h-3.5 w-3.5 text-brand-ruby" />
            Quick View
          </span>
        </div>
      </div>

      {/* Meta Info */}
      <div className="space-y-1.5 mt-2.5">
        <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase font-bold tracking-wider">
          <span>{product.brand}</span>
          <span className="text-emerald-500 font-semibold lowercase flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            in stock
          </span>
        </div>

        {/* Title */}
        <h4
          onClick={() => openQuickView(product)}
          className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-brand-ruby cursor-pointer transition-colors line-clamp-2 leading-tight"
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
              className="text-[9px] bg-slate-100/90 text-slate-600 px-2 py-0.5 rounded-md font-medium truncate max-w-[130px]"
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
            <span className="text-base font-black text-brand-ruby">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-[11px] text-slate-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>
          <span className="text-[9px] text-slate-400 font-semibold block">
            Incl. GST • {product.warranty.split(" ")[0]} {product.warranty.split(" ")[1]} War.
          </span>
        </div>

        {/* Action Buttons: WhatsApp & Add to Cart */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleWhatsAppEnquiry}
            className="p-2 rounded-xl border border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all"
            title="Ask on WhatsApp"
            aria-label="Ask on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </button>

          <button
            onClick={handleAddToCart}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm ${
              isAdded
                ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                : "bg-brand-ruby text-white hover:bg-brand-ruby-600 shadow-ruby"
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
