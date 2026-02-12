import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Background from '@/components/Background';
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

const siteConfig = {
  name: "MC - Portfolio",
  description: "Personal portfolio of MC - Computer Science Student & Tech Enthusiast. Discover my projects in Web Development, 3D Design, and PC Building.",
  url: "https://your-domain.com", // Replace with your actual domain
  ogImage: "/portfolio-preview.png",
  links: {
    github: "https://github.com/TheNotoriousCompa",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "MC",
    "Portfolio",
    "Web Developer",
    "Computer Science Student",
    "Next.js",
    "React",
    "Tailwind CSS",
    "3D Artist",
    "PC Building",
  ],
  authors: [
    {
      name: "MC",
      url: "https://mcompagnone.netlify.app",
    },
  ],
  creator: "MC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@your_twitter", // Update if you have one
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full w-full" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "MC",
              "url": siteConfig.url,
              "image": `${siteConfig.url}/logo.png`,
              "jobTitle": "Computer Science Student & Web Developer",
              "sameAs": [
                siteConfig.links.github,
                // Add your other social links here
              ],
              "description": siteConfig.description
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-transparent min-h-screen scroll-smooth`}
      >
        {/* Background fisso (dietro) */}
        <Background />

        {/* Main content wrapper */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
