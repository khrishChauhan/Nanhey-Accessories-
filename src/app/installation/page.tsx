"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileBottomBar from "@/components/mobile/MobileBottomBar";
import CartDrawer from "@/components/cart/CartDrawer";
import ProductQuickViewModal from "@/components/product/ProductQuickViewModal";
import InstallationModal from "@/components/modal/InstallationModal";
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Calendar,
  Clock,
  MapPin,
  Building,
  Sparkles,
  ArrowRight,
  Headphones,
  Check,
  AlertCircle,
} from "lucide-react";

export default function InstallationPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    propertyType: "Home / Residential",
    serviceType: "New CCTV Camera Installation",
    cameraCount: "4 Cameras",
    preferredDate: "",
    preferredSlot: "Morning (10:00 AM - 1:00 PM)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `*🚨 New CCTV Installation / Service Request - Begusarai*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || "N/A"}\n` +
      `📍 *Address:* ${formData.address}\n` +
      `🏠 *Property:* ${formData.propertyType}\n` +
      `🔧 *Service:* ${formData.serviceType}\n` +
      `📹 *Camera Count:* ${formData.cameraCount}\n` +
      `📅 *Date:* ${formData.preferredDate || "Earliest"}\n` +
      `⏰ *Time Slot:* ${formData.preferredSlot}\n` +
      `📝 *Notes:* ${formData.notes || "Standard installation"}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Please confirm technician availability.`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919065224224?text=${message}`, "_blank");
    }, 600);
  };

  const servicePricing = [
    { service: "Camera Mounting & Focusing", rate: "₹250 - ₹350 / Camera", note: "Includes bracket fixing & angle optimization" },
    { service: "CCTV Cable Laying (3+1 / Cat6)", rate: "₹15 - ₹20 / Meter", note: "Includes saddle clips & neat wall routing" },
    { service: "PVC Casing / Pipe Concealment", rate: "₹30 - ₹40 / Meter", note: "High-grade ISI conduits for zero wire exposure" },
    { service: "DVR / NVR & Hard Drive Setup", rate: "₹500 / Setup", note: "Includes formatting, recording schedule & cloud test" },
    { service: "Mobile App Remote View Setup", rate: "FREE with Installation", note: "Live phone view on iOS & Android devices" },
    { service: "Begusarai Town Site Inspection", rate: "FREE", note: "Zero charges for municipal Begusarai area" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col antialiased mobile-content-wrapper">
      <Header />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e52e06_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-bold uppercase tracking-wider">
            <Wrench className="h-3.5 w-3.5" />
            <span>Authorized Doorstep Service</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            CCTV INSTALLATION & REPAIR SERVICES
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Certified engineers with 10+ years field experience in Begusarai, Barauni, and surrounding Bihar districts. Neat wiring, zero exposed cables, and guaranteed post-setup support.
          </p>
        </div>
      </section>

      {/* Main Content Form & Benefits */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h2 className="text-xl font-black text-slate-900">
                  Book a Technician Appointment
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Fill in your requirements for instant slot confirmation and WhatsApp dispatch.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase bg-green-50 text-brand-accent-green px-2.5 py-1 rounded-full border border-green-200">
                Same-Day Available
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-brand-accent-green mx-auto">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Booking Request Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our lead installation technician is reviewing your request and will call you on <strong>{formData.phone}</strong> to confirm the exact arrival time.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-brand-red-600 transition-colors shadow-md"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9065224224"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                    />
                  </div>
                </div>

                {/* Email & Full Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm bg-white focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 cursor-pointer"
                    >
                      <option value="Home / Residential">Home / Residential</option>
                      <option value="Retail Shop / Showroom">Retail Shop / Showroom</option>
                      <option value="Office / Corporate">Office / Corporate</option>
                      <option value="Factory / Industrial Plant">Factory / Industrial Plant</option>
                      <option value="School / College / Institute">School / College / Institute</option>
                      <option value="Hospital / Clinic">Hospital / Clinic</option>
                    </select>
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                    Installation Address & Landmark in Begusarai / Bihar *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Near Kali Asthan, Harrakh, Begusarai"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                  />
                </div>

                {/* Service Type & Camera Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm bg-white focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 cursor-pointer"
                    >
                      <option value="New CCTV Camera Installation">New CCTV Camera Installation</option>
                      <option value="System Repair & Troubleshooting">System Repair & Troubleshooting</option>
                      <option value="Camera Relocation / Shifting">Camera Relocation / Shifting</option>
                      <option value="DVR / NVR Password Reset">DVR / NVR Password Reset</option>
                      <option value="Mobile App Remote View Setup">Mobile App Remote View Setup</option>
                      <option value="CCTV Rewiring & Conduit Concealment">CCTV Rewiring & Conduit Concealment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Approximate Camera Count
                    </label>
                    <select
                      value={formData.cameraCount}
                      onChange={(e) => setFormData({ ...formData, cameraCount: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm bg-white focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 cursor-pointer"
                    >
                      <option value="1 - 2 Cameras">1 - 2 Cameras</option>
                      <option value="4 Cameras (Standard)">4 Cameras (Standard)</option>
                      <option value="6 - 8 Cameras">6 - 8 Cameras</option>
                      <option value="16+ Cameras (Enterprise)">16+ Cameras (Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Time Slot
                    </label>
                    <select
                      value={formData.preferredSlot}
                      onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm bg-white focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 cursor-pointer"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                    Special Notes or Fault Description
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 2 cameras not showing night vision, need neat wire casing..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-600 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-brand-red/30 transition-all active:scale-[0.99]"
                >
                  <Wrench className="h-4 w-4" />
                  <span>Book Technician Slot & Send to WhatsApp</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Transparent Pricing & Assurances (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Standard Pricing Guide */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base font-black text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
                <span>Standard Labor & Service Rates</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Begusarai</span>
              </h3>
              <div className="divide-y divide-slate-100 text-xs mt-2">
                {servicePricing.map((item, idx) => (
                  <div key={idx} className="py-2.5 space-y-0.5">
                    <div className="flex justify-between items-baseline font-bold text-slate-800">
                      <span>{item.service}</span>
                      <span className="text-brand-red">{item.rate}</span>
                    </div>
                    <p className="text-[11px] text-slate-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Checklist */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-brand-red">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-xs font-black uppercase tracking-wider text-white">
                  Nanhey Installation Standards
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-brand-accent-green shrink-0 mt-0.5" />
                  <span><strong>Neat Wiring:</strong> Proper casing, saddles, and ceiling concealment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-brand-accent-green shrink-0 mt-0.5" />
                  <span><strong>Power Surge Protection:</strong> Regulated SMPS fused adapters installed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-brand-accent-green shrink-0 mt-0.5" />
                  <span><strong>App Handover:</strong> Full remote view tutorial on all family/staff mobile phones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-brand-accent-green shrink-0 mt-0.5" />
                  <span><strong>Warranty Card:</strong> Official serial number registration & GST bill.</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                Need urgent on-site repair? Call direct hotline:{" "}
                <a href="tel:+919065224224" className="font-bold text-white hover:text-brand-red">
                  +91 9065224224
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomBar onRequestInstallation={() => setIsModalOpen(true)} />
      <CartDrawer />
      <ProductQuickViewModal />
      <InstallationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
