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

  // Transforming flat sections into 3-card structure for CardNav
  const cardItems: CardNavItem[] = [
    {
      label: locale === 'it' ? "CHI SONO" : "ABOUT",
      bgColor: "rgba(2, 44, 34, 0.7)", // Verde Abete Scuro con più trasparenza
      textColor: "#fff",
      links: sections
        .filter(s => ["about", "experience", "education"].includes(s.id))
        .map(s => ({
          label: s.label,
          href: linkForSection(s),
          ariaLabel: s.label
        }))
    },
    {
      label: locale === 'it' ? "LAVORO" : "WORK",
      bgColor: "rgba(5, 77, 59, 0.7)", // Verde Foresta
      textColor: "#fff",
      links: sections
        .filter(s => ["projects", "local-web"].includes(s.id))
        .map(s => ({
          label: s.label,
          href: linkForSection(s),
          ariaLabel: s.label
        }))
    },
    {
      label: locale === 'it' ? "CONTATTI" : "CONTACT",
      bgColor: "rgba(16, 120, 90, 0.7)", // Verde Smeraldo Soft
      textColor: "#fff",
      links: [
        ...sections
          .filter(s => s.id === "contacts")
          .map(s => ({
            label: s.label,
            href: linkForSection(s),
            ariaLabel: s.label
          })),
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