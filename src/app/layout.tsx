import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090B",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nanheyaccessories.com"),
  title: {
    default: "Nanhey Accessories – CCTV & Security Solutions | Your Trusted Security Partner",
    template: "%s | Nanhey Accessories Begusarai",
  },
  description:
    "Leading CCTV, Surveillance, and Security Solutions provider in Begusarai, Bihar. CP Plus, Hikvision, Dahua HD/IP Cameras, DVR/NVR setups, and Professional Doorstep Installation Services.",
  keywords: [
    "CCTV Camera Begusarai",
    "Nanhey Accessories",
    "Security Solutions Bihar",
    "CP Plus CCTV Begusarai",
    "Hikvision Dealer Bihar",
    "Dahua CCTV",
    "WiFi Wireless Camera",
    "DVR NVR Begusarai",
    "CCTV Installation AMC Services",
    "Security Camera Wholesale",
  ],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  authors: [{ name: "Nanhey Accessories", url: "https://nanheyaccessories.com" }],
  creator: "Nanhey Accessories",
  publisher: "Nanhey Accessories",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nanheyaccessories.com",
    title: "Nanhey Accessories – CCTV & Security Solutions Begusarai",
    description:
      "Premier CCTV, Surveillance Systems, and Security Solutions provider in Begusarai, Bihar. Genuine CP Plus & Hikvision cameras with GST invoice and doorstep installation.",
    siteName: "Nanhey Accessories",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 400,
        alt: "Nanhey Accessories CCTV Security Systems Begusarai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanhey Accessories – CCTV & Security Solutions Begusarai",
    description:
      "Premier CCTV, Surveillance Systems, and Security Solutions provider in Begusarai, Bihar. Doorstep installation and genuine warranty.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SecuritySystemStore",
  "name": "Nanhey Accessories",
  "alternateName": "Nanhey CCTV & Security Solutions",
  "url": "https://nanheyaccessories.com",
  "telephone": "+919065224224",
  "email": "info@nanheyaccessories.com",
  "priceRange": "₹₹",
  "image": "https://nanheyaccessories.com/images/logo.png",
  "logo": "https://nanheyaccessories.com/images/logo.png",
  "description":
    "Premier CCTV security cameras, surveillance systems, biometric attendance, DVR/NVR, and professional security installations in Begusarai and across Bihar.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ambedkar Chowk, Kacahari Road",
    "addressLocality": "Begusarai",
    "addressRegion": "Bihar",
    "postalCode": "851101",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.4182,
    "longitude": 86.1272,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "10:00",
      "closes": "15:00",
    },
  ],
  "areaServed": ["Begusarai", "Khagaria", "Samastipur", "Munger", "Patna", "Bihar"],
  "sameAs": [
    "https://facebook.com",
    "https://instagram.com",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth overflow-x-hidden max-w-full w-full ${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-900 selection:text-white overflow-x-hidden max-w-full w-full relative">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
