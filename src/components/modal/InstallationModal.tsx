"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Wrench, CheckCircle2, Phone, Calendar, MapPin, Building, ShieldCheck } from "lucide-react";

interface InstallationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export default function InstallationModal({
  isOpen,
  onClose,
  defaultPackage,
}: InstallationModalProps) {
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Begusarai",
    propertyType: "Home / Residential",
    preferredDate: "",
    packageInfo: defaultPackage || "Custom CCTV Installation",
    notes: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp direct action
    const message = encodeURIComponent(
      `*New Installation Request - Nanhey Accessories*\n` +
      `👤 Name: ${formData.name}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `📍 Location: ${formData.location}\n` +
      `🏠 Property: ${formData.propertyType}\n` +
      `📅 Date: ${formData.preferredDate || "Earliest"}\n` +
      `📦 Package: ${formData.packageInfo}\n` +
      `📝 Notes: ${formData.notes || "None"}`
    );
    // Give user visual confirmation
    setTimeout(() => {
      window.open(`https://wa.me/919065224224?text=${message}`, "_blank");
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm overflow-y-auto animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden border border-zinc-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-zinc-950 px-6 py-4 text-white flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white shadow-md">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Request CCTV Installation</h3>
              <p className="text-xs text-zinc-400">Certified technicians in Begusarai & surrounding areas</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900">Request Sent Successfully!</h4>
              <p className="text-sm text-zinc-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our expert installation engineer will contact you at <strong>{formData.phone}</strong> within 30 minutes to confirm your slot.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="rounded-xl bg-red-600 px-6 py-2.5 font-semibold text-white hover:bg-red-700 transition-colors shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="rounded-lg bg-amber-50 p-3 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Free Site Inspection</strong> available for Begusarai town! Official GST bill & warranty support provided.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                    <input
                      type="tel"
                      required
                      placeholder="9065224224"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-zinc-200 pl-9 pr-3 py-2.5 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Property Type
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full rounded-xl border border-zinc-200 pl-9 pr-3 py-2.5 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 bg-white"
                    >
                      <option value="Home / Residential">Home / Residential</option>
                      <option value="Shop / Retail Outlet">Shop / Retail Outlet</option>
                      <option value="Office / Corporate">Office / Corporate</option>
                      <option value="Factory / Warehouse">Factory / Warehouse</option>
                      <option value="School / College">School / College</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Location / Area in Bihar
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="e.g. Ambedkar Chowk, Begusarai"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full rounded-xl border border-zinc-200 pl-9 pr-3 py-2.5 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full rounded-xl border border-zinc-200 pl-9 pr-3 py-2.5 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                  Specific Requirements or Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Need 4 cameras for retail shop with night vision and mobile view..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl border border-zinc-200 px-3.5 py-2 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 py-3 font-bold text-white shadow-md shadow-red-600/25 hover:bg-red-700 transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Wrench className="h-5 w-5" />
                Submit Request & Connect via WhatsApp
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(modalContent, document.body) : null;
}
