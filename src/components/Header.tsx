"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import CardNav, { CardNavItem } from "./ui/CardNav";
import { siteConfig } from "@/lib/site-config";

interface Section {
  id: string;
  label: string;
}

interface HeaderProps {
  sections: Section[];
  locale: string;
}

export function Header({ sections, locale }: HeaderProps) {
  const pathname = usePathname();

  const hrefForUiLocale = (target: "en" | "it") =>
    pathname.replace(/^\/(en|it)(?=\/|$)/, `/${target}`);

  const cardItems: CardNavItem[] = [
    {
      label: "Portfolio",
      bgColor: "#0c0e0d",

      textColor: "#fff",
      links: sections
        .filter(s => ["about", "projects", "experience", "education"].includes(s.id))
        .map(s => ({
          label: s.label,
          href: `#${s.id}`,
          ariaLabel: s.label
        }))
    },
    {
      label: locale === 'it' ? "Contatti" : "Contact",
      bgColor: "#0c0e0d",

      textColor: "#fff",
      links: [
        {
          label: locale === 'it' ? "Scrivimi" : "Email Me",
          href: `#contacts`,
          ariaLabel: locale === 'it' ? "Vai ai contatti" : "Go to contact"
        },
        {
          label: "LinkedIn",
          href: siteConfig.links.linkedin,
          ariaLabel: "LinkedIn"
        },
        {
          label: "GitHub",
          href: siteConfig.links.github,
          ariaLabel: "GitHub"
        }
      ]
    }
  ];

  const TextLogo = (
    <Link
      href={`/${locale}`}
      className="flex items-center space-x-2 text-sm font-normal text-white"
      aria-label="Maurizio Compagnone — Home"
    >
      <span className="text-emerald-400">{'<'}</span>
      <span className="mx-1 font-bold tracking-tighter">MC</span>
      <span className="text-emerald-400">{'/>'}</span>
    </Link>
  );

  return (
    <CardNav
      logo={TextLogo}
      logoAlt="MC Logo"
      items={cardItems}
      locale={locale}
      menuLabel={locale === 'it' ? 'Menu' : 'Menu'}
      closeLabel={locale === 'it' ? 'Chiudi' : 'Close'}
      onLocaleChange={hrefForUiLocale}
      baseColor="rgba(8, 9, 10, 0.94)"


      menuColor="#fff"
    />
  );
}

export default Header;
