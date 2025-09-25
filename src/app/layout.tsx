import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optimize font loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});


// Viewport settings for better mobile experience
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "MC - Portfolio",
  description: "Personal portfolio of MC - Developer and Designer",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: "MC - Portfolio",
    description: "Personal portfolio of MC - Developer and Designer",
    type: "website",
  },
};

import Background from '@/components/Background';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-transparent min-h-screen`}
      >
        {/* Background fisso (dietro) */}
        <Background />
  
        {/* Contenuto - metti il children dentro un layer in primo piano */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
