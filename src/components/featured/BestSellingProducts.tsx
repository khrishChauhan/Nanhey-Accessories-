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
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

export default function BestSellingProducts() {
  const { addToCart, toggleWishlist, isWishlisted, openQuickView } = useShop();
  const [addedId, setAddedId] = useState<string | null>(null);

  // Pick the top 5 flagship best-sellers across diverse categories
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 5);

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

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <div id="bestsellers" className="flex flex-col h-full space-y-4">
      {/* Section Title */}
      <div className="flex items-center justify-between pb-1 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-[11px] font-black uppercase tracking-wider text-brand-red">
              Top Trending
            </span>
          </div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            BEST SELLING PRODUCTS
          </h3>
        </div>
        <span className="text-xs text-slate-500 hidden sm:inline">
          Showing 5 Top Deals
        </span>
      </div>

      {/* Product List */}
      <div className="space-y-3 flex-1 overflow-y-auto pr-1 max-h-[580px]">
        {bestSellers.map((product) => {
          const Icon = getProductIcon(product.category);
          const isAdded = addedId === product.id;
          const wishlisted = isWishlisted(product.id);

          return (
            <div
              key={product.id}
              className="group relative flex flex-col sm:flex-row items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-red/50 shadow-sm hover:shadow-md transition-all gap-4"
            >
              {/* Product Thumbnail / Icon */}
              <div className="relative flex-shrink-0 flex h-20 w-20 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-brand-red transition-colors border border-slate-200">
                <Icon className="h-9 w-9" />
                <span className="absolute -top-1.5 -left-1.5 bg-brand-red text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm uppercase">
                  Best Seller
                </span>
              </div>

              {/* Product Details */}
              <div className="flex-1 text-center sm:text-left min-w-0">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    {product.brand} • {product.categoryName}
                  </span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">
                      ({product.reviewCount})
                    </span>
                  </div>
                </div>

                <h4
                  onClick={() => openQuickView(product)}
                  className="font-extrabold text-sm text-slate-900 hover:text-brand-red cursor-pointer transition-colors truncate"
                  title={product.name}
                >
                  {product.name}
                </h4>

                {/* Specs Chips */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mt-1.5">
                  {product.features.slice(0, 3).map((spec, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded truncate max-w-[140px]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <div className="text-left sm:text-right">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-black text-brand-red">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-brand-accent-green">
                      {product.discount}
                    </span>
                    <span className="text-[9px] text-slate-400">
                      ({product.warranty.split(" ")[0]} {product.warranty.split(" ")[1]})
                    </span>
                  </div>
                </div>

                {/* Actions: Quick View, Wishlist & Add to Cart */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => openQuickView(product)}
                    className="p-2 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-brand-red bg-slate-50 hover:bg-white transition-colors"
                    title="Quick View specifications"
                    aria-label="Quick View"
                  >
                    <Eye className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-2 rounded-xl border transition-colors ${
                      wishlisted
                        ? "bg-red-50 border-brand-red text-brand-red"
                        : "border-slate-200 text-slate-600 hover:text-brand-red bg-slate-50 hover:bg-white"
                    }`}
                    title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    aria-label="Toggle Wishlist"
                  >
                    <Heart
                      className={`h-3.5 w-3.5 ${wishlisted ? "fill-brand-red" : ""}`}
                    />
                  </button>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                      isAdded
                        ? "bg-brand-accent-green text-white"
                        : "bg-brand-red text-white hover:bg-brand-red-600 active:scale-95 shadow-brand-red/20"
                    }`}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Added</span>
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
        })}
      </div>
    </div>
  );
}
