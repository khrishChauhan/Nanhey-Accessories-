"use client";

import React, { useState } from "react";
import {
  Star,
  Check,
  Heart,
  Video,
  HardDrive,
  Wifi,
  Cable,
  Cpu,
  Cctv,
  Plus,
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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1200);
  };

  return (
    <div
      onClick={() => openQuickView(product)}
      className="group relative flex flex-col justify-between rounded-lg bg-white border border-zinc-200/80 hover:border-zinc-300 p-4 transition-colors cursor-pointer"
    >
      <div>
        {/* Top Header: Brand & Wishlist Button */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
            {product.brand}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className={`p-1 rounded text-zinc-400 hover:text-zinc-900 transition-colors ${
              wishlisted ? "text-brand-red fill-brand-red" : ""
            }`}
            title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-label="Wishlist"
          >
            <Heart className={`h-3.5 w-3.5 ${wishlisted ? "fill-brand-red text-brand-red" : ""}`} />
          </button>
        </div>

        {/* Product Image / Icon - Clean Light Zinc Gallery Container */}
        <div className="relative flex h-36 w-full items-center justify-center rounded bg-zinc-50/80 border border-zinc-100 p-4 mb-3 transition-colors group-hover:bg-zinc-100/60">
          <Icon className="h-10 w-10 text-zinc-600 stroke-[1.5]" />
        </div>

        {/* Product Title */}
        <h4
          className="text-xs font-semibold text-zinc-900 line-clamp-2 leading-snug group-hover:text-zinc-600 transition-colors"
          title={product.name}
        >
          {product.name}
        </h4>

        {/* Subtle Specs */}
        <p className="text-[11px] text-zinc-400 mt-1 truncate font-normal">
          {product.features[0] || product.categoryName}
        </p>
      </div>

      {/* Price & Action Row */}
      <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-bold text-zinc-950 tabular-nums">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-[11px] text-zinc-400 line-through tabular-nums">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>
          <span className="text-[10px] text-zinc-400 font-medium">
            {product.warranty.split(" ")[0]} {product.warranty.split(" ")[1]} War.
          </span>
        </div>

        {/* Quiet Add Button */}
        <button
          onClick={handleAddToCart}
          className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
            isAdded
              ? "bg-zinc-100 text-zinc-900 border border-zinc-200"
              : "bg-zinc-900 hover:bg-zinc-800 text-white"
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          {isAdded ? (
            <>
              <Check className="h-3 w-3" />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus className="h-3 w-3" />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
