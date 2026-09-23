"use client";

import React, { useState } from "react";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  FileText,
  CheckCircle2,
  Cctv,
} from "lucide-react";
import { useShop } from "@/context/ShopContext";

interface CartDrawerProps {
  onRequestGSTQuotation?: () => void;
}

export default function CartDrawer({ onRequestGSTQuotation }: CartDrawerProps) {
  const {
    cart,
    cartCount,
    cartTotal,
    cartTotalFormatted,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useShop();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  if (!isCartOpen) return null;

  // 18% GST Breakdown (GST inclusive calculation standard for retail)
  const gstRate = 0.18;
  const taxableAmount = Math.round(cartTotal / (1 + gstRate));
  const totalGst = cartTotal - taxableAmount;
  const cgst = Math.round(totalGst / 2);
  const sgst = totalGst - cgst;

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    let itemsList = "";
    cart.forEach((item, index) => {
      const lineTotal = (item.product.price * item.quantity).toLocaleString("en-IN");
      itemsList += `${index + 1}. *${item.quantity}x* ${item.product.name} (₹${lineTotal})\n`;
    });

    const message = encodeURIComponent(
      `*🚨 New CCTV Order Inquiry - Nanhey Accessories*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      (customerName ? `👤 *Customer:* ${customerName} (${customerPhone || "Begusarai"})\n` : "") +
      `📦 *Items List:*\n${itemsList}` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `💵 *Taxable Value:* ₹${taxableAmount.toLocaleString("en-IN")}\n` +
      `📑 *GST (18% Included):* ₹${totalGst.toLocaleString("en-IN")}\n` +
      `🚚 *Delivery:* FREE (Begusarai & Bihar)\n` +
      `⭐ *Grand Total:* ${cartTotalFormatted}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `📍 Store: Ambedkar Chowk, Kacahari Road, Begusarai\n` +
      `Please confirm stock availability and delivery schedule.`
    );

    window.open(`https://wa.me/919065224224?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Frosted Glass Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-[#090D14]/70 backdrop-blur-md transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-200">
          {/* Header - Obsidian Onyx Styling */}
          <div className="bg-[#090D14] text-white px-5 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-ruby text-white shadow-ruby">
                <ShoppingBag className="h-5 w-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base font-black tracking-tight flex items-center gap-2">
                  <span>Shopping Cart</span>
                  <span className="bg-brand-ruby text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-ruby">
                    {cartCount} {cartCount === 1 ? "Item" : "Items"}
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400">
                  Nanhey Accessories • Begusarai Showroom
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-red-400 px-2 py-1 rounded transition-colors"
                  title="Clear Cart"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={closeCart}
                className="rounded-xl p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-all"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/70">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100 text-slate-400 mb-4 border border-slate-200 shadow-sm">
                  <Cctv className="h-10 w-10 text-slate-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-800">
                  Your Security Cart is Empty
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mt-1 mb-6">
                  Explore our HD CCTV cameras, smart WiFi devices, and DVR packages to secure your premises.
                </p>
                <button
                  onClick={closeCart}
                  className="bg-brand-ruby text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-ruby hover:bg-brand-ruby-600 active:scale-95 transition-all"
                >
                  Browse CCTV Products
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const lineTotal = item.product.price * item.quantity;
                return (
                  <div
                    key={item.product.id}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-card-hover transition-all"
                  >
                    {/* Item Thumbnail */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50 text-slate-700 shrink-0 border border-slate-200/80">
                      <Cctv className="h-8 w-8 text-brand-ruby" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {item.product.brand}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-brand-ruby p-1 rounded-lg hover:bg-slate-100 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <h4 className="text-xs font-bold text-slate-900 leading-tight line-clamp-2 mt-0.5">
                        {item.product.name}
                      </h4>

                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          {item.product.warranty}
                        </span>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-100">
                        {/* Qty Controls */}
                        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 shadow-inner">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="p-1.5 hover:bg-slate-200 rounded-l-xl text-slate-600 active:scale-95 transition-all"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2.5 text-xs font-black text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="p-1.5 hover:bg-slate-200 rounded-r-xl text-slate-600 active:scale-95 transition-all"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-xs font-black text-brand-ruby">
                            ₹{lineTotal.toLocaleString("en-IN")}
                          </span>
                          {item.quantity > 1 && (
                            <span className="block text-[10px] text-slate-400">
                              (₹{item.product.price.toLocaleString("en-IN")} each)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Order Summary */}
          {cart.length > 0 && (
            <div className="border-t border-slate-200 bg-white p-4 space-y-3.5 shadow-xl">
              {/* Optional Quick Customer Info */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs focus:border-brand-ruby focus:ring-1 focus:ring-brand-ruby/20 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs focus:border-brand-ruby focus:ring-1 focus:ring-brand-ruby/20 focus:outline-none"
                />
              </div>

              {/* Price Breakdown */}
              <div className="rounded-2xl bg-slate-50 p-3.5 border border-slate-200/80 text-xs space-y-1.5 text-slate-600">
                <div className="flex justify-between">
                  <span>Taxable Base Value:</span>
                  <span className="font-semibold text-slate-800">
                    ₹{taxableAmount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>CGST (9%) + SGST (9%):</span>
                  <span>₹{totalGst.toLocaleString("en-IN")} (Included)</span>
                </div>
                <div className="flex justify-between items-center text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Truck className="h-3.5 w-3.5 text-emerald-500" />
                    Delivery Charges:
                  </span>
                  <span className="font-bold text-emerald-600 uppercase text-[11px]">
                    FREE (Begusarai & Bihar)
                  </span>
                </div>
                <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between items-baseline font-black text-slate-900 text-sm">
                  <span>Grand Total:</span>
                  <span className="text-lg text-brand-ruby">
                    {cartTotalFormatted}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                {/* 1. WhatsApp Order Button */}
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs py-3 rounded-lg transition-colors group"
                >
                  <span>Order via WhatsApp</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* 2. GST Invoice Request Button */}
                <button
                  onClick={() => {
                    closeCart();
                    if (onRequestGSTQuotation) onRequestGSTQuotation();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 bg-white hover:bg-zinc-50 text-zinc-700 font-medium text-xs py-2.5 rounded-lg border border-zinc-200 transition-colors"
                >
                  <FileText className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Request Official GST Quotation</span>
                </button>
              </div>

              {/* GST Assurance Note */}
              <div className="text-[10px] text-center text-zinc-400 flex items-center justify-center gap-1">
                <ShieldCheck className="h-3 w-3 text-zinc-400" />
                <span>GST Tax Invoice provided with every order • Begusarai Showroom</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
