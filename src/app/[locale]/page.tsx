import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Projects } from '@/components/sections/Projects';
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
    {
      id: 'local-web',
      label: dict.common.sections.localWeb,
      href: `/${locale}/sviluppo-web`,
    },
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
      <Footer locale={locale} />
    </div>
  );
}

