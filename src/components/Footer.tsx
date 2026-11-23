import React from 'react';
import type { Locale } from '@/lib/get-dictionaries';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-neutral-400 sm:flex-row sm:text-left">
        <p className="text-pretty">
          © {new Date().getFullYear()} Maurizio Compagnone.{' '}
          {locale === 'it' ? 'Tutti i diritti riservati.' : 'All rights reserved.'}
        </p>
        <a
          href="https://github.com/TheNotoriousCompa/MyPortfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-emerald-300"
        >
          {locale === 'it' ? 'Sorgente di questo sito' : 'Source code of this site'}
        </a>
      </div>
    </footer>
  );
}
