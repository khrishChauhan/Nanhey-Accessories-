"use client";

import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  onShopNow?: () => void;
  onRequestQuote?: () => void;
}

export default function HeroSection({
  onShopNow,
  onRequestQuote,
}: HeroSectionProps) {
  return (
    <section className="relative w-full bg-[#09090B] overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 aspect-[2.6/1] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[480px]">
          {/* Responsive Next.js Optimized Image */}
          <Image
            src="/images/hero-banner.png"
            alt="CP Plus Preferred Partner - Nanhey Accessories CCTV Security Solutions Begusarai"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
            className="object-cover sm:object-contain object-left md:object-center transition-all duration-300"
          />

          {/* Clickable Overlay linking directly to #catalog */}
          <a
            href="#catalog"
            onClick={onShopNow}
            className="absolute inset-0 z-10 cursor-pointer"
            aria-label="Shop CP Plus CCTV Cameras & Security Solutions"
          />
        </div>
      </div>
    </section>
  );
}
