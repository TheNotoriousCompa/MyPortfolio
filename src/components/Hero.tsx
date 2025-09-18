'use client';

import { Button } from "./ui/button"

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Space_Mono']">
            Hi, I&apos;m <span className="text-emerald-400">MC</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
}
