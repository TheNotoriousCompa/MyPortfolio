'use client';
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/sections/About';
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
    <div className="flex flex-col min-w-screen">
      <Header sections={sections} />
      <main className="flex-1 pt-20">
        <div id="hero">
          <Hero scrollToSection={scrollToSection} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contacts">
          <Contact />
        </div>
      </main>
    </div>
  );
}
