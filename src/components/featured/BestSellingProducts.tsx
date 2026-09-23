"use client";

import React, { useState } from "react";
import {
  Star,
  ShoppingCart,
  Check,
  Eye,
  ShieldCheck,
  Video,
  HardDrive,
  Wifi,
  Cable,
  Cpu,
} from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  discount: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  warranty: string;
  icon: React.ElementType;
  badge?: string;
  specs: string[];
}

interface BestSellingProductsProps {
  onAddToCart?: (product: ProductItem) => void;
}

export default function BestSellingProducts({
  onAddToCart,
}: BestSellingProductsProps) {
  const [addedId, setAddedId] = useState<string | null>(null);

  const products: ProductItem[] = [
    {
      id: "prod-1",
      name: "CP Plus 2.4MP Full Color Camera",
      category: "HD CCTV Camera",
      price: 1499,
      mrp: 1999,
      discount: "25% OFF",
      rating: 4.9,
      reviewsCount: 142,
      inStock: true,
      warranty: "2 Yrs Warranty",
      icon: Video,
      badge: "Best Seller",
      specs: ["20M Warm LED", "Full Color Night", "Weatherproof IP67"],
    },
    {
      id: "prod-2",
      name: "CP Plus 4 Channel DVR",
      category: "Digital Recorders",
      price: 2999,
      mrp: 3999,
      discount: "25% OFF",
      rating: 4.8,
      reviewsCount: 98,
      inStock: true,
      warranty: "2 Yrs Warranty",
      icon: Cpu,
      badge: "Top Choice",
      specs: ["1080P Full HD", "H.265+ Compression", "Mobile View App"],
    },
    {
      id: "prod-3",
      name: "WiFi Smart Camera 2MP",
      category: "Wireless Smart Cam",
      price: 2499,
      mrp: 3299,
      discount: "24% OFF",
      rating: 4.9,
      reviewsCount: 210,
      inStock: true,
      warranty: "1 Yr Replacement",
      icon: Wifi,
      badge: "Smart Home",
      specs: ["360° Pan & Tilt", "Two-Way Audio", "MicroSD Slot"],
    },
    {
      id: "prod-4",
      name: "1TB Hard Disk Surveillance",
      category: "Surveillance Storage",
      price: 4500,
      mrp: 5500,
      discount: "18% OFF",
      rating: 4.9,
      reviewsCount: 312,
      inStock: true,
      warranty: "3 Yrs Brand Warranty",
      icon: HardDrive,
      badge: "24x7 Record",
      specs: ["Seagate / WD Purple", "SATA 6Gb/s", "Low Power Draw"],
    },
    {
      id: "prod-5",
      name: "90 Meter CCTV Cable High Quality",
      category: "Wiring & Cables",
      price: 1800,
      mrp: 2200,
      discount: "18% OFF",
      rating: 4.7,
      reviewsCount: 84,
      inStock: true,
      warranty: "Pure Copper",
      icon: Cable,
      badge: "High Grade",
      specs: ["3+1 Coaxial", "Flame Retardant", "Pure Copper Core"],
    },
  ];

  const handleAddToCart = (product: ProductItem) => {
    setAddedId(product.id);
    if (onAddToCart) {
      onAddToCart(product);
    }
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
        {products.map((product) => {
          const Icon = product.icon;
          const isAdded = addedId === product.id;

          return (
            <div
              key={product.id}
              className="group relative flex flex-col sm:flex-row items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-brand-red/50 shadow-sm hover:shadow-md transition-all gap-4"
            >
              {/* Product Thumbnail / Icon */}
              <div className="relative flex-shrink-0 flex h-20 w-20 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-brand-red transition-colors border border-slate-200">
                <Icon className="h-9 w-9" />
                {product.badge && (
                  <span className="absolute -top-1.5 -left-1.5 bg-brand-red text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm uppercase">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="flex-1 text-center sm:text-left min-w-0">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    {product.category}
                  </span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">
                      ({product.reviewsCount})
                    </span>
                  </div>
                </div>

                <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-brand-red transition-colors truncate">
                  {product.name}
                </h4>

                {/* Specs Chips */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 mt-1.5">
                  {product.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded"
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
                      ₹{product.mrp.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-brand-accent-green">
                      {product.discount}
                    </span>
                    <span className="text-[9px] text-slate-400">
                      ({product.warranty})
                    </span>
                  </div>
                </div>

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
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
