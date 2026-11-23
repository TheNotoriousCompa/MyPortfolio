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
import Footer from '@/components/Footer';

export async function generateMetadata(props: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const dict = await getDictionary(locale);

  const title =
    dict.seo?.homeTitle ?? `Maurizio Compagnone — Portfolio | ${dict.Hero.role}`;
  const description =
    dict.seo?.homeDescription ?? dict.About.greeting;

  return {
    title,
    description,
    keywords: [
      locale === 'it' ? 'Sviluppatore Web Castelfiorentino' : 'Web Developer Castelfiorentino',
      locale === 'it' ? 'Sviluppatore Web Gambassi Terme' : 'Web Developer Gambassi Terme',
      'Valdelsa',
      'Next.js',
      'React',
      'Maurizio Compagnone',
    ],
    alternates: {
      canonical: `https://mcompagnone.netlify.app/${locale}`,
      languages: {
        it: 'https://mcompagnone.netlify.app/it',
        en: 'https://mcompagnone.netlify.app/en',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
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
    { id: 'experience', label: dict.common.sections.experience },
    { id: 'about', label: dict.common.sections.about },
    { id: 'education', label: dict.common.sections.education },
    { id: 'contacts', label: dict.common.sections.contacts },
  ];

  return (
    <div className="flex flex-col min-w-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-emerald-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-emerald-950"
      >
        {dict.common.skipToContent}
      </a>
      <ScrollManager />
      <Header sections={sections} locale={locale} />
      <main id="main-content" className="flex-1 pt-20">
        <Hero dict={dict.Hero} locale={locale} />
        <Projects dict={dict.Projects} />
        <Experience dict={dict.Experience} />
        <About dict={dict.About} />
        <Education dict={dict.Education} />
        <Contact dict={dict.Contact} locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

