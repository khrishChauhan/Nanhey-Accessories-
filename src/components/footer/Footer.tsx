"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Cctv,
  Package,
  FileText,
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
    { label: "About", href: "/about" },
    { label: "Package Configurator", href: "/#builder" },
    { label: "Equipment Catalog", href: "/#catalog" },
    { label: "Installation Service", href: "/installation" },
    { label: "AMC Contract", href: "/amc" },
    { label: "Dealer Desk", href: "/dealer" },
    { label: "Showroom Contact", href: "/contact" },
  ];

  const categories = [
    { label: "HD Analog Cameras", href: "/#catalog" },
    { label: "IP Network Cameras", href: "/#catalog" },
    { label: "Smart WiFi Cameras", href: "/#catalog" },
    { label: "PTZ Speed Domes", href: "/#catalog" },
    { label: "DVR / NVR Recorders", href: "/#catalog" },
    { label: "Surveillance Hard Disks", href: "/#catalog" },
    { label: "Cables & Power SMPS", href: "/#catalog" },
  ];

  const policies = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Delivery & Shipping", href: "#" },
    { label: "Returns & Warranty", href: "#" },
  ];

  return (
    <footer id="about" className="bg-[#09090B] text-zinc-400 border-t border-zinc-800 pt-16 pb-32 sm:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Company Profile (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Official Logo */}
            <Link href="/" className="inline-block py-1 group">
              <Image
                src="/images/logo.png"
                alt="Nanhey Accessories – CCTV & Security Solutions Begusarai"
                width={190}
                height={52}
                className="h-9 w-auto object-contain brightness-105 transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-zinc-400 leading-relaxed text-xs max-w-sm">
              Authorized provider of enterprise-grade CCTV surveillance, network storage, and professional turnkey installation across Begusarai and Bihar.
            </p>

            {/* Address & Direct Hotlines */}
            <div className="space-y-2 pt-2 text-zinc-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>Ambedkar Chowk, Kacahari Road, Begusarai, Bihar – 851101</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zinc-500 shrink-0" />
                <a href="tel:+919065224224" className="text-zinc-300 hover:text-white transition-colors tabular-nums">
                  +91 9065224224
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zinc-500 shrink-0" />
                <a href="mailto:info@nanheyaccessories.com" className="text-zinc-300 hover:text-white transition-colors">
                  info@nanheyaccessories.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <Clock className="h-4 w-4 text-zinc-600 shrink-0" />
                <span>Mon – Sat: 9:30 AM to 8:30 PM</span>
              </div>
            </div>
          </div>

          {/* Columns 2-4: Clean 2-column grid on mobile (< 768px), 3 columns on tablet/desktop */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Navigation
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-white transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Hardware
              </h4>
              <ul className="space-y-2">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <Link
                      href={cat.href}
                      className="text-zinc-400 hover:text-white transition-colors block"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Tools */}
            <div className="col-span-2 sm:col-span-1 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Services & Tools
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                {policies.map((p, idx) => (
                  <li key={idx}>
                    <a
                      href={p.href}
                      className="text-zinc-400 hover:text-white transition-colors block"
                    >
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="pt-3 grid grid-cols-2 sm:grid-cols-1 gap-2">
                <button
                  onClick={() => setIsTrackingModalOpen(true)}
                  className="w-full flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 py-2 px-2.5 rounded border border-zinc-800 text-xs transition-colors"
                >
                  <Package className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  <span className="truncate">Track Order</span>
                </button>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 py-2 px-2.5 rounded border border-zinc-800 text-xs transition-colors"
                >
                  <FileText className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  <span className="truncate">Quotation</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Payments & Copyright with safe mb-4 */}
        <div className="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center md:text-left mb-4">
          <p>
            © {new Date().getFullYear()} Nanhey Accessories. Ambedkar Chowk, Begusarai, Bihar.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2.5 sm:gap-3 text-[11px] text-zinc-400">
            <span>UPI</span>
            <span>•</span>
            <span>RuPay</span>
            <span>•</span>
            <span>Visa / Master</span>
            <span>•</span>
            <span>NetBanking</span>
            <span>•</span>
            <span>Cash on Delivery</span>
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
