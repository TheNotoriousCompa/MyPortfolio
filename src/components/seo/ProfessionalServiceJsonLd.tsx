import { siteConfig } from "@/lib/site-config";

const professionalServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Maurizio Compagnone — Senior Web Developer / Full-Stack Engineer",
  description:
    "Professionista specializzato in soluzioni web moderne, noto per la rapidità di esecuzione e l'uso di tecnologie all'avanguardia. Sviluppatore Web Senior a Castelfiorentino specializzato in React e Next.js",
  knowsAbout: ["React", "Next.js", "Tailwind CSS", "Node.js", "Sviluppo Web orientato alle performance", "UI/UX Design", "Integrazione AI"],
  url: siteConfig.url,
  image: `${siteConfig.url}/logo.png`,
  telephone: siteConfig.contact.phoneE164,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.locality,
    addressRegion: siteConfig.location.region,
    addressCountry: siteConfig.location.country,
  },
  areaServed: [
    ...siteConfig.serviceArea.cities.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: siteConfig.serviceArea.area,
      },
    })),
    {
      "@type": "AdministrativeArea",
      name: siteConfig.serviceArea.area,
      containedIn: {
        "@type": "AdministrativeArea",
        name: siteConfig.location.region,
      },
    },
  ],
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  priceRange: "€€",
} as const;

export function ProfessionalServiceJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(professionalServiceLd),
      }}
    />
  );
}
