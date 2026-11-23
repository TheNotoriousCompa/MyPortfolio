import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Background from '@/components/Background';
import Footer from '@/components/Footer';
import { siteConfig } from "@/lib/site-config";
import "../globals.css";

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


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const defaultDescription =
  "Portfolio di Maurizio Compagnone, junior web developer. React, Next.js, .NET/C#, SQL. Esperienza con Electron, Python e distribuzione Windows.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Junior Web Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  keywords: [
    "Maurizio Compagnone",
    "Junior Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    ".NET",
    "C#",
    "Electron",
    "Portfolio",
    "MC",
  ],
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
              jobTitle: "Junior Web Developer",
              sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
              email: siteConfig.contact.email,
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                ".NET",
                "C#",
                "Electron",
              ],
              description: defaultDescription,
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-transparent min-h-screen scroll-smooth`}
      >
        <Background />

        <div className="relative z-10 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
