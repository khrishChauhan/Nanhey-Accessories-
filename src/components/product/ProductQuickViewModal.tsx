"use client";

import React, { useState } from "react";
import {
  X,
  Star,
  Check,
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Plus,
  Minus,
  MessageCircle,
  Cctv,
} from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function ProductQuickViewModal() {
  const {
    quickViewProduct,
    closeQuickView,
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useShop();

  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      closeQuickView();
    }, 1000);
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hi Nanhey Accessories! I am inquiring about:\n` +
      `Product: ${product.name}\n` +
      `Brand: ${product.brand}\n` +
      `Price: ₹${product.price.toLocaleString("en-IN")}\n` +
      `Is this available for installation/purchase in Begusarai?`
    );
    window.open(`https://wa.me/919065224224?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090D14]/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header - Obsidian Onyx Styling */}
        <div className="bg-[#090D14] px-6 py-4 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-ruby px-2.5 py-0.5 rounded-full text-white shadow-ruby">
              {product.brand}
            </span>
            <span className="text-xs text-white/20">|</span>
            <span className="text-xs text-slate-300 font-medium">
              {product.categoryName}
            </span>
          </div>

          <button
            onClick={closeQuickView}
            className="rounded-xl p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-all"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Graphic & Trust (5 cols) */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative flex h-52 w-full items-center justify-center rounded-2xl bg-slate-50 border border-slate-200/80 p-4">
                <Cctv className="h-24 w-24 text-slate-700" />
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-brand-ruby text-white text-xs font-black px-2.5 py-0.5 rounded-full shadow-ruby">
                    {product.discount}
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="absolute top-3 right-3 bg-[#090D14] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm uppercase border border-white/10">
                    Best Seller
                  </span>
                )}
              </div>

              {/* Warranty & Delivery Badges */}
              <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-200/80 text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>{product.warranty}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Truck className="h-4 w-4 text-brand-ruby" />
                  <span>Free Begusarai Delivery & Setup Option</span>
                </div>
              </div>
            </div>

            {/* Right Details (7 cols) */}
            <div className="md:col-span-7 space-y-3">
              {/* Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold ml-1 text-slate-800">
                    {product.rating}
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  ({product.reviewCount} Verified Customer Reviews)
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-slate-900 leading-snug">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 pt-1">
                <span className="text-2xl font-black text-brand-ruby">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-xs font-bold text-emerald-500">
                  {product.discount}
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
                <span>In Stock • Ready for Same-Day Begusarai Dispatch</span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Features List */}
              <div className="space-y-1.5 pt-1">
                <p className="text-[11px] font-bold uppercase text-slate-700 tracking-wider">
                  Key Highlights:
                </p>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-600">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="h-3 w-3 text-brand-ruby shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions & Quantity */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center rounded-xl border border-slate-300 bg-white shadow-inner">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-slate-100 rounded-l-xl text-slate-600 active:scale-95 transition-all"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="px-3 text-xs font-black text-slate-800">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-slate-100 rounded-r-xl text-slate-600 active:scale-95 transition-all"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-ruby hover:scale-[1.01] active:scale-95 ${
                      justAdded
                        ? "bg-emerald-500 text-white"
                        : "bg-brand-ruby text-white hover:bg-brand-ruby-600"
                    }`}
                  >
                    {justAdded ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`p-2.5 rounded-xl border transition-all hover:scale-105 active:scale-95 ${
                      wishlisted
                        ? "bg-red-50 border-brand-ruby text-brand-ruby shadow-sm"
                        : "bg-white border-slate-200 text-slate-600 hover:text-brand-ruby"
                    }`}
                    title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className={`h-4 w-4 ${wishlisted ? "fill-brand-ruby" : ""}`}
                    />
                  </button>
                </div>

                {/* Direct WhatsApp Consultation */}
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs py-2.5 rounded-xl hover:scale-[1.01] active:scale-95 transition-all"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>Ask Question via WhatsApp (9065224224)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Technical Specs Table */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="border-t border-slate-200 pt-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-2.5">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <span className="capitalize text-slate-500 font-medium">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>
                    <span className="font-bold text-slate-800 text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
