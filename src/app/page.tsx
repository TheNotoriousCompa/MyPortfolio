import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { ScrollManager } from '@/components/ScrollManager';


export default function Home() {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'My Projects' },
    { id: 'education', label: 'Education' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'contacts', label: 'Contacts' },
  ];

  return (
    <div className="flex flex-col min-w-screen">
      <ScrollManager />
      <Header sections={sections} />
      <main className="flex-1 pt-20">
        <div id="hero">
          <Hero />
        </div>
        <Projects />
        <Education />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
