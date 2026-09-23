"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "hi";

interface TranslationEntry {
  en: string;
  hi: string;
}

export const DICTIONARY: Record<string, TranslationEntry> = {
  // TopBar & Header
  storeAddress: {
    en: "Ambedkar Chowk, Kacahari Road, Begusarai, Bihar",
    hi: "अम्बेडकर चौक, कचहरी रोड, बेगूसराय, बिहार",
  },
  workingHours: {
    en: "Open Mon - Sat: 9:30 AM - 8:30 PM",
    hi: "सोम - शनि: सुबह 9:30 से रात 8:30",
  },
  allCategories: {
    en: "ALL CATEGORIES",
    hi: "सभी श्रेणियां",
  },
  searchPlaceholder: {
    en: "Search CCTV cameras, DVR, NVR, CP Plus, Hikvision, Hard Disks...",
    hi: "सीसीटीवी कैमरा, डीवीआर, एनवीआर, सीपी प्लस, हिकविजन खोजें...",
  },
  searchBtn: {
    en: "Search",
    hi: "खोजें",
  },
  signIn: {
    en: "Sign In",
    hi: "लॉग इन",
  },
  myAccount: {
    en: "My Account",
    hi: "मेरा खाता",
  },
  saved: {
    en: "Saved",
    hi: "सेव किया",
  },
  wishlist: {
    en: "Wishlist",
    hi: "पसंदीदा",
  },
  myCart: {
    en: "My Cart",
    hi: "मेरी कार्ट",
  },
  requestInstallation: {
    en: "REQUEST INSTALLATION",
    hi: "इंस्टालेशन बुक करें",
  },

  // Hero Section
  heroPill: {
    en: "#1 CCTV & Security Solutions in Begusarai",
    hi: "#1 सीसीटीवी और सुरक्षा समाधान - बेगूसराय",
  },
  heroTitlePrefix: {
    en: "PREMIUM SECURITY –",
    hi: "प्रीमियम सुरक्षा –",
  },
  heroTitleHighlight: {
    en: "SMARTER PROTECTION",
    hi: "स्मार्ट सुरक्षा",
  },
  heroTitleSuffix: {
    en: "FOR EVERY PLACE",
    hi: "हर स्थान के लिए",
  },
  heroSubtitle: {
    en: "High Quality CCTV Cameras & Security Solutions for Home, Shop, Office & Industry. Authorized seller of CP Plus, Hikvision, Dahua & Realtime in Begusarai, Bihar.",
    hi: "घर, दुकान, ऑफिस और उद्योग के लिए उच्च गुणवत्ता वाले सीसीटीवी कैमरे और सुरक्षा समाधान। बेगूसराय में सीपी प्लस और हिकविजन के अधिकृत डीलर।",
  },
  shopNow: {
    en: "SHOP NOW",
    hi: "अभी खरीदें",
  },
  buildCustomPackage: {
    en: "Build Custom CCTV Package",
    hi: "कस्टम सीसीटीवी पैकेज बनाएं",
  },
  chipQuality: {
    en: "High Quality Products",
    hi: "उच्च गुणवत्ता उत्पाद",
  },
  chipPrice: {
    en: "Best Price Guaranteed",
    hi: "सर्वोत्तम मूल्य गारंटी",
  },
  chipInstall: {
    en: "Expert Installation",
    hi: "अनुभवी कारीगर",
  },
  chipSupport: {
    en: "After Sales Support",
    hi: "बिक्री के बाद सेवा",
  },

  // Value Props
  vpFreeDelivery: {
    en: "Free Delivery",
    hi: "मुफ्त डिलीवरी",
  },
  vpFreeDeliverySub: {
    en: "On All Orders in Begusarai",
    hi: "बेगूसराय में सभी आर्डर पर",
  },
  vpReturns: {
    en: "Easy Returns",
    hi: "आसान वापसी",
  },
  vpReturnsSub: {
    en: "7 Days Return Policy",
    hi: "7 दिनों की आसान रिटर्न नीति",
  },
  vpSecure: {
    en: "Secure Payment",
    hi: "सुरक्षित भुगतान",
  },
  vpSecureSub: {
    en: "100% Secure Payments",
    hi: "यूपीआई, कार्ड्स एवं कैश",
  },
  vpSupport: {
    en: "Online Support",
    hi: "ऑनलाइन सहायता",
  },
  vpSupportSub: {
    en: "Mon - Sat 10AM - 8PM",
    hi: "सोम - शनि सुबह 10 से रात 8",
  },
  vpWhatsapp: {
    en: "Quick WhatsApp Order",
    hi: "व्हाट्सएप तुरंत आर्डर",
  },

  // Category & Featured
  shopByCategory: {
    en: "SHOP BY CATEGORY",
    hi: "श्रेणी अनुसार खरीदें",
  },
  buildPackageTitle: {
    en: "BUILD YOUR CCTV PACKAGE",
    hi: "अपना सीसीटीवी पैकेज तैयार करें",
  },
  bestSellersTitle: {
    en: "BEST SELLING PRODUCTS",
    hi: "सर्वाधिक बिकने वाले उत्पाद",
  },
  installationServiceTitle: {
    en: "PROFESSIONAL INSTALLATION SERVICE",
    hi: "पेशेवर इंस्टालेशन सेवा",
  },
};

export type TranslationKey = keyof typeof DICTIONARY;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "nanhey_language_v1";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      if (saved === "en" || saved === "hi") {
        setLanguageState(saved);
      }
    } catch (e) {
      console.warn("Language localStorage read error:", e);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch (e) {
      console.warn("Language localStorage write error:", e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  const t = (key: string): string => {
    const entry = DICTIONARY[key];
    if (!entry) return key;
    return entry[language] || entry["en"] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
