"use client";

import React from "react";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ValuePropositionStrip() {
  const { t } = useLanguage();

  const valueProps = [
    {
      title: t("vpFreeDelivery"),
      subtitle: t("vpFreeDeliverySub"),
      icon: Truck,
      highlight: "Quick Dispatch",
    },
    {
      title: t("vpReturns"),
      subtitle: t("vpReturnsSub"),
      icon: RotateCcw,
      highlight: "Hassle Free",
    },
    {
      title: t("vpSecure"),
      subtitle: t("vpSecureSub"),
      icon: ShieldCheck,
      highlight: "UPI / Cards / COD",
    },
    {
      title: t("vpSupport"),
      subtitle: t("vpSupportSub"),
      icon: Headphones,
      highlight: "Dedicated Helpline",
    },
  ];

  return (
    <div className="bg-white border-b border-slate-200/80 py-5 px-4 shadow-sm relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          {/* 4 Standard Value Propositions */}
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50/70 hover:bg-slate-100/80 border border-slate-100 transition-colors group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-800 tracking-tight leading-tight group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                    {item.subtitle}
                  </p>
                  <span className="text-[9px] uppercase font-bold text-slate-400">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}

          {/* 5th Column: Dedicated WhatsApp Quick Order Card */}
          <a
            href="https://wa.me/919065224224?text=Hi%20Nanhey%20Accessories,%20I%20want%20to%20place%20an%20order%20or%20inquire%20about%20CCTV%20cameras."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-md shadow-green-600/20 hover:shadow-lg hover:shadow-green-600/30 transition-all group active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.397 0 0 5.397 0 12.031c0 2.118.552 4.185 1.603 6.007L0 24l6.147-1.579a12.032 12.032 0 0 0 5.884 1.526h.005c6.634 0 12.032-5.397 12.032-12.031 0-3.214-1.252-6.234-3.526-8.508C18.267 1.252 15.246 0 12.031 0zm0 22.029h-.004a9.98 9.98 0 0 1-5.088-1.39l-.365-.216-3.778.971.99-3.68-.237-.378a9.972 9.972 0 0 1-1.53-5.305c0-5.525 4.496-10.021 10.024-10.021 2.678 0 5.195 1.043 7.088 2.936a9.96 9.96 0 0 1 2.935 7.085c0 5.526-4.498 10.022-10.024 10.022zm5.495-7.502c-.301-.151-1.782-.879-2.058-.98-.276-.1-.477-.151-.678.151-.201.301-.778.98-.954 1.181-.176.201-.352.226-.653.075-.301-.151-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.151-.678-1.632-.929-2.235-.245-.588-.494-.508-.678-.517l-.578-.01c-.201 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.912 1.23 3.113.151.201 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.722.23 1.378.197 1.898.12.579-.086 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.352z"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-green-100">
                  {t("vpWhatsapp")}
                </p>
                <p className="text-xs font-black tracking-wide text-white">
                  9065224224
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-white/80 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
