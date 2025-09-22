'use client';

import { SectionTitle } from "@/components/sections/SectionTitle";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    type: 'demo' | 'github' | 'gallery';
    url: string;
    label: string;
    disabled?: boolean;
  }[];
  icon: string;
  gradient: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 'portfolio-v2',
      title: 'Portfolio Website',
      description: 'This very website you are on! A modern, responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with smooth animations and interactive elements to showcase my work and skills.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Framer Motion'],
      links: [
        {
          type: 'github',
          url: 'https://github.com/TheNotoriousCompa/MyPortoflio',
          label: 'View on GitHub'
        }
      ],
      icon: '✨',
      gradient: 'from-purple-500/10 to-blue-500/10'
    },
    {
      id: 'portfolio',
      title: 'My first website',
      description: 'My personal website built with Next.js, Tailwind CSS, and TypeScript. Features a modern, responsive design with smooth scrolling navigation and interactive elements. Here anyone can post something and you can see some of my reviews on various pieces of media',
      technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Shadcn/UI'],
      links: [
        {
          type: 'demo',
          url: 'https://mysito.netlify.app/',
          label: 'Live Demo'
        }
      ],
      icon: 'MC',
      gradient: 'from-emerald-500/10 to-purple-500/10'
    },
    {
      id: 'mp3-downloader',
      title: 'YouTube MP3 Downloader',
      description: 'A Python application that downloads audio from YouTube videos using yt-dlp. Supports batch downloading from playlists and custom formatting options.',
      technologies: ['Python', 'yt-dlp', 'FFmpeg', 'CLI Tool'],
      links: [
        {
          type: 'github',
          url: 'https://github.com/TheNotoriousCompa/Playlist-Downloader',
          label: 'View on GitHub'
        }
      ],
      icon: '🎵',
      gradient: 'from-blue-500/10 to-emerald-500/10'
    },
    {
      id: 'keyboard-renders',
      title: '3D Keyboards Render',
      description: 'High-quality 3D renders of custom mechanical keyboards, showcasing different keycap sets, cases, and lighting effects. Created using Blender.',
      technologies: ['Blender', 'Substance Painter', '3D Modeling', 'Texturing', 'Rendering'],
      links: [
        {
          type: 'gallery',
          url: '/gallery',
          label: 'View Gallery'
        }
      ],
      icon: '⌨️',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      id: 'pc-building',
      title: 'PC Building Consultant',
      description: 'Provided personalized PC building consultations, helping friends, clients and companies select optimal components based on their budget and needs, from budget builds to high-end gaming rigs.',
      technologies: ['PC Building', 'Component Selection', 'Troubleshooting', 'Cable Management', 'Performance Tuning'],
      links: [
        {
          type: 'gallery',
          url: 'https://mltech.store',
          label: 'View Builds'
        }
      ],
      icon: '💻',
      gradient: 'from-amber-500/10 to-red-500/10'
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10 bg-white/5 backdrop-blur-[2px]">
      <div className="max-w-6xl mx-auto w-full">
        <div>
          <SectionTitle>My Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-neutral-800/30 rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <span className="text-emerald-400 text-4xl">{project.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-neutral-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-emerald-500/10 text-emerald-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${link.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        {...(link.disabled ? { 'aria-disabled': true, 'title': 'Coming soon' } : {})}
                      >
                        {link.type === 'github' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        )}
                        <span>{link.label}</span>
                        {link.type !== 'github' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
