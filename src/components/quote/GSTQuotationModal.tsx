"use client";

import React, { useState } from "react";
import {
  X,
  Printer,
  FileText,
  Share2,
  Building,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Cctv,
} from "lucide-react";
import { useShop } from "@/context/ShopContext";

interface GSTQuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GSTQuotationModal({
  isOpen,
  onClose,
}: GSTQuotationModalProps) {
  const { cart, cartTotal, cartTotalFormatted } = useShop();

  const [customerName, setCustomerName] = useState("B2B Enterprise Client");
  const [companyName, setCompanyName] = useState("M/s ABC Enterprises");
  const [customerGstin, setCustomerGstin] = useState("10AAACH1234F1Z1");
  const [address, setAddress] = useState("Begusarai, Bihar - 851101");
  const [quotationNo] = useState(() => `NA-QT-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  const [quotationDate] = useState(() => new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }));

  if (!isOpen) return null;

  // Fallback items if cart is empty
  const quoteItems = cart.length > 0 ? cart : [
    {
      product: {
        id: "sample-1",
        name: "CP Plus 2.4MP Full Color Guard+ Bullet Camera (Audio)",
        category: "hd-camera" as const,
        brand: "CP Plus" as const,
        categoryName: "HD CCTV Camera",
        price: 1499,
        originalPrice: 1999,
        discount: "25% OFF",
        rating: 4.9,
        reviewCount: 142,
        inStock: true,
        warranty: "2 Years",
        features: [],
        specs: {},
        description: "",
      },
      quantity: 4,
    },
    {
      product: {
        id: "sample-2",
        name: "CP Plus 4 Channel 1080P Full HD Digital Video Recorder",
        category: "dvr" as const,
        brand: "CP Plus" as const,
        categoryName: "DVR",
        price: 2999,
        originalPrice: 3999,
        discount: "25% OFF",
        rating: 4.8,
        reviewCount: 98,
        inStock: true,
        warranty: "2 Years",
        features: [],
        specs: {},
        description: "",
      },
      quantity: 1,
    },
    {
      product: {
        id: "sample-3",
        name: "Seagate SkyHawk 1TB Surveillance Hard Drive",
        category: "hard-disk" as const,
        brand: "Seagate" as const,
        categoryName: "Hard Disk",
        price: 4500,
        originalPrice: 5500,
        discount: "18% OFF",
        rating: 4.9,
        reviewCount: 312,
        inStock: true,
        warranty: "3 Years",
        features: [],
        specs: {},
        description: "",
      },
      quantity: 1,
    },
  ];

  const totalAmount = quoteItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const taxableBase = Math.round(totalAmount / 1.18);
  const totalGst = totalAmount - taxableBase;
  const cgst = Math.round(totalGst / 2);
  const sgst = totalGst - cgst;

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `*PROFORMA QUOTATION - Nanhey Accessories*\n` +
      `Quote No: ${quotationNo}\n` +
      `Date: ${quotationDate}\n` +
      `Customer: ${companyName || customerName}\n` +
      `GSTIN: ${customerGstin || "N/A"}\n` +
      `Total Amount: ₹${totalAmount.toLocaleString("en-IN")} (Inclusive of 18% GST)\n` +
      `Store: Ambedkar Chowk, Begusarai, Bihar\n` +
      `Helpline: +91 9065224224`
    );
    window.open(`https://wa.me/919065224224?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200 my-auto print:border-none print:shadow-none print:max-w-full">
        {/* Top Control Header (Hidden when printing) */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-brand-red" />
            <h3 className="font-bold text-sm sm:text-base">
              GST Proforma Invoice & Official Quotation Generator
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-brand-red hover:bg-brand-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
            >
              <Printer className="h-4 w-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleShareWhatsApp}
              className="hidden sm:flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
            >
              <Share2 className="h-4 w-4" />
              <span>Share via WhatsApp</span>
            </button>

            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors ml-2"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Customizable Metadata Drawer (Hidden when printing) */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 print:hidden text-xs">
          <p className="font-bold text-slate-700 mb-2 uppercase tracking-wider text-[11px]">
            Quotation Recipient Details (Customize on the fly):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <input
              type="text"
              placeholder="Company / Firm Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="rounded-lg border border-slate-200 px-2.5 py-1.5 bg-white text-xs"
            />
            <input
              type="text"
              placeholder="Contact Person Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="rounded-lg border border-slate-200 px-2.5 py-1.5 bg-white text-xs"
            />
            <input
              type="text"
              placeholder="Recipient GSTIN (Optional)"
              value={customerGstin}
              onChange={(e) => setCustomerGstin(e.target.value)}
              className="rounded-lg border border-slate-200 px-2.5 py-1.5 bg-white text-xs font-mono"
            />
            <input
              type="text"
              placeholder="Address / City"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="rounded-lg border border-slate-200 px-2.5 py-1.5 bg-white text-xs"
            />
          </div>
        </div>

        {/* Printable Invoice / Quotation Sheet */}
        <div className="p-6 sm:p-10 bg-white text-slate-900 space-y-6 printable-quotation text-xs">
          {/* Header Row: Company Letterhead & Quotation Tag */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b-2 border-slate-800">
            {/* Left: Nanhey Accessories Details */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-white shadow-sm print:border print:border-black">
                  <Cctv className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-black tracking-tight text-slate-900 leading-none">
                    NANHEY ACCESSORIES
                  </h1>
                  <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest mt-0.5">
                    CCTV & Security Solutions • Your Trusted Security Partner
                  </p>
                </div>
              </div>

              <div className="text-[11px] text-slate-600 space-y-0.5 pt-2">
                <p className="font-semibold text-slate-800">
                  Ambedkar Chowk, Kacahari Road, Begusarai, Bihar – 851101
                </p>
                <p>Phone: +91 9065224224 | Email: info@nanheyaccessories.com</p>
                <p>GSTIN: <span className="font-mono font-bold text-slate-800">10AAGFN4224J1ZV</span> | State Code: 10 (Bihar)</p>
              </div>
            </div>

            {/* Right: Quotation Metadata */}
            <div className="sm:text-right bg-slate-50 sm:bg-transparent p-3 sm:p-0 rounded-xl w-full sm:w-auto">
              <div className="inline-block bg-brand-red text-white font-black text-xs uppercase px-3 py-1 rounded tracking-wider mb-2">
                PROFORMA QUOTATION
              </div>
              <div className="text-[11px] text-slate-700 space-y-0.5 font-medium">
                <p>Quotation Ref: <strong className="font-mono text-slate-900">{quotationNo}</strong></p>
                <p>Date: <strong className="text-slate-900">{quotationDate}</strong></p>
                <p>Validity: <strong>15 Days from Date of Issue</strong></p>
                <p>Place of Supply: <strong>Begusarai (10 - Bihar)</strong></p>
              </div>
            </div>
          </div>

          {/* Billed To / Client Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Customer / Billed To:
              </p>
              <h4 className="text-sm font-black text-slate-900 mt-0.5">
                {companyName || customerName}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">Attn: {customerName}</p>
              <p className="text-xs text-slate-600">{address}</p>
              {customerGstin && (
                <p className="text-xs text-slate-700 font-medium mt-1">
                  Customer GSTIN: <span className="font-mono font-bold">{customerGstin}</span>
                </p>
              )}
            </div>

            <div className="sm:text-right text-xs text-slate-600 space-y-1">
              <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Payment Terms & Dispatch:
              </p>
              <p>Payment: <strong>100% on Dispatch / Delivery</strong></p>
              <p>Dispatch Mode: <strong>Doorstep / Local Handover</strong></p>
              <p>Warranty: <strong>Original Brand Manufacturer Warranty</strong></p>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                  <th className="p-2.5 border border-slate-800 text-center w-10">#</th>
                  <th className="p-2.5 border border-slate-800">Item Description & Specifications</th>
                  <th className="p-2.5 border border-slate-800 text-center">HSN/SAC</th>
                  <th className="p-2.5 border border-slate-800 text-center">Qty</th>
                  <th className="p-2.5 border border-slate-800 text-right">Unit Rate (₹)</th>
                  <th className="p-2.5 border border-slate-800 text-right">Total (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs">
                {quoteItems.map((item, idx) => {
                  const lineTotal = item.product.price * item.quantity;
                  const hsnCode = item.product.category === "hard-disk" ? "8471" : "8525";

                  return (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-2.5 border border-slate-200 text-center font-bold text-slate-500">
                        {idx + 1}
                      </td>
                      <td className="p-2.5 border border-slate-200">
                        <span className="font-bold text-slate-900 block">
                          {item.product.name}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Brand: {item.product.brand} | {item.product.warranty}
                        </span>
                      </td>
                      <td className="p-2.5 border border-slate-200 text-center font-mono text-[11px]">
                        {hsnCode}
                      </td>
                      <td className="p-2.5 border border-slate-200 text-center font-bold">
                        {item.quantity}
                      </td>
                      <td className="p-2.5 border border-slate-200 text-right font-mono">
                        {item.product.price.toLocaleString("en-IN")}
                      </td>
                      <td className="p-2.5 border border-slate-200 text-right font-black font-mono">
                        {lineTotal.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Calculation Breakdown & Bank Details */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start pt-2">
            {/* Left: Bank / Payment Info & Seal (7 cols) */}
            <div className="sm:col-span-7 space-y-4">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-[11px] space-y-1">
                <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
                  Bank Transfer Details (NEFT / RTGS / IMPS):
                </p>
                <p>Bank: <strong>State Bank of India (SBI)</strong></p>
                <p>A/C Name: <strong>NANHEY ACCESSORIES</strong></p>
                <p>A/C No: <strong className="font-mono">38291048291</strong></p>
                <p>IFSC Code: <strong className="font-mono">SBIN0000031</strong> (Begusarai Main Branch)</p>
                <p>UPI ID: <strong className="font-mono">9065224224@okbizaxis</strong></p>
              </div>

              <div className="text-[10px] text-slate-500 space-y-0.5">
                <p className="font-bold text-slate-700">Terms & Conditions:</p>
                <p>1. Goods once sold are covered under respective brand warranty terms.</p>
                <p>2. Begusarai jurisdiction applies for all commercial disputes.</p>
                <p>3. This is an electronically generated proforma quotation valid for 15 days.</p>
              </div>
            </div>

            {/* Right: Tax Breakdown Summary (5 cols) */}
            <div className="sm:col-span-5 rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Taxable Base Value:</span>
                <span className="font-bold font-mono">₹{taxableBase.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>CGST @ 9%:</span>
                <span className="font-mono">₹{cgst.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>SGST @ 9%:</span>
                <span className="font-mono">₹{sgst.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Round Off:</span>
                <span className="font-mono">₹0.00</span>
              </div>

              <div className="border-t-2 border-slate-800 pt-2 flex justify-between items-baseline font-black text-slate-900 text-sm">
                <span>Grand Total (INR):</span>
                <span className="text-base text-brand-red font-mono">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Authorized Signatory Stamp */}
              <div className="pt-6 text-center sm:text-right">
                <div className="inline-block border-t border-slate-400 pt-1 text-[11px] font-bold text-slate-800">
                  <p className="leading-tight">For NANHEY ACCESSORIES</p>
                  <p className="text-[10px] text-slate-500 font-normal mt-3">Authorized Signatory & Seal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
