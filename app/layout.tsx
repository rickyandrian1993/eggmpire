import { SEO_KEYWORDS, SITE_CONFIG } from "@/app/lib/constants/config";
import {
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/app/lib/utils/schema";
import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const fontSans = Lexend({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EggMpire - Decentralized Token & DeFi Ecosystem",
  description: SITE_CONFIG.description,
  keywords: SEO_KEYWORDS.home,
  authors: [{ name: "EggMpire Team" }],
  creator: "EggMpire",
  publisher: "EggMpire",
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: "EggMpire - Next Generation Token",
    description: SITE_CONFIG.description,
    siteName: "EggMpire",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "EggMpire Token",
        type: "image/png",
      },
      {
        url: SITE_CONFIG.ogImage,
        width: 800,
        height: 600,
        alt: "EggMpire Token",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eggmpire",
    creator: "@eggmpire",
    title: "EggMpire - Decentralized Token",
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.twitterImage],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "EggMpire",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1d1d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = getWebsiteSchema();
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="EggMpire" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="EggMpire" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${fontSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

