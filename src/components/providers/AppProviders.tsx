"use client";

import React, { ReactNode } from "react";
import { ShopProvider } from "@/context/ShopContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ShopProvider>{children}</ShopProvider>
    </LanguageProvider>
  );
}
