"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MobileBottomBar from "@/components/mobile/MobileBottomBar";
import CartDrawer from "@/components/cart/CartDrawer";
import ProductQuickViewModal from "@/components/product/ProductQuickViewModal";
import InstallationModal from "@/components/modal/InstallationModal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Building,
} from "lucide-react";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "CCTV Inquiry / Quotation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = encodeURIComponent(
      `*💬 Website Message - Nanhey Accessories*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || "N/A"}\n` +
      `📌 *Subject:* ${formData.subject}\n` +
      `📝 *Message:* ${formData.message}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `Please reply at the earliest.`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919065224224?text=${text}`, "_blank");
    }, 600);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col antialiased">
      <Header />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e52e06_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red border border-brand-red/30 text-xs font-bold uppercase tracking-wider">
            <MapPin className="h-3.5 w-3.5" />
            <span>Begusarai Main Showroom</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            CONTACT NANHEY ACCESSORIES
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Have questions about CCTV setups, DVR compatibility, or need a technician visit? Visit our showroom or get in touch directly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Showroom Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
              <h2 className="text-lg font-black text-slate-900 pb-3 border-b border-slate-100">
                Showroom & Helpline Info
              </h2>

              <div className="space-y-4 text-xs">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-brand-red shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Our Physical Store</h3>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      Ambedkar Chowk, Kacahari Road, Begusarai, Bihar – 851101
                    </p>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Landmark: Near Main Court Road Junction
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-brand-accent-green shrink-0 mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Phone & WhatsApp Helpline</h3>
                    <a
                      href="tel:+919065224224"
                      className="text-brand-red font-black text-sm hover:underline block mt-0.5"
                    >
                      +91 9065224224
                    </a>
                    <span className="text-[10px] text-slate-400">
                      Direct WhatsApp Orders & Technician Booking
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Email Address</h3>
                    <a
                      href="mailto:info@nanheyaccessories.com"
                      className="text-slate-700 hover:text-brand-red font-semibold block mt-0.5"
                    >
                      info@nanheyaccessories.com
                    </a>
                    <span className="text-[10px] text-slate-400">
                      For official quotations & tenders
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Showroom Timings</h3>
                    <p className="text-slate-700 font-medium mt-0.5">
                      Monday to Saturday: 9:30 AM – 8:30 PM
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Sunday: Emergency Field Support On Call
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="https://wa.me/919065224224?text=Hi%20Nanhey%20Accessories,%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Box */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-3 bg-slate-900 text-white text-xs font-bold flex items-center justify-between">
                <span>Google Maps Location • Begusarai</span>
                <span className="text-[10px] text-brand-red font-mono">851101</span>
              </div>
              <div className="relative h-64 w-full bg-slate-100">
                <iframe
                  title="Nanhey Accessories Begusarai Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14392.203303668858!2d86.12644265!3d25.42154445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2537c35272379%3A0x8cf8ebff828383f9!2sBegusarai%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="pb-4 border-b border-slate-100 mb-6">
              <h2 className="text-xl font-black text-slate-900">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Leave your details and our security specialist will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-brand-accent-green mx-auto">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <em>{formData.subject}</em>. Our team will contact you at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-brand-red-600 transition-colors shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alok Roy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
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
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="alok@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm bg-white focus:border-brand-red focus:outline-none cursor-pointer"
                    >
                      <option value="CCTV Inquiry / Quotation">CCTV Inquiry / Quotation</option>
                      <option value="Installation / Repair Request">Installation / Repair Request</option>
                      <option value="AMC Maintenance Contract">AMC Maintenance Contract</option>
                      <option value="Dealer / Bulk Purchase">Dealer / Bulk Purchase</option>
                      <option value="Other Assistance">Other Assistance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 tracking-wider mb-1">
                    Your Message / Requirement *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your security requirements or inquiry details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm focus:border-brand-red focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-600 text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-brand-red/30 transition-all active:scale-[0.99]"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message & Connect on WhatsApp</span>
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
