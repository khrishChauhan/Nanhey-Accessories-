"use client";

import React, { ReactNode } from "react";
import { ShopProvider } from "@/context/ShopContext";

export default function AppProviders({ children }: { children: ReactNode }) {
  return <ShopProvider>{children}</ShopProvider>;
}
