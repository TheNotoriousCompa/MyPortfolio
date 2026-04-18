import React from 'react';
import { Contact } from '@/components/sections/Contact';
import { getDictionary, Locale } from '@/lib/get-dictionaries';

interface FooterProps {
  locale: Locale;
}

export default async function Footer({ locale }: FooterProps) {
  const dict = await getDictionary(locale);

  return (
    <footer>
      <Contact dict={dict.Contact} />
      <div className="text-center py-6 text-neutral-500 text-sm border-t border-white/5">
        <p>
          © {new Date().getFullYear()} Maurizio Compagnone. {locale === 'it' ? 'Tutti i diritti riservati.' : 'All rights reserved.'} — P. IVA 01234567890
        </p>
      </div>
    </footer>
  );
}
