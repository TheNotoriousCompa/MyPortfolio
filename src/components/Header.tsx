"use client";

import { usePathname } from "next/navigation";
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
      label: "PORTFOLIO",
      bgColor: "#000",

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
      label: locale === 'it' ? "CONTATTI" : "CONTACT",
      bgColor: "#000",

      textColor: "#fff",
      links: [
        {
          label: locale === 'it' ? "Scrivimi" : "Email Me",
          href: `#contacts`,
          ariaLabel: "Modulo Contatti"
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
