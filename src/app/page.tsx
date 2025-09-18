'use client';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { handleSmoothScroll } from '@/lib/smooth-scroll';

const Section = ({ 
  id, 
  children, 
  className = '' 
}: { 
  id: string; 
  children: React.ReactNode; 
  className?: string 
}) => (
  <section 
    id={id} 
    className={`min-h-screen flex items-center justify-center py-20 px-4 relative z-10 ${className}`}
  >
    <div className="max-w-6xl mx-auto w-full">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-['Space_Mono']">
    <span className="text-emerald-400">#</span> {children}
  </h2>
);

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

      {/* header */}
      <header className="sticky top-10 left-0 right-0 z-20">
        <nav className="max-w-7xl mx-auto backdrop-blur-xs bg-white/5 border border-white/10 shadow-lg shadow-emerald-500/5 rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 hover:bg-white/10">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center font-['Space_Mono'] font-bold hover:opacity-80 transition-opacity"
          >
            <span className="text-emerald-400">{'<'}</span>
            <span className="text-white mx-1">MC</span>
            <span className="text-emerald-400">{'/>'}</span>
          </button>
          
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-2">
              {sections.slice(1).map((section) => (
                <NavigationMenuItem key={section.id}>
                  <NavigationMenuLink 
                    href={`#${section.id}`}
                    onClick={(e) => handleSmoothScroll(e, section.id)}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'data-[active]:bg-emerald-500/20 data-[active]:text-emerald-400',
                      'bg-transparent hover:bg-emerald-500/10',
                      'text-neutral-300 hover:text-white',
                      'font-["Space_Mono"] font-bold',
                      'transition-colors duration-200'
                    )}
                  >
                    {section.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-neutral-300 hover:text-white hover:bg-white/10 font-['Space_Mono'] font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-neutral-900/95 backdrop-blur-sm border-0 p-0">
              <div className="flex flex-col space-y-4 mt-8 p-4">
                {sections.slice(1).map((section) => (
                  <a 
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => handleSmoothScroll(e, section.id)}
                    className="text-neutral-300 hover:text-white text-lg py-2 px-4 rounded-lg hover:bg-white/10 transition-colors font-['Space_Mono'] font-bold"
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      {/* Hero Section */}
      <Section id="hero" className="relative">
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
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-white/5 backdrop-blur-[2px]">
        <div>
          <SectionTitle>About Me</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-neutral-300 mb-6 text-lg">
                I am a computer science student passionate about books, cinema, and videogames. My true passion is anything that combines creativity and technology at all its levels.
              </p>
              <p className="text-neutral-300 mb-6 text-lg">
                I enjoy assembling fully customised PCs and mechanical keyboards since there is something deeply satisfying about seeing separate components becoming something functional and unique, with its own character.
              </p>
              <p className="text-neutral-300 text-lg">
                I am curious by nature and I like to understand how various things work, not just superficially. Whether it&apos;s taking apart a device, reading technical documentation, or programming a website, I always try to seek the balance between practicality and aesthetics.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-neutral-800/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Mono']">Technical Skills</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-emerald-400 mb-2">Web Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'Shadcn'].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 mb-2">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Java'].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 mb-2">Design & 3D</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Blender', 'GIMP', 'Photoshop', 'Canva'].map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-800/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Mono']">Languages</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-neutral-300">Italian</span>
                      <span className="text-sm text-neutral-400">Native</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-neutral-300">English</span>
                      <span className="text-sm text-neutral-400">C1 Level</span>
                    </div>
                  </div>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" className="bg-neutral-900/50">
        <div>
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-6">
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-1">Bachelor&apos;s Degree in Computer Science</h3>
              <div className="flex items-center text-emerald-400 mb-4">
                <span>University of Florence</span>
                <span className="mx-2">•</span>
                <span className="text-neutral-400">2022 - Ongoing</span>
              </div>
              <p className="text-neutral-300">
                Currently pursuing a degree in Computer Science with a focus on software development and computer systems.
                Coursework includes algorithms, data structures, web development, and database management.
              </p>
            </div>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-1">Scientific High School Diploma</h3>
              <div className="flex items-center text-emerald-400 mb-4">
                <span>Liceo Scientifico Enriques</span>
                <span className="mx-2">•</span>
                <span className="text-neutral-400">2016 - 2021</span>
              </div>
              <p className="text-neutral-300">
                Graduated with a focus on scientific studies, including advanced mathematics, physics, and computer science fundamentals.
                Developed strong analytical and problem-solving skills through the scientific curriculum.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div>
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-6">
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-1">Field Survey Assistant</h3>
              <div className="flex items-center text-emerald-400 mb-4">
                <span>Masterelectric s.r.l</span>
                <span className="mx-2">•</span>
                <span className="text-neutral-400">10/2024 - 12/2024</span>
              </div>
              <p className="text-neutral-300">
                Recorded and geolocated public lighting infrastructure using digital tools and maps. Worked completely independently with unscheduled hours, managing the project autonomously.
              </p>
            </div>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-1">IT Support</h3>
              <div className="flex items-center text-emerald-400 mb-4">
                <span>ML Tech</span>
                <span className="mx-2">•</span>
                <span className="text-neutral-400">2022 - 2025</span>
              </div>
              <p className="text-neutral-300">
                Provided technical support services, including assembling gaming computers and workstations. Resolved hardware and software issues, tested components, and ensured optimal system performance.
              </p>
            </div>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-1">Guest Reception</h3>
              <div className="flex items-center text-emerald-400 mb-4">
                <span>Le Case di Camin Bianco</span>
                <span className="mx-2">•</span>
                <span className="text-neutral-400">2023 - 2024</span>
              </div>
              <p className="text-neutral-300">
                Provided guest reception and customer service in a rural hospitality setting. Handled check-in/out procedures, offered information about local attractions, and ensured a pleasant guest experience.
              </p>
            </div>

            <div className="bg-neutral-900/50 p-6 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-1">Construction Artisan</h3>
              <div className="flex items-center text-emerald-400 mb-4">
                <span>Compagnone s.r.l</span>
                <span className="mx-2">•</span>
                <span className="text-neutral-400">2021 - 2024</span>
              </div>
              <p className="text-neutral-300">
                Worked as a construction apprentice following safety regulations, collaborating in teams, and executing tasks according to instructions. Developed strong teamwork and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-white/5 backdrop-blur-[2px]">
        <div>
          <SectionTitle>My Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Portfolio Website */}
            <div className="bg-neutral-800/30 rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-emerald-500/10 to-purple-500/10 flex items-center justify-center">
                <span className="text-emerald-400 text-4xl">MC</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Portfolio Website</h3>
                <p className="text-neutral-400 mb-4">
                  My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript. Features a modern, responsive design with smooth scrolling navigation and interactive elements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Shadcn/UI'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://mysito.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    <span>Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* MP3 Downloader */}
            <div className="bg-neutral-800/30 rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 flex items-center justify-center">
                <span className="text-emerald-400 text-4xl">🎵</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">YouTube MP3 Downloader</h3>
                <p className="text-neutral-400 mb-4">
                  A Python application that downloads audio from YouTube videos using yt-dlp. Supports batch downloading from playlists and custom formatting options.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'yt-dlp', 'FFmpeg', 'CLI Tool'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/TheNotoriousCompa/Playlist-Downloader" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 3D Keyboards Render */}
            <div className="bg-neutral-800/30 rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                <span className="text-emerald-400 text-4xl">⌨️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">3D Keyboards Render</h3>
                <p className="text-neutral-400 mb-4">
                  High-quality 3D renders of custom mechanical keyboards, showcasing different keycap sets, cases, and lighting effects. Created using Blender and Substance Painter.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Blender', 'Substance Painter', '3D Modeling', 'Texturing', 'Rendering'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors opacity-50 cursor-not-allowed"
                    title="Coming soon"
                  >
                    <span>View Gallery</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* PC Building Consultant */}
            <div className="bg-neutral-800/30 rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-amber-500/10 to-red-500/10 flex items-center justify-center">
                <span className="text-emerald-400 text-4xl">💻</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">PC Building Consultant</h3>
                <p className="text-neutral-400 mb-4">
                  Provided personalized PC building consultations, helping friends and clients select optimal components based on their budget and needs, from budget builds to high-end gaming rigs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['PC Building', 'Component Selection', 'Troubleshooting', 'Cable Management', 'Performance Tuning'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors opacity-50 cursor-not-allowed"
                    title="Coming soon"
                  >
                    <span>View Builds</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contacts">
        <div className="text-center">
          <SectionTitle>Get In Touch</SectionTitle>
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll get back to you as soon as possible!
          </p>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-neutral-900/50 p-8 rounded-xl border border-white/5 text-left">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a 
                      href="mailto:compagnone.maurizio290@gmail.com" 
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      compagnone.maurizio290@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <a 
                      href="tel:+393290147907" 
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      +39 329 014 7907
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-500/10 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-neutral-300">Gambassi Terme, Tuscany, Italy</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://github.com/TheNotoriousCompa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors p-2"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-neutral-400 hover:text-white transition-colors p-2"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-neutral-900/50 p-8 rounded-xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6 text-left">Send me a message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-left text-neutral-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-neutral-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-left text-neutral-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-neutral-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-left text-neutral-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-neutral-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-left text-neutral-300">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-neutral-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
      </main>
    </div>
  );
}
