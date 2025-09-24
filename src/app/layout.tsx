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

import { BackgroundBeams } from "@/components/background-beams";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black/95" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black/70 text-white min-h-screen`}
      >
        <div className="sticky inset-0 -z-10">
          <BackgroundBeams />
        </div>
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
