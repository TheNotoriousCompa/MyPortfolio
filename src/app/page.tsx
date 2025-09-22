'use client';
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/sections/About';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';


export default function Home() {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'My Projects' },
    { id: 'contacts', label: 'Contacts' },
  ];

  React.useEffect(() => {
    // Handle hash-based navigation when page loads
    const scrollToHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }, 50);
      }
    };

    // Run once on mount
    scrollToHash();

    // Also handle hash changes
    const handleHashChange = () => {
      scrollToHash();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
    <div className="relative min-h-screen">
      <main className="relative z-10">

      <Header 
        sections={sections}
      />

      <Hero scrollToSection={scrollToSection} />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      </main>
    </div>
  );
}
