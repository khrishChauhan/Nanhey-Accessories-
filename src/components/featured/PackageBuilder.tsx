"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, Check } from "lucide-react";

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
  const [storageOption, setStorageOption] = useState<string>("1TB");
  const [audioOption, setAudioOption] = useState<string>("Yes");

  // Dynamic Price Calculation
  const calculatedPrice = useMemo(() => {
    let base = 0;
    if (cameraCount === 2) base = 6499;
    else if (cameraCount === 4) base = 8099;
    else if (cameraCount === 8) base = 16499;
    else if (cameraCount === 16) base = 32999;

    let storageCost = 0;
    if (storageOption === "500GB") storageCost = 2800;
    else if (storageOption === "1TB") storageCost = 4500;
    else if (storageOption === "2TB") storageCost = 6800;

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
        storage: `${storageOption} Storage`,
        audio: audioOption,
        price: calculatedPrice,
      });
    } else {
      const msg = encodeURIComponent(
        `Hi Nanhey Accessories! I want to book the custom CCTV package:\n` +
        `- Cameras: ${cameraCount} Units\n` +
        `- Storage: ${storageOption} HDD\n` +
        `- Audio Recording: ${audioOption}\n` +
        `- Estimated Price: ₹${calculatedPrice.toLocaleString("en-IN")}\n` +
        `Please schedule installation in Begusarai.`
      );
      window.open(`https://wa.me/919065224224?text=${msg}`, "_blank");
    }
  };

  return (
    <div
      id="builder"
      className="flex flex-col h-full rounded-lg bg-white border border-zinc-200 p-6 shadow-sm justify-between space-y-6"
    >
      {/* Quiet Minimal Header with Red Accent */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-red-600 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            System Configurator
          </span>
          <span className="text-[11px] font-medium text-zinc-500">
            Begusarai Installation
          </span>
        </div>
        <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
          Custom CCTV Package
        </h3>
        <p className="text-xs text-zinc-500 mt-0.5">
          Select equipment specifications to calculate pricing.
        </p>
      </div>

      {/* Configuration Controls */}
      <div className="space-y-4">
        {/* Step 1: Camera Channels Toggle */}
        <div>
          <label className="block text-xs font-semibold text-zinc-800 mb-1.5">
            Cameras
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {[2, 4, 8, 16].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setCameraCount(count)}
                className={`py-2 text-xs font-medium rounded border transition-colors ${
                  cameraCount === count
                    ? "bg-red-600 text-white border-red-600 shadow-xs shadow-red-600/20"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-red-300"
                }`}
              >
                {count} Cams
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Storage Toggle */}
        <div>
          <label className="block text-xs font-semibold text-zinc-800 mb-1.5">
            Surveillance Storage
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {["500GB", "1TB", "2TB"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setStorageOption(opt)}
                className={`py-2 text-xs font-medium rounded border transition-colors ${
                  storageOption === opt
                    ? "bg-red-600 text-white border-red-600 shadow-xs shadow-red-600/20"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-red-300"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Audio Mic Toggle */}
        <div>
          <label className="block text-xs font-semibold text-zinc-800 mb-1.5">
            Audio Recording (Mic)
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {["Yes", "No"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setAudioOption(opt)}
                className={`py-2 text-xs font-medium rounded border transition-colors ${
                  audioOption === opt
                    ? "bg-red-600 text-white border-red-600 shadow-xs shadow-red-600/20"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-red-300"
                }`}
              >
                {opt === "Yes" ? "Audio + Video" : "Video Only"}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Included Specs List */}
        <div className="pt-2 border-t border-zinc-100 text-[11px] text-zinc-500 space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-600">
            <Check className="h-3 w-3 text-red-500 shrink-0" />
            <span>Includes Full HD DVR/NVR, Power SMPS, Connectors</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-600">
            <Check className="h-3 w-3 text-red-500 shrink-0" />
            <span>Doorstep Installation & Mobile App Setup included</span>
          </div>
        </div>
      </div>

      {/* Clean Typographic Price Summary & CTA */}
      <div className="pt-3 border-t border-zinc-200/80">
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-[11px] text-zinc-500 block">Total Estimated Price</span>
            <span className="text-[10px] text-zinc-400">Includes 18% GST</span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold tracking-tight text-red-600 tabular-nums">
              ₹{calculatedPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <button
          onClick={handleBuildNow}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-3 rounded-lg transition-all shadow-sm shadow-red-600/25"
        >
          <span>Confirm Configuration</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
