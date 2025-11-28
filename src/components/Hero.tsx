'use client';

import { Button } from "./ui/button";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { FileDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState({}, '', `#${id}`);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          <div className="flex justify-center mb-8 overflow-visible px-4">
            <div className="w-full max-w-5xl overflow-visible">
              <TextHoverEffect text="Hi, I am MC" duration={1} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-full bg-emerald-500/30 hover:bg-emerald-500/40 text-white transition-all duration-300 border border-emerald-400/50 hover:border-emerald-400/80 text-lg font-bold font-mono"
              variant="outline"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contacts')}
              className="px-8 py-4 rounded-full bg-transparent hover:bg-white/10 text-white transition-all duration-300 border border-white/10 hover:border-white/20 text-lg font-bold font-mono"
              variant="outline"
            >
              Contact Me
            </Button>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/CV-EN .pdf';
                link.download = 'MC_CV.pdf';
                link.click();
              }}
              className="px-6 py-3 rounded-full bg-transparent hover:bg-white/10 text-white transition-all duration-300 border border-white/10 hover:border-white/20 group flex items-center gap-2"
              variant="outline"
            >
              <FileDown className="w-6 h-6 text-emerald-400 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-300" />
              <span className="text-lg font-bold font-mono text-emerald-400 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-300">CV</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
