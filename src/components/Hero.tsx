'use client';

import { Button } from "./ui/button";
import { FileDown } from 'lucide-react';

export function Hero({
  dict,
  locale,
}: {
  dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */;
  locale: string;
}) {
  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
      });
      window.history.pushState({}, '', `#${id}`);
    }
  };

  const cvHref = locale === 'en' ? '/cv-en.pdf' : '/cv.pdf';
  const cvName = locale === 'en' ? 'MC_CV_EN.pdf' : 'MC_CV.pdf';
  const scrollLabel = locale === 'it' ? 'Scorri' : 'Scroll';

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[88svh] items-center justify-center px-4 pb-24 pt-28"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
          {dict.fullName}
        </h1>
        <p className="mt-5 text-lg font-medium text-emerald-300 md:text-xl">
          {dict.role}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
          {dict.tagline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            onClick={() => scrollToSection('projects')}
            className="min-h-11 rounded-md bg-emerald-400 px-6 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-300 focus-visible:ring-emerald-300"
          >
            {dict.viewWork}
          </Button>
          <Button
            onClick={() => scrollToSection('contacts')}
            className="min-h-11 rounded-md border border-white/15 bg-transparent px-6 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:ring-white/40"
          >
            {dict.contactMe}
          </Button>
        </div>
        <a
          href={cvHref}
          download={cvName}
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
        >
          <FileDown className="h-4 w-4" aria-hidden="true" />
          CV
        </a>

        <div className="mt-16 flex flex-col items-center gap-2 text-neutral-400">
          <span className="text-xs font-medium uppercase tracking-[0.18em]">
            {scrollLabel}
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-emerald-400/50 to-transparent" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
