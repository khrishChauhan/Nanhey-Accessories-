import type { Metadata, Viewport } from "next";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e52e06",
};

export const metadata: Metadata = {
  title: "Nanhey Accessories – CCTV & Security Solutions | Your Trusted Security Partner",
  description:
    "Leading CCTV, Surveillance, and Security Solutions provider in Begusarai, Bihar. HD Cameras, IP Cameras, WiFi Cameras, DVR/NVR, and Professional Installation Services.",
  keywords: [
    "CCTV Camera Begusarai",
    "Nanhey Accessories",
    "Security Solutions Bihar",
    "CP Plus CCTV",
    "Hikvision CCTV",
    "WiFi Camera",
    "DVR NVR Begusarai",
    "CCTV Installation",
  ],
  authors: [{ name: "Nanhey Accessories" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-brand-red selection:text-white">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
