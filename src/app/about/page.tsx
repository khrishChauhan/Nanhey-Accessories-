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
  Award,
  Users,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  HeartHandshake,
  Check,
  Building,
  Cctv,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: "10+", label: "Years in Begusarai", desc: "Established pioneer in surveillance" },
    { value: "5,000+", label: "Happy Clients", desc: "Homes, shops, schools & factories" },
    { value: "100%", label: "Genuine Brands", desc: "Direct CP Plus & Hikvision sourcing" },
    { value: "4 Hours", label: "Begusarai Response", desc: "Prompt doorstep technical visits" },
  ];

  const values = [
    {
      title: "Zero Compromise on Quality",
      desc: "We exclusively install pure copper 3+1 and Cat6 cables with regulated fused power adapters to prevent voltage surges.",
    },
    {
      title: "Neat & Concealed Conduit Wiring",
      desc: "Our technicians take pride in aesthetics—clean pipe work, zero hanging cables, and organized server rack enclosures.",
    },
    {
      title: "Transparent GST Invoicing",
      desc: "100% tax compliant billing with serial number warranty registration and GST Input Tax Credit (ITC) for businesses.",
    },
    {
      title: "Prompt Local After-Sales Support",
      desc: "Our physical showroom at Ambedkar Chowk guarantees you never have to chase distant online sellers for warranty claims.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col antialiased mobile-content-wrapper">
      <Header />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e52e06_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-bold uppercase tracking-wider">
            <Award className="h-3.5 w-3.5" />
            <span>Serving Begusarai & Bihar Since 2014</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            ABOUT NANHEY ACCESSORIES
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your Trusted Security Partner. We deliver certified CCTV cameras, biometric systems, surveillance hard disks, and professional turnkey installations.
          </p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-white border-b border-slate-200 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-3xl sm:text-4xl font-black text-brand-red tracking-tight">
                {s.value}
              </p>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                {s.label}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-14 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-red">
              <span className="h-2 w-2 rounded-full bg-brand-red"></span>
              <span>Our Story & Mission</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Protecting What Matters Most to Begusarai Families & Businesses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founded over a decade ago at Ambedkar Chowk, Kacahari Road, <strong>Nanhey Accessories</strong> started with a clear mission: to bring world-class, dependable electronic surveillance hardware and transparent pricing to Begusarai and surrounding Bihar districts.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              While ordinary sellers sell box-packed cameras without field accountability, Nanhey Accessories operates as a full-stack security partner. We survey your layout, calculate lens angles, recommend exact hard drive recording backup, route wires cleanly through conduits, and guarantee on-site after-sales service.
            </p>

            <div className="pt-2">
              <a
                href="/installation"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-brand-red/30 transition-all"
              >
                <span>Book a Site Survey</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-7 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red text-white shadow-md">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black text-base leading-tight">
                    Authorized Brand Partners
                  </h3>
                  <p className="text-xs text-slate-400">100% Genuine Box-Pack Hardware</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                  <span className="font-bold text-white">CP Plus</span>
                  <span className="text-brand-accent-green text-[11px] font-bold">Authorized Retailer</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                  <span className="font-bold text-white">Hikvision Turbo HD & IP</span>
                  <span className="text-brand-accent-green text-[11px] font-bold">Direct Channel Partner</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                  <span className="font-bold text-white">Dahua Technology</span>
                  <span className="text-brand-accent-green text-[11px] font-bold">Surveillance Partner</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                  <span className="font-bold text-white">Seagate SkyHawk & WD Purple</span>
                  <span className="text-brand-accent-green text-[11px] font-bold">Surveillance HDD Dealer</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-red shrink-0" />
                <span>Showroom: Ambedkar Chowk, Kacahari Road, Begusarai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values 4-Card Grid */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              The Nanhey Accessories Promise
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Why thousands of homeowners, jewellers, and commercial builders in Bihar trust us with their security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-red/50 hover:shadow-lg transition-all space-y-2.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red font-black text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-black text-slate-900 leading-snug">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
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
