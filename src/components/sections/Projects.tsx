'use client';

import LogoDisplay from "@/components/logodisplay";
import { EncryptedTexts } from "../textencrypted";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  links: {
    type: 'demo' | 'github' | 'gallery' | 'builds';
    url: string;
    label: string;
    disabled?: boolean;
  }[];
}

export function Projects({ dict }: { dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */ }) {
  const projects: Project[] = [
    {
      id: 'portfolio-v2',
      title: dict.items.portfolioV2.title,
      description: dict.items.portfolioV2.description,
      image: '/portfolio-preview.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Framer Motion', 'Netlify'],
      links: [
        {
          type: 'github',
          url: 'https://github.com/TheNotoriousCompa/MyPortfolio',
          label: dict.links.github
        }
      ],
    },
    {
      id: 'portfolio',
      title: dict.items.portfolioV1.title,
      description: dict.items.portfolioV1.description,
      image: '/first-portfolio-preview.png',
      technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Shadcn/UI', 'Firebase', 'Netlify'],
      links: [
        {
          type: 'demo',
          url: 'https://mysito.netlify.app/',
          label: dict.links.demo
        }
      ],
    },

    {
      id: 'audit',
      title: 'Audit',
      description: dict.items.audit.description,
      image: '/audit-preview.png',
      technologies: ['Python', 'yt-dlp', 'Electron', 'Next.js', 'TypeScript'],
      links: [
        {
          type: 'github',
          url: 'https://github.com/TheNotoriousCompa/Audit',
          label: dict.links.github
        }
      ],
    },
    {
      id: 'keyboard-renders',
      title: dict.items.keyboardRenders.title,
      description: dict.items.keyboardRenders.description,
      image: '/gallery/Image15.jpg',
      technologies: ['Blender', 'Substance Painter', '3D Modeling', 'Texturing', 'Rendering'],
      links: [
        {
          type: 'gallery',
          url: '/gallery',
          label: dict.links.gallery
        }
      ],
    },
    {
      id: 'pc-building',
      title: dict.items.pcBuilding.title,
      description: dict.items.pcBuilding.description,
      image: '/pc-building-preview.png',
      technologies: ['PC Building', 'Component Selection', 'Troubleshooting', 'Cable Management', 'Performance Tuning'],
      links: [
        {
          type: 'builds',
          url: 'https://mltech.store',
          label: dict.links.builds
        }
      ],
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12"><span className="text-emerald-400">#</span> {dict.title}</h2>
          <div>

            <EncryptedTexts text={dict.toolsTitle} />
            <LogoDisplay />

          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div

                key={project.id}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md transition-[transform,border-color,box-shadow] duration-500 ease-out hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)] transform-gpu will-change-transform h-full flex flex-col"
              >
                {project.image && (
                  <div className="relative w-full h-48 overflow-hidden bg-neutral-900/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="relative p-6 flex-1">
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
