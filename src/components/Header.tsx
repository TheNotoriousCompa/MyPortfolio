"use client";

import { usePathname } from "next/navigation";
import React from "react";
import CardNav, { CardNavItem } from "./ui/CardNav";

interface Section {
  id: string;
  label: string;
  /** Full path for routes that are not in-page anchors (e.g. landing locale). */
  href?: string;
}

interface HeaderProps {
  sections: Section[];
  /** When set (e.g. `/${locale}`), section links point to home hashes: `/it#projects`. */
  anchorBase?: string;
  isGalleryPage?: boolean;
  locale: string;
}

export function Header({
  sections,
  anchorBase,
  isGalleryPage = false,
  locale,
}: HeaderProps) {
  const pathname = usePathname();
  const hashPrefix = anchorBase ?? (isGalleryPage ? `/${locale}` : "");

  const linkForSection = (section: Section) =>
    section.href ?? `${hashPrefix}#${section.id}`;

  const hrefForUiLocale = (target: "en" | "it") =>
    pathname.replace(/^\/(en|it)(?=\/|$)/, `/${target}`);

  // Transforming sections into 3 specific categories for CardNav
  const cardItems: CardNavItem[] = [
    {
      label: locale === 'it' ? "SVILUPPO WEB" : "WEB DEV",
      bgColor: "#000",

      textColor: "#fff",
      links: [
        {
          label: locale === 'it' ? "Cosa faccio" : "What I do",
          href: `/${locale}/sviluppo-web`,
          ariaLabel: "Servizi Sviluppo Web"
        },
        {
          label: locale === 'it' ? "Prezzi" : "Pricing",
          href: `/${locale}/sviluppo-web#pricing`,
          ariaLabel: "Piani e Prezzi"
        }
      ]
    },
    {
      label: "PORTFOLIO",
      bgColor: "#000",

      textColor: "#fff",
      links: sections
        .filter(s => ["about", "projects", "experience", "education"].includes(s.id))
        .map(s => ({
          label: s.label,
          href: linkForSection(s),
          ariaLabel: s.label
        }))
    },
    {
      label: locale === 'it' ? "CONTATTI" : "CONTACT",
      bgColor: "#000",

      textColor: "#fff",
      links: [
        {
          label: locale === 'it' ? "Scrivimi" : "Email Me",
          href: `/${locale}#contacts`,
          ariaLabel: "Modulo Contatti"
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/m-compagnone",
          ariaLabel: "LinkedIn"
        },
        {
          label: "GitHub",
          href: "https://github.com/m-compagnone",
          ariaLabel: "GitHub"
        }
      ]
    }
  ];

  const TextLogo = (
    <div className="flex items-center space-x-2 text-sm font-normal text-white">
      <span className="text-emerald-400">{'<'}</span>
      <span className="mx-1 font-bold tracking-tighter">MC</span>
      <span className="text-emerald-400">{'/>'}</span>
    </div>
  );

  return (
    <CardNav
      logo={TextLogo}
      logoAlt="MC Logo"
      items={cardItems}
      locale={locale}
      onLocaleChange={hrefForUiLocale}
      baseColor="rgba(0, 0, 0, 0.4)"


      menuColor="#fff"
    />
  );
}

export default Header;