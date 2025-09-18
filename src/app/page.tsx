'use client';
import { handleSmoothScroll } from '@/lib/smooth-scroll';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';


export default function Home() {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'My Projects' },
    { id: 'contacts', label: 'Contacts' },
  ];

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
        scrollToSection={scrollToSection}
        handleSmoothScroll={handleSmoothScroll}
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
