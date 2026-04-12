import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Background from '@/components/Background';
import { ProfessionalServiceJsonLd } from "@/components/seo/ProfessionalServiceJsonLd";
import { siteConfig } from "@/lib/site-config";
import "../globals.css";

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
};

const defaultDescription =
  "Sviluppatore web a Castelfiorentino e Gambassi Terme — siti professionali, Next.js e React in Valdelsa. Portfolio di Maurizio Compagnone.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Sviluppatore Web Castelfiorentino & Gambassi Terme`,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  keywords: [
    "Maurizio Compagnone",
    "Sviluppatore Web Castelfiorentino",
    "Sviluppatore Web Gambassi Terme",
    "Siti web Valdelsa",
    "Web developer Valdelsa",
    "Next.js",
    "React",
    "Portfolio",
    "MC",
    "Toscana",
    "ProfessionalService",
    "3D Artist",
    "PC Building",
  ],
  other: {
    "geo.region": siteConfig.location.regionIso,
    "geo.placename": siteConfig.location.locality,
    "geo.position": siteConfig.location.geoPosition,
    ICBM: siteConfig.location.geoPosition.replace(";", ", "),
  },
  authors: [
    {
      name: "Maurizio Compagnone",
      url: "https://mcompagnone.netlify.app",
    },
  ],
  creator: "Maurizio Compagnone",
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    title: siteConfig.name,
    description: defaultDescription,
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
    description: defaultDescription,
    images: [siteConfig.ogImage],
    creator: "@TheNotoriousCompa",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
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

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }];
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params.locale;
  const { children } = props;

  return (
    <html lang={locale} className="h-full w-full" suppressHydrationWarning>
      <head>
        <ProfessionalServiceJsonLd />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Maurizio Compagnone",
              alternateName: "MC",
              url: siteConfig.url,
              image: `${siteConfig.url}/logo.png`,
              jobTitle: "Sviluppatore Web — Castelfiorentino, Gambassi Terme, Valdelsa",
              sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
              email: siteConfig.contact.email,
              telephone: siteConfig.contact.phoneE164,
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Sviluppo web locale Valdelsa",
                "3D Modeling",
                "Blender",
                "PC Building",
              ],
              description: defaultDescription,
            }),
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
