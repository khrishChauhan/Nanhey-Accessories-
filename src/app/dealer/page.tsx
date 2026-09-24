"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileBottomBar from "@/components/mobile/MobileBottomBar";
import CartDrawer from "@/components/cart/CartDrawer";
import ProductQuickViewModal from "@/components/product/ProductQuickViewModal";
import InstallationModal from "@/components/modal/InstallationModal";
import {
  Building2,
  Percent,
  Truck,
  FileCheck,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Phone,
} from "lucide-react";

export default function DealerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    phone: "",
    email: "",
    gstin: "",
    city: "Begusarai",
    businessType: "CCTV Installer / Contractor",
    monthlyVolume: "₹1,00,000 - ₹3,00,000",
    interestedCategories: ["HD Cameras", "DVR / NVR", "Surveillance Hard Disks"],
    notes: "",
  });

  const [gstinError, setGstinError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Indian GSTIN standard format: 2 numbers, 5 letters, 4 numbers, 1 letter, 1 alphanumeric, 'Z', 1 alphanumeric (15 chars)
  const validateGSTIN = (value: string) => {
    if (!value.trim()) {
      setGstinError("");
      return true;
    }
    const gstinPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/i;
    const cleanVal = value.trim().toUpperCase();
    if (!gstinPattern.test(cleanVal)) {
      setGstinError("Please enter a valid 15-digit Indian GSTIN (e.g. 10ABCDE1234F1Z5)");
      return false;
    }
    setGstinError("");
    return true;
  };

  const handleGSTINChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    setFormData({ ...formData, gstin: val });
    if (val.length === 15) {
      validateGSTIN(val);
    } else if (val.length > 0 && val.length < 15) {
      setGstinError("GSTIN must be 15 alphanumeric characters");
    } else {
      setGstinError("");
    }
  };

  const toggleCategory = (cat: string) => {
    setFormData((prev) => {
      const exists = prev.interestedCategories.includes(cat);
      if (exists) {
        return {
          ...prev,
          interestedCategories: prev.interestedCategories.filter((c) => c !== cat),
        };
      }
      return {
        ...prev,
        interestedCategories: [...prev.interestedCategories, cat],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.gstin && !validateGSTIN(formData.gstin)) {
      return;
    }

    setSubmitted(true);

    const message = encodeURIComponent(
      `*🤝 New Dealer / Bulk Order Registration - Nanhey Accessories*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🏢 *Firm:* ${formData.businessName}\n` +
      `👤 *Contact:* ${formData.contactPerson}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || "N/A"}\n` +
      `📑 *GSTIN:* ${formData.gstin || "Unregistered / Applying"}\n` +
      `📍 *District:* ${formData.city}, Bihar\n` +
      `💼 *Role:* ${formData.businessType}\n` +
      `💰 *Expected Volume:* ${formData.monthlyVolume}\n` +
      `📦 *Categories:* ${formData.interestedCategories.join(", ")}\n` +
      `📝 *Message:* ${formData.notes || "Wholesale price list required"}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Please register our account & share the dealer wholesale price sheet.`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919065224224?text=${message}`, "_blank");
    }, 600);
  };

  const dealerPerks = [
    {
      title: "Wholesale Margin Discounts",
      desc: "Tiered trade discounts on CP Plus, Hikvision, Dahua, Seagate & WD.",
      icon: Percent,
    },
    {
      title: "Same-Day Dispatch in Begusarai",
      desc: "Local pickup from Ambedkar Chowk showroom or express delivery across Bihar.",
      icon: Truck,
    },
    {
      title: "100% GST ITC Input Credit",
      desc: "Tax invoices with clean GST pass-through for complete input credit.",
      icon: FileCheck,
    },
    {
      title: "Instant Warranty Replacement",
      desc: "Walk-in over-the-counter replacement for verified dead-on-arrival (DOA) units.",
      icon: ShieldCheck,
    },
    {
      title: "Technical Installer Support",
      desc: "Direct telephonic guidance for IP camera networking, port forwarding, and NVR setup.",
      icon: Headphones,
    },
    {
      title: "Credit Terms for Registered Integrators",
      desc: "Flexible commercial credit accounts for high-volume repeat installers.",
      icon: Building2,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col antialiased mobile-content-wrapper">
      <Header />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e52e06_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-bold uppercase tracking-wider">
            <Building2 className="h-3.5 w-3.5" />
            <span>B2B Wholesale & Partner Program</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            DEALER & BULK PURCHASING
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Partner with Begusarai's premier surveillance distributor. Best wholesale trade margins, immediate stock availability, and dedicated support for contractors and retailers.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dealer Benefits (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand-red" />
                <span>Why Partner with Nanhey Accessories?</span>
              </h2>
              <div className="space-y-4 mt-4">
                {dealerPerks.map((perk, idx) => {
                  const Icon = perk.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-brand-red shrink-0 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xs font-black text-slate-900 leading-tight">
                          {perk.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                          {perk.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Trade Hotline */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-brand-accent-green font-bold text-xs uppercase tracking-wider">
                <Phone className="h-4 w-4" />
                <span>Wholesale B2B Desk</span>
              </div>
              <p className="text-sm font-bold">
                Looking to order 20+ cameras or bulk 180M cable coils immediately?
              </p>
              <p className="text-xs text-slate-400">
                Speak directly with our B2B trade executive:{" "}
                <a href="tel:+919065224224" className="text-brand-red font-bold hover:underline">
                  +91 9065224224
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: Dealer Registration Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="pb-4 border-b border-slate-100 mb-6">
              <h2 className="text-xl font-black text-slate-900">
                Dealer Registration & Wholesale Inquiry
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Register your business to receive the latest CCTV dealer price catalogue & credit terms.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-brand-accent-green mx-auto">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Dealer Inquiry Submitted!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.contactPerson}</strong> ({formData.businessName}). Our dealer relationship manager will verify your GSTIN/firm and share our wholesale trade rates within 2 hours.
                </p>
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-brand-red-600 transition-colors shadow-md"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Firm Name & Contact Person */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Firm / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mithila Security Systems"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Verma"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9065224224"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="dealer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>
                </div>

                {/* GSTIN & District */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      GSTIN Number (15 Digits)
                    </label>
                    <input
                      type="text"
                      maxLength={15}
                      placeholder="10ABCDE1234F1Z5"
                      value={formData.gstin}
                      onChange={handleGSTINChange}
                      className={`w-full rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm uppercase font-mono tracking-wider focus:outline-none ${
                        gstinError
                          ? "border-red-500 bg-red-50/50"
                          : "border-slate-200 focus:border-brand-red"
                      }`}
                    />
                    {gstinError ? (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {gstinError}
                      </p>
                    ) : (
                      <span className="text-[10px] text-slate-400">
                        Optional for unregistered new electrical technicians
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      District / City in Bihar *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm bg-white focus:border-brand-red focus:outline-none cursor-pointer"
                    >
                      <option value="Begusarai">Begusarai</option>
                      <option value="Khagaria">Khagaria</option>
                      <option value="Samastipur">Samastipur</option>
                      <option value="Munger">Munger</option>
                      <option value="Lakhisarai">Lakhisarai</option>
                      <option value="Patna">Patna</option>
                      <option value="Darbhanga">Darbhanga</option>
                      <option value="Muzaffarpur">Muzaffarpur</option>
                      <option value="Other District in Bihar">Other District in Bihar</option>
                    </select>
                  </div>
                </div>

                {/* Business Type & Monthly Volume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Primary Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm bg-white focus:border-brand-red focus:outline-none cursor-pointer"
                    >
                      <option value="CCTV Installer / Contractor">CCTV Installer / Contractor</option>
                      <option value="Retail Electronics / Computer Store">Retail Electronics / Computer Store</option>
                      <option value="Security System Integrator">Security System Integrator</option>
                      <option value="Government / Institutional Contractor">Government / Institutional Contractor</option>
                      <option value="Commercial End-User Bulk Buyer">Commercial End-User Bulk Buyer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Expected Monthly Volume
                    </label>
                    <select
                      value={formData.monthlyVolume}
                      onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm bg-white focus:border-brand-red focus:outline-none cursor-pointer"
                    >
                      <option value="Under ₹50,000">Under ₹50,000 / month</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 / month</option>
                      <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 / month</option>
                      <option value="₹3,00,000+ High Volume">₹3,00,000+ / month (VIP Tier)</option>
                    </select>
                  </div>
                </div>

                {/* Categories of Interest */}
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1.5">
                    Product Categories You Purchase (Select All That Apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HD Cameras",
                      "IP & PoE Cameras",
                      "WiFi Cameras",
                      "DVR / NVR",
                      "Surveillance Hard Disks",
                      "3+1 Cables & SMPS",
                      "Server Racks",
                      "Video Door Phones",
                    ].map((cat) => {
                      const isSelected = formData.interestedCategories.includes(cat);
                      return (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => toggleCategory(cat)}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-colors ${
                            isSelected
                              ? "bg-brand-red text-white border-brand-red shadow-sm"
                              : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                    Specific Requirement or Message
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need quotation for 20 CP Plus bullet cameras and 4 rolls 180m copper wire..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-600 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-brand-red/30 transition-all active:scale-[0.99]"
                >
                  <Building2 className="h-4 w-4" />
                  <span>Register & Request Dealer Price List</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
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
