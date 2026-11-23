import React from 'react';
import { Contact } from '@/components/sections/Contact';
import { getDictionary, Locale } from '@/lib/get-dictionaries';

interface FooterProps {
  locale: Locale;
  showContact?: boolean;
}

export default async function Footer({ locale, showContact = true }: FooterProps) {
  const dict = await getDictionary(locale);

  return (
    <footer>
      {showContact && <Contact dict={dict.Contact} locale={locale} />}
      <div className="text-center py-6 text-neutral-500 text-sm border-t border-white/5 space-y-1">
        <p>
          © {new Date().getFullYear()} Maurizio Compagnone. {locale === 'it' ? 'Tutti i diritti riservati.' : 'All rights reserved.'}
        </p>
        <p>
          <a
            href="https://github.com/TheNotoriousCompa/MyPortfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            {locale === 'it' ? 'Sorgente di questo sito' : 'Source code of this site'}
          </a>
        </p>
      </div>
    </footer>
  );
}
