"use client";

import React, { useState, useMemo } from "react";
import {
  Cctv,
  HardDrive,
  Mic,
  MicOff,
  Check,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

interface PackageBuilderProps {
  onBuildPackage?: (packageDetails: {
    cameras: number;
    storage: string;
    audio: string;
    price: number;
  }) => void;
}

export default function PackageBuilder({ onBuildPackage }: PackageBuilderProps) {
  const [cameraCount, setCameraCount] = useState<number>(4);
  const [storageOption, setStorageOption] = useState<string>("1TB / 15 Days");
  const [audioOption, setAudioOption] = useState<string>("Yes");

  // Dynamic Price Calculation
  const calculatedPrice = useMemo(() => {
    let base = 0;
    if (cameraCount === 2) base = 6499;
    else if (cameraCount === 4) base = 8099;
    else if (cameraCount === 8) base = 16499;
    else if (cameraCount === 16) base = 32999;

    let storageCost = 0;
    if (storageOption === "500GB / 7 Days") storageCost = 2800;
    else if (storageOption === "1TB / 15 Days") storageCost = 4500;
    else if (storageOption === "2TB / 30 Days") storageCost = 6800;

    let audioCost = 0;
    if (audioOption === "Yes") {
      audioCost = cameraCount * 600;
    }

    return base + storageCost + audioCost;
  }, [cameraCount, storageOption, audioOption]);

  const handleBuildNow = () => {
    if (onBuildPackage) {
      onBuildPackage({
        cameras: cameraCount,
        storage: storageOption,
        audio: audioOption,
        price: calculatedPrice,
      });
    } else {
      const msg = encodeURIComponent(
        `Hi Nanhey Accessories! I want to book the custom CCTV package:\n` +
        `- Cameras: ${cameraCount} Units\n` +
        `- Storage: ${storageOption}\n` +
        `- Audio Mic: ${audioOption}\n` +
        `- Estimated Price: ₹${calculatedPrice.toLocaleString("en-IN")}\n` +
        `Please schedule installation in Begusarai.`
      );
      window.open(`https://wa.me/919065224224?text=${msg}`, "_blank");
    }
  };

  return (
    <div
      id="builder"
      className="flex flex-col h-full rounded-2xl bg-[#090D14] border border-white/10 hover:border-brand-ruby/60 shadow-2xl transition-all duration-300 group overflow-hidden"
    >
      {/* Header Banner - Dark Studio Metallic Aesthetic */}
      <div className="relative bg-gradient-to-r from-[#060A10] via-slate-900 to-[#060A10] p-5 text-white border-b border-white/10 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-ruby/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex items-center justify-between mb-2.5 relative z-10">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-ruby text-white shadow-ruby">
              <Cctv className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-brand-ruby-glow">
              Flagship Estimator
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            SAVE 20% BUNDLE
          </span>
        </div>

        <h3 className="text-xl font-black tracking-tight leading-snug text-white relative z-10">
          BUILD YOUR CCTV PACKAGE
        </h3>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed relative z-10">
          Precision configuration with instant Begusarai pricing.
        </p>
      </div>

      {/* Form Controls */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-slate-950/60 backdrop-blur-md">
        {/* Step 1: Cameras */}
        <div>
          <label className="flex items-center justify-between text-xs font-black uppercase text-slate-200 tracking-wider mb-2">
            <span className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-ruby text-white text-[10px] font-black shadow-ruby ring-2 ring-brand-ruby/40">
                1
              </span>
              Camera Channels
            </span>
            <span className="text-[11px] font-bold text-brand-ruby-glow">
              {cameraCount} Cameras
            </span>
          </label>
          <div className="relative">
            <select
              value={cameraCount}
              onChange={(e) => setCameraCount(Number(e.target.value))}
              className="w-full appearance-none rounded-xl border border-white/10 bg-slate-900/90 px-3.5 py-2.5 text-xs font-bold text-white shadow-inner focus:border-brand-ruby focus:outline-none focus:ring-2 focus:ring-brand-ruby/30 cursor-pointer hover:border-white/20 transition-all"
            >
              <option value={2} className="bg-slate-900 text-white">2 Cameras (Small Home / Shop)</option>
              <option value={4} className="bg-slate-900 text-white">4 Cameras (Recommended Standard)</option>
              <option value={8} className="bg-slate-900 text-white">8 Cameras (Large Showroom / Bungalow)</option>
              <option value={16} className="bg-slate-900 text-white">16 Cameras (Factory / Commercial Building)</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-3 h-4 w-4 text-slate-400" />
          </div>
        </div>

        {/* Step 2: Storage */}
        <div>
          <label className="flex items-center justify-between text-xs font-black uppercase text-slate-200 tracking-wider mb-2">
            <span className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-ruby text-white text-[10px] font-black shadow-ruby ring-2 ring-brand-ruby/40">
                2
              </span>
              Recording Storage
            </span>
            <span className="text-[11px] font-bold text-slate-400">
              Surveillance Grade
            </span>
          </label>
          <div className="relative">
            <select
              value={storageOption}
              onChange={(e) => setStorageOption(e.target.value)}
              className="w-full appearance-none rounded-xl border border-white/10 bg-slate-900/90 px-3.5 py-2.5 text-xs font-bold text-white shadow-inner focus:border-brand-ruby focus:outline-none focus:ring-2 focus:ring-brand-ruby/30 cursor-pointer hover:border-white/20 transition-all"
            >
              <option value="500GB / 7 Days" className="bg-slate-900 text-white">500GB / ~7 Days Backup</option>
              <option value="1TB / 15 Days" className="bg-slate-900 text-white">1TB / ~15 Days Backup (Most Popular)</option>
              <option value="2TB / 30 Days" className="bg-slate-900 text-white">2TB / ~30 Days Backup (Long Term)</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-3 h-4 w-4 text-slate-400" />
          </div>
        </div>

        {/* Step 3: Audio */}
        <div>
          <label className="flex items-center justify-between text-xs font-black uppercase text-slate-200 tracking-wider mb-2">
            <span className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-ruby text-white text-[10px] font-black shadow-ruby ring-2 ring-brand-ruby/40">
                3
              </span>
              Audio Mic Required?
            </span>
            <span className="text-[11px] font-bold text-slate-400">
              Two-Way Ready
            </span>
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setAudioOption("Yes")}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all duration-200 ${
                audioOption === "Yes"
                  ? "bg-brand-ruby text-white border-brand-ruby shadow-ruby"
                  : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/25 hover:text-white"
              }`}
            >
              <Mic className="h-3.5 w-3.5" />
              <span>Yes (Audio Mic)</span>
            </button>
            <button
              type="button"
              onClick={() => setAudioOption("No")}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all duration-200 ${
                audioOption === "No"
                  ? "bg-slate-800 text-white border-slate-700 shadow-sm"
                  : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/25 hover:text-white"
              }`}
            >
              <MicOff className="h-3.5 w-3.5" />
              <span>No (Video Only)</span>
            </button>
          </div>
        </div>

        {/* What is Included Checklist */}
        <div className="rounded-xl bg-slate-900/80 p-3.5 border border-white/5 text-[11px] space-y-2 text-slate-300">
          <div className="font-bold text-white flex items-center justify-between">
            <span>Enterprise Kit Includes:</span>
            <span className="text-emerald-400 text-[10px] font-extrabold uppercase tracking-wide">
              Full Kit
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[10px]">
            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-brand-ruby shrink-0" /> {cameraCount} Full HD Cameras
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-brand-ruby shrink-0" /> DVR/NVR + Power Supply
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-brand-ruby shrink-0" /> {storageOption.split("/")[0]} Hard Disk
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-brand-ruby shrink-0" /> Mobile Live App Setup
            </span>
          </div>
        </div>

        {/* Dynamic Price Box - High Contrast Luxury Container */}
        <div className="pt-1">
          <div className="rounded-xl bg-gradient-to-br from-[#121A2D] via-slate-900 to-[#121A2D] border border-brand-ruby/30 p-4 text-center mb-3.5 relative overflow-hidden shadow-inner group/price">
            <div className="absolute inset-0 bg-brand-ruby/5 pointer-events-none"></div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest relative z-10">
              Estimated All-Inclusive Price:
            </p>
            <p className="text-3xl font-black text-white tracking-tight mt-1 relative z-10 drop-shadow-sm font-heading">
              <span className="text-brand-ruby-glow mr-0.5">₹</span>
              {calculatedPrice.toLocaleString("en-IN")}
            </p>
            <p className="text-[10px] text-slate-400 mt-1 relative z-10">
              Includes 18% GST + Cables + Adapters + Standard Setup
            </p>
          </div>

          {/* Luxury CTA Button with Shimmer */}
          <button
            onClick={handleBuildNow}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-ruby via-red-600 to-brand-ruby-deep hover:from-brand-ruby-600 hover:to-brand-ruby active:scale-[0.98] text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-ruby hover:shadow-glow hover:scale-[1.01] transition-all duration-300 group"
          >
            <span>BUILD PACKAGE NOW</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
