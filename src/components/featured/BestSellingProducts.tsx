"use client";

import React, { useState } from "react";
import {
  Check,
  Eye,
  Heart,
  Video,
  HardDrive,
  Wifi,
  Cable,
  Cpu,
  Cctv,
  Plus,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

export default function BestSellingProducts() {
  const { addToCart, toggleWishlist, isWishlisted, openQuickView } = useShop();
  const [addedId, setAddedId] = useState<string | null>(null);

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

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  return (
    <div id="bestsellers" className="w-full flex flex-col h-full space-y-4">
      {/* Section Title */}
      <div className="flex items-baseline justify-between pb-2 border-b border-zinc-200/80">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-0.5">
            Verified Demand
          </span>
          <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
            Popular Equipment
          </h3>
        </div>
        <span className="text-xs text-zinc-400 hidden sm:inline">
          Begusarai Best Sellers
        </span>
      </div>

      {/* Product List */}
      <div className="space-y-2.5 flex-1 w-full overflow-y-auto pr-1">
        {bestSellers.map((product) => {
          const Icon = getProductIcon(product.category);
          const isAdded = addedId === product.id;
          const wishlisted = isWishlisted(product.id);

          return (
            <div
              key={product.id}
              onClick={() => openQuickView(product)}
              className="w-full group flex flex-col sm:flex-row items-center justify-between p-3 rounded-lg bg-white border border-zinc-200/70 hover:border-zinc-300 transition-colors gap-3 cursor-pointer"
            >
              {/* Product Thumbnail / Icon */}
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded bg-zinc-50 text-zinc-600 border border-zinc-100 group-hover:bg-zinc-100/60 transition-colors">
                <Icon className="h-6 w-6 stroke-[1.5]" />
              </div>

              {/* Product Details */}
              <div className="flex-1 text-center sm:text-left min-w-0">
                <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">
                  {product.brand}
                </span>

                <h4
                  className="font-semibold text-xs text-zinc-900 group-hover:text-zinc-600 transition-colors truncate"
                  title={product.name}
                >
                  {product.name}
                </h4>

                <span className="text-[11px] text-zinc-400 mt-0.5 block truncate">
                  {product.features[0] || product.categoryName}
                </span>
              </div>

              {/* Price & Action */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-100">
                <div className="text-left sm:text-right">
                  <span className="text-xs font-bold text-zinc-950 block tabular-nums">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-medium">
                    {product.warranty.split(" ")[0]} {product.warranty.split(" ")[1]} War.
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
