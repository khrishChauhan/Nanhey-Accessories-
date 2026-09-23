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
  ShieldAlert,
  Zap,
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
    // Base pricing algorithm designed to match default 4 cams + 1TB + Audio = ₹14,999
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
      className="flex flex-col h-full rounded-2xl bg-white border-2 border-brand-red/30 shadow-xl overflow-hidden hover:border-brand-red/60 transition-colors"
    >
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-5 text-white border-b border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-red text-white shadow-md shadow-brand-red/30">
              <Cctv className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-brand-red">
              Custom Estimator
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold bg-green-500/20 text-brand-accent-green px-2 py-0.5 rounded border border-green-500/30">
            SAVE 20%
          </span>
        </div>

        <h3 className="text-xl font-black tracking-tight leading-snug">
          BUILD YOUR CCTV PACKAGE
        </h3>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
          Customize your requirement & get the best package for you.
        </p>
      </div>

      {/* Form Controls */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-slate-50/50">
        {/* Step 1: Cameras */}
        <div>
          <label className="flex items-center justify-between text-xs font-black uppercase text-slate-800 tracking-wider mb-1.5">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-white text-[10px]">
                1
              </span>
              How many Cameras?
            </span>
            <span className="text-[11px] font-bold text-brand-red">
              {cameraCount} Channels
            </span>
          </label>
          <div className="relative">
            <select
              value={cameraCount}
              onChange={(e) => setCameraCount(Number(e.target.value))}
              className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-800 shadow-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 cursor-pointer"
            >
              <option value={2}>2 Cameras (Small Home / Shop)</option>
              <option value={4}>4 Cameras (Recommended Standard)</option>
              <option value={8}>8 Cameras (Large Showroom / Bungalow)</option>
              <option value={16}>16 Cameras (Factory / Commercial Building)</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
          </div>
        </div>

        {/* Step 2: Storage */}
        <div>
          <label className="flex items-center justify-between text-xs font-black uppercase text-slate-800 tracking-wider mb-1.5">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-white text-[10px]">
                2
              </span>
              Recording Storage?
            </span>
            <span className="text-[11px] font-bold text-slate-500">
              Surveillance Grade
            </span>
          </label>
          <div className="relative">
            <select
              value={storageOption}
              onChange={(e) => setStorageOption(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-800 shadow-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20 cursor-pointer"
            >
              <option value="500GB / 7 Days">500GB / ~7 Days Backup</option>
              <option value="1TB / 15 Days">1TB / ~15 Days Backup (Most Popular)</option>
              <option value="2TB / 30 Days">2TB / ~30 Days Backup (Long Term)</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
          </div>
        </div>

        {/* Step 3: Audio */}
        <div>
          <label className="flex items-center justify-between text-xs font-black uppercase text-slate-800 tracking-wider mb-1.5">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-white text-[10px]">
                3
              </span>
              Audio Required?
            </span>
            <span className="text-[11px] font-bold text-slate-500">
              Mic Recording
            </span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setAudioOption("Yes")}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                audioOption === "Yes"
                  ? "bg-brand-red text-white border-brand-red shadow-sm"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
              }`}
            >
              <Mic className="h-3.5 w-3.5" />
              <span>Yes (Audio Mic)</span>
            </button>
            <button
              type="button"
              onClick={() => setAudioOption("No")}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                audioOption === "No"
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
              }`}
            >
              <MicOff className="h-3.5 w-3.5" />
              <span>No (Video Only)</span>
            </button>
          </div>
        </div>

        {/* What is Included Checklist */}
        <div className="rounded-xl bg-white p-3 border border-slate-200 text-[11px] space-y-1.5 text-slate-600 shadow-sm">
          <div className="font-bold text-slate-800 flex items-center justify-between">
            <span>Includes Everything:</span>
            <span className="text-brand-accent-green text-[10px] font-extrabold uppercase">
              Full Kit
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[10px]">
            <span className="flex items-center gap-1">
              <Check className="h-3 w-3 text-brand-red shrink-0" /> {cameraCount} Full HD Cameras
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-3 w-3 text-brand-red shrink-0" /> DVR/NVR + Power
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-3 w-3 text-brand-red shrink-0" /> {storageOption.split("/")[0]} HDD
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-3 w-3 text-brand-red shrink-0" /> Mobile App Setup
            </span>
          </div>
        </div>

        {/* Dynamic Price Box */}
        <div className="pt-2">
          <div className="rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-brand-red/20 p-3.5 text-center mb-3">
            <p className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">
              Get Best Package Price:
            </p>
            <p className="text-2xl font-black text-brand-red tracking-tight mt-0.5">
              ₹{calculatedPrice.toLocaleString("en-IN")}
            </p>
            <p className="text-[10px] text-slate-500 mt-0.5">
              Includes GST + Cables + Adapters + Standard Setup
            </p>
          </div>

          {/* Red CTA Button */}
          <button
            onClick={handleBuildNow}
            className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-600 active:scale-[0.98] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-brand-red/30 transition-all group"
          >
            <span>BUILD NOW</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
