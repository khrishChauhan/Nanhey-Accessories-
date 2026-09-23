"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Cctv,
  CreditCard,
  CheckCircle2,
  FileText,
  Package,
} from "lucide-react";
import GSTQuotationModal from "@/components/quote/GSTQuotationModal";
import OrderTrackingModal from "@/components/tracking/OrderTrackingModal";

interface FooterProps {
  onRequestInstallation?: () => void;
}

export default function Footer({ onRequestInstallation }: FooterProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "CCTV Package Builder", href: "/#builder" },
    { label: "Best Selling Cameras", href: "/#bestsellers" },
    { label: "Request Installation", href: "/installation" },
    { label: "AMC & Maintenance Contracts", href: "/amc" },
    { label: "Dealer & Bulk Trade Desk", href: "/dealer" },
    { label: "Contact & Showroom Map", href: "/contact" },
  ];

  const categories = [
    { label: "HD Analog Cameras", href: "/#catalog" },
    { label: "IP Network Cameras", href: "/#catalog" },
    { label: "Wireless WiFi Cameras", href: "/#catalog" },
    { label: "PTZ 360° Speed Domes", href: "/#catalog" },
    { label: "DVR & NVR Recorders", href: "/#catalog" },
    { label: "Surveillance Hard Disks", href: "/#catalog" },
    { label: "CCTV Cables & Connectors", href: "/#catalog" },
  ];

  const policies = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Shipping & Delivery Policy", href: "#" },
    { label: "Return & Refund Policy", href: "#" },
    { label: "Warranty Support Guide", href: "#" },
  ];

  return (
    <footer id="about" className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-14 pb-20 sm:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Company Profile (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red to-red-700 text-white shadow-lg shadow-brand-red/30">
                <ShieldCheck className="h-6 w-6" />
                <div className="absolute -bottom-1 -right-1 bg-slate-950 rounded-full p-0.5 border border-white">
                  <Cctv className="h-3 w-3 text-brand-red" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xl font-black tracking-tight text-white">
                    NANHEY
                  </span>
                  <span className="text-xl font-light tracking-tight text-brand-red">
                    ACCESSORIES
                  </span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Your Trusted Security Partner
                </p>
              </div>
            </Link>

            <p className="text-slate-300 leading-relaxed text-xs max-w-sm">
              Nanhey Accessories is Begusarai's premier CCTV surveillance, biometric security, and IT solutions destination. We deliver authentic equipment, transparent pricing, and meticulous turnkey installation for homes, retail, institutions, and industrial sites.
            </p>

            {/* Address & Direct Hotlines */}
            <div className="space-y-2.5 pt-2 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Ambedkar Chowk, Kacahari Road, Begusarai, Bihar – 851101
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-accent-green shrink-0" />
                <a
                  href="tel:+919065224224"
                  className="font-bold text-white hover:text-brand-red transition-colors"
                >
                  +91 9065224224
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-red shrink-0" />
                <a
                  href="mailto:info@nanheyaccessories.com"
                  className="hover:text-white transition-colors"
                >
                  info@nanheyaccessories.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                <span>Mon – Sat: 9:30 AM to 8:30 PM (Sunday On Call)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-l-2 border-brand-red pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-red transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 text-slate-600 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-l-2 border-brand-red pl-2">
              Top Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <Link
                    href={cat.href}
                    className="hover:text-brand-red transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 text-slate-600 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                    <span>{cat.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Customer Support, Quotations & Tracking */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-l-2 border-brand-red pl-2">
              Services & Tools
            </h4>
            <ul className="space-y-2">
              {policies.map((p, idx) => (
                <li key={idx}>
                  <a
                    href={p.href}
                    className="hover:text-brand-red transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 text-slate-600 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all" />
                    <span>{p.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Live Order Tracking Trigger */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => setIsTrackingModalOpen(true)}
                className="w-full flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-brand-accent-green font-bold py-2 px-3 rounded-xl border border-slate-700 hover:border-brand-accent-green transition-colors text-[11px]"
              >
                <Package className="h-4 w-4" />
                <span>Track Live Order & Technician</span>
              </button>

              {/* Instant Quotation Generator Trigger Button */}
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-3 rounded-xl border border-slate-700 hover:border-brand-red transition-colors text-[11px]"
              >
                <FileText className="h-4 w-4 text-brand-red" />
                <span>Instant Proforma Quotation</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Payments & Copyright */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center md:text-left text-[11px]">
            © {new Date().getFullYear()} <strong className="text-white">Nanhey Accessories</strong>. All rights reserved. 
            Ambedkar Chowk, Begusarai, Bihar.
          </p>

          {/* Accepted Payment Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mr-2">
              We Accept:
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[10px] font-bold text-slate-300">
              UPI / QR
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[10px] font-bold text-slate-300">
              RuPay
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[10px] font-bold text-slate-300">
              Visa / Master
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[10px] font-bold text-slate-300">
              NetBanking
            </span>
            <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[10px] font-bold text-brand-accent-green">
              Cash on Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Embedded Quotation Modal */}
      <GSTQuotationModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Embedded Live Order Tracking Modal */}
      <OrderTrackingModal
        isOpen={isTrackingModalOpen}
        onClose={() => setIsTrackingModalOpen(false)}
      />
    </footer>
  );
}
