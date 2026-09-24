"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileBottomBar from "@/components/mobile/MobileBottomBar";
import CartDrawer from "@/components/cart/CartDrawer";
import ProductQuickViewModal from "@/components/product/ProductQuickViewModal";
import InstallationModal from "@/components/modal/InstallationModal";
import {
  ShieldCheck,
  Check,
  CheckCircle2,
  Wrench,
  Clock,
  Building,
  Phone,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Award,
} from "lucide-react";

export default function AMCPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    phone: "",
    email: "",
    location: "Begusarai",
    planSelected: "Comprehensive AMC",
    cameraCount: "8 - 16 Cameras",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const amcPlans = [
    {
      id: "basic",
      name: "Basic Security AMC",
      target: "Homes & Small Retail Shops",
      price: "₹3,999",
      period: "per year (Up to 4 Cams)",
      popular: false,
      features: [
        "4 Scheduled Preventive Visits / Year",
        "Camera Lens Cleaning & Focus Tuning",
        "DVR / NVR Health & Fan Inspection",
        "BNC & DC Connector Tightening",
        "Hard Disk Error & Bad Sector Scan",
        "Phone Support for App Issues",
      ],
      notIncluded: ["Hardware replacement parts", "Major rewiring"],
    },
    {
      id: "comprehensive",
      name: "Comprehensive AMC",
      target: "Showrooms, Offices & Warehouses",
      price: "₹7,999",
      period: "per year (Up to 8 Cams)",
      popular: true,
      features: [
        "6 Scheduled Visits + Unlimited Breakdown Calls",
        "4-Hour Emergency Response in Begusarai",
        "Zero Labor Charges on All Repairs",
        "Standby Spare DVR / Camera During Repairs",
        "Full Cable & Conduit Integrity Check",
        "Firmware Security Patch Updates",
        "Quarterly Hard Drive Health Certification",
      ],
      notIncluded: ["Physical lightning / water flood damage"],
    },
    {
      id: "enterprise",
      name: "Enterprise SLA AMC",
      target: "Factories, Schools, Hospitals & Jewelers",
      price: "Custom",
      period: "tailored SLA contract",
      popular: false,
      features: [
        "Monthly Scheduled Preventive Maintenance",
        "2-Hour Dedicated Priority Response",
        "Designated Senior CCTV Engineer",
        "Zero-Downtime Hot-Swappable Spares",
        "Fiber Optic & Long-Distance Network Audit",
        "Quarterly Management Audit & Video Log Report",
        "GST Invoices & Official Compliance SLA",
      ],
      notIncluded: [],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `*📋 New AMC Contract Inquiry - Nanhey Accessories*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🏢 *Organization:* ${formData.businessName}\n` +
      `👤 *Contact:* ${formData.contactPerson}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📍 *Location:* ${formData.location}\n` +
      `🛡️ *Plan:* ${formData.planSelected}\n` +
      `📹 *Cameras:* ${formData.cameraCount}\n` +
      `📝 *Notes:* ${formData.notes || "None"}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Please provide an official AMC proposal & inspection date.`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919065224224?text=${message}`, "_blank");
    }, 600);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col antialiased mobile-content-wrapper w-full max-w-full overflow-x-hidden">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e52e06_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>24x7 Guaranteed Uptime</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            ANNUAL MAINTENANCE CONTRACTS (AMC)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Ensure your surveillance never fails when you need it most. Preventive maintenance, zero-labour repairs, and rapid emergency response across Begusarai and Bihar.
          </p>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-14 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Choose Your Maintenance Plan
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Transparent annual pricing with zero hidden surcharges for residential, commercial, and industrial installations.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {amcPlans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 relative ${
                plan.popular
                  ? "bg-white border-2 border-brand-red shadow-xl ring-4 ring-brand-red/10 -translate-y-1"
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-md">
                  Most Popular for Businesses
                </span>
              )}

              <div>
                <h3 className="text-lg font-black text-slate-900">{plan.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{plan.target}</p>

                <div className="my-5 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-brand-red">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
                    What is Included:
                  </p>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-brand-accent-green shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, planSelected: plan.name }));
                    const el = document.getElementById("amc-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md ${
                    plan.popular
                      ? "bg-brand-red text-white hover:bg-brand-red-600 shadow-brand-red/25"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proposal Request Form */}
      <section id="amc-form" className="py-12 px-4 max-w-4xl mx-auto w-full mb-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="pb-4 border-b border-slate-100 mb-6 text-center sm:text-left">
            <h3 className="text-xl font-black text-slate-900">
              Request an AMC Proposal & Free Audit
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Our technical supervisor will visit your Begusarai site to assess existing cameras, wiring, and DVR health before proposing the contract.
            </p>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-brand-accent-green mx-auto">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-black text-slate-900">
                AMC Proposal Request Sent!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.contactPerson}</strong>. We will contact you at <strong>{formData.phone}</strong> to arrange your site audit and provide an official quotation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                    Business / Society / Home Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Jewellers / Hotel Raj"
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
                    placeholder="e.g. Anand Kumar"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                    Premises Location in Begusarai / Bihar *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Main Market, Begusarai"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                    Selected Plan
                  </label>
                  <select
                    value={formData.planSelected}
                    onChange={(e) => setFormData({ ...formData, planSelected: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm bg-white focus:border-brand-red focus:outline-none"
                  >
                    <option value="Basic Security AMC">Basic Security AMC (Homes/Small Shops)</option>
                    <option value="Comprehensive AMC">Comprehensive AMC (Showrooms/Offices)</option>
                    <option value="Enterprise SLA AMC">Enterprise SLA AMC (Factories/Schools/Jewelers)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                    Total CCTV Cameras Installed
                  </label>
                  <select
                    value={formData.cameraCount}
                    onChange={(e) => setFormData({ ...formData, cameraCount: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm bg-white focus:border-brand-red focus:outline-none"
                  >
                    <option value="1 - 4 Cameras">1 - 4 Cameras</option>
                    <option value="5 - 8 Cameras">5 - 8 Cameras</option>
                    <option value="9 - 16 Cameras">9 - 16 Cameras</option>
                    <option value="17 - 32 Cameras">17 - 32 Cameras</option>
                    <option value="32+ Enterprise Cameras">32+ Enterprise Cameras</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                  Current System Status or Specific Issues
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Existing setup is 2 years old, need regular maintenance and lens cleaning..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-600 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-brand-red/30 transition-all active:scale-[0.99]"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Submit AMC Proposal Request</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
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
