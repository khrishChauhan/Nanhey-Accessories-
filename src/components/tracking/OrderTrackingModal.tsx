"use client";

import React, { useState } from "react";
import {
  X,
  Package,
  Search,
  CheckCircle2,
  Clock,
  Truck,
  Wrench,
  ShieldCheck,
  Phone,
  MessageCircle,
  FileText,
  MapPin,
  ArrowRight,
} from "lucide-react";

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOrderId?: string;
}

export default function OrderTrackingModal({
  isOpen,
  onClose,
  initialOrderId = "NA-85421",
}: OrderTrackingModalProps) {
  const [searchQuery, setSearchQuery] = useState(initialOrderId);
  const [trackedOrder, setTrackedOrder] = useState<any>({
    id: "NA-85421",
    customerName: "Ramesh Kumar",
    phone: "+91 9065224224",
    address: "Ambedkar Chowk, Near Kali Asthan, Harrakh, Begusarai",
    items: [
      { name: "CP Plus 2.4MP Full Color Bullet Camera", qty: 4, price: 1499 },
      { name: "CP Plus 4 Channel 1080P HD DVR", qty: 1, price: 2999 },
      { name: "Seagate SkyHawk 1TB Surveillance Hard Drive", qty: 1, price: 4500 },
      { name: "90 Meter 3+1 Pure Copper Cable Spool", qty: 1, price: 1800 },
    ],
    total: 15295,
    orderDate: "23 Sep 2026",
    technician: {
      name: "Manoj Kumar",
      phone: "+91 9065224224",
      experience: "Senior CCTV Engineer (6+ Yrs in Begusarai)",
      status: "En Route to Location",
    },
    currentStep: 3, // 1: Placed, 2: Dispatched, 3: Out with Technician, 4: Installed
  });

  const [hasSearched, setHasSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setHasSearched(true);
  };

  const steps = [
    {
      title: "Order Placed & Verified",
      time: "23 Sep 2026, 10:45 AM",
      desc: "Order confirmed by Begusarai Showroom desk",
      icon: Package,
    },
    {
      title: "Dispatched from Warehouse",
      time: "23 Sep 2026, 01:15 PM",
      desc: "Hardware tested, barcoded & warranty registered",
      icon: Truck,
    },
    {
      title: "Technician En Route",
      time: "23 Sep 2026, 03:30 PM",
      desc: "Field technician assigned with installation kit",
      icon: Wrench,
      active: true,
    },
    {
      title: "Installation & Verification",
      time: "Est. Today by 06:00 PM",
      desc: "Conduit wiring, camera mounting & phone app handover",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#090D14]/75 p-4 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-200 my-auto">
        {/* Header */}
        <div className="bg-[#090D14] px-6 py-4 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-red text-white shadow-md">
              <Package className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">
                Live Order & Installation Tracking
              </h3>
              <p className="text-xs text-slate-400">
                Nanhey Accessories • Begusarai Service Hub
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Tracking Search Input */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter Order ID (e.g. NA-85421) or Mobile Number"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
              />
            </div>
            <button
              type="submit"
              className="bg-brand-red hover:bg-brand-red-600 text-white font-bold text-xs uppercase px-4 py-2 rounded-xl transition-colors shrink-0"
            >
              Track
            </button>
          </form>

          {/* Tracked Order Details */}
          {hasSearched && trackedOrder && (
            <div className="space-y-5">
              {/* Order Summary Strip */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm text-slate-900 font-mono">
                      #{trackedOrder.id}
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                      Out for Installation
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Ordered for: <strong>{trackedOrder.customerName}</strong> • {trackedOrder.address}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs font-black text-brand-red">
                    ₹{trackedOrder.total.toLocaleString("en-IN")}
                  </span>
                  <span className="block text-[10px] text-slate-400">GST Invoice Ready</span>
                </div>
              </div>

              {/* 4-Stage Visual Progress Stepper */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-4">
                <h4 className="text-xs font-black uppercase text-slate-800 tracking-wider">
                  Real-time Installation Stepper
                </h4>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {steps.map((st, i) => {
                    const isCompleted = i + 1 < trackedOrder.currentStep;
                    const isCurrent = i + 1 === trackedOrder.currentStep;

                    return (
                      <div key={i} className="relative flex items-start gap-3">
                        {/* Step Dot */}
                        <div
                          className={`absolute -left-6 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white ${
                            isCompleted
                              ? "bg-brand-accent-green text-white"
                              : isCurrent
                              ? "bg-brand-red text-white animate-pulse"
                              : "bg-slate-200 text-slate-400"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          ) : (
                            <span className="text-[10px] font-bold">{i + 1}</span>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h5
                              className={`text-xs font-black leading-none ${
                                isCurrent ? "text-brand-red" : "text-slate-800"
                              }`}
                            >
                              {st.title}
                            </h5>
                            <span className="text-[10px] text-slate-400 font-mono">
                              {st.time}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                            {st.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Assigned Technician Card */}
              <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-brand-red" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Assigned Field Engineer
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase text-brand-accent-green bg-green-500/20 px-2 py-0.5 rounded border border-green-500/30">
                    Active on Field
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-sm text-white">
                      {trackedOrder.technician.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {trackedOrder.technician.experience}
                    </p>
                    <p className="text-[11px] text-brand-accent-green font-semibold mt-0.5">
                      ● Status: {trackedOrder.technician.status}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${trackedOrder.technician.phone}`}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                      title="Call Technician"
                    >
                      <Phone className="h-4 w-4 text-brand-accent-green" />
                    </a>
                    <a
                      href={`https://wa.me/919065224224?text=Hi%20Manoj,%20I%20am%20tracking%20order%20${trackedOrder.id}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Invoice Download Simulation Action */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <FileText className="h-4 w-4 text-brand-red" />
                  <span>GST Tax Invoice #{trackedOrder.id}.pdf</span>
                </div>
                <button
                  onClick={() => alert(`Simulated GST Invoice downloaded for Order ${trackedOrder.id}`)}
                  className="text-xs font-bold text-brand-red hover:underline"
                >
                  Download Invoice
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
