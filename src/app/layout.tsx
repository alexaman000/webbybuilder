import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebbyBuilder - Premium Web Agency",
  description: "WebbyBuilder creates scroll-stopping, high-converting websites for businesses. From idea to live website — fast, affordable & powerful.",
  keywords: ["WebbyBuilder", "Web Agency", "Website Development", "High-Converting Websites", "Portfolio"],
  authors: [{ name: "WebbyBuilder" }],
  openGraph: {
    title: "WebbyBuilder - Premium Web Agency",
    description: "Get a scroll-stopping, high-converting website for your business in 48 hours.",
    url: "https://webbybuilder.com",
    siteName: "WebbyBuilder",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebbyBuilder - Premium Web Agency",
    description: "Get a custom, high-converting website for your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground antialiased selection:bg-neutral-800 selection:text-white">
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
