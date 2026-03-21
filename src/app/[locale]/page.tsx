import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { ScrollManager } from '@/components/ScrollManager';

export async function generateMetadata(props: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const dict = await getDictionary(locale);

  return {
    title: `Maurizio Compagnone — Portfolio | ${dict.Hero.role}`,
    description: dict.About.greeting,
    alternates: {
      canonical: `https://mcompagnone.netlify.app/${locale}`,
      languages: {
        'it': 'https://mcompagnone.netlify.app/it',
        'en': 'https://mcompagnone.netlify.app/en',
      },
    },
    openGraph: {
      title: `Maurizio Compagnone — Portfolio | ${dict.Hero.role}`,
      description: dict.About.greeting,
      type: 'website',
      url: `https://mcompagnone.netlify.app/${locale}`,
    },
  };
}

import { getDictionary, Locale } from '@/lib/get-dictionaries';

export default async function Home(props: {
  params: Promise<{ locale: Locale }>;
}) {
  const params = await props.params;
  const locale = params.locale;
  const dict = await getDictionary(locale);

  const sections = [
    { id: 'hero', label: dict.common.sections.home },
    { id: 'projects', label: dict.common.sections.projects },
    { id: 'education', label: dict.common.sections.education },
    { id: 'about', label: dict.common.sections.about },
    { id: 'experience', label: dict.common.sections.experience },
    { id: 'contacts', label: dict.common.sections.contacts },
  ];

  return (
    <div className="flex flex-col min-w-screen">
      <ScrollManager />
      <Header sections={sections} locale={locale} />
      <main className="flex-1 pt-20">
        <div id="hero">
          <Hero dict={dict.Hero} />
        </div>
        <Projects dict={dict.Projects} />
        <Education dict={dict.Education} />
        <About dict={dict.About} />
        <Experience dict={dict.Experience} />
      </main>
      <footer>
        <Contact dict={dict.Contact} />
        <div className="text-center py-6 text-neutral-500 text-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} Maurizio Compagnone. {locale === 'it' ? 'Tutti i diritti riservati.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
}

