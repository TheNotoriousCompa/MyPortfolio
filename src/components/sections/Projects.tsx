'use client';

import Image from "next/image";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import LogoDisplay from "@/components/logodisplay";
import { useParams } from "next/navigation";
import { EncryptedTexts } from "../textencrypted";

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  technologies: string[];
  links: {
    type: 'demo' | 'github' | 'gallery';
    url: string;
    label: string;
    disabled?: boolean;
  }[];
}

export function Projects({ dict }: { dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */ }) {
  const params = useParams();
  const locale = params?.locale || 'en';

  const projects: Project[] = [
    {
      id: 'spotter',
      title: 'Spotter',
      description: dict.items.spotter.description,
      image: '/spotter-preview.png',
      imageAlt: 'Screenshot of Spotter, a management platform for personal trainers built with Next.js and Supabase',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Fitness Tech'],
      links: [
        {
          type: 'demo',
          url: 'https://fitdoc.netlify.app/',
          label: dict.links.demo
        }
      ],
    },
    {
      id: 'portfolio-v2',
      title: dict.items.portfolioV2.title,
      description: dict.items.portfolioV2.description,
      image: '/portfolio-preview.png',
      imageAlt: 'Screenshot of portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion',
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
      imageAlt: 'Screenshot of first personal website with content management features, built with Next.js and Firebase',
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
      imageAlt: 'Screenshot of Audit, a modern yt-dlp wrapper built with Electron and Next.js for downloading videos',
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
      imageAlt: '3D render of a custom mechanical keyboard created with Blender, Substance Painter and advanced texturing',
      technologies: ['Blender', 'Substance Painter', '3D Modeling', 'Texturing', 'Rendering'],
      links: [
        {
          type: 'gallery',
          url: `/${locale}/gallery`,
          label: dict.links.gallery
        }
      ],
    },
    {
      id: 'pc-building',
      title: dict.items.pcBuilding.title,
      description: dict.items.pcBuilding.description,
      image: '/pc-building-preview.png',
      imageAlt: 'Custom-built PC showcasing component selection, cable management and performance tuning',
      technologies: ['PC Building', 'Component Selection', 'Troubleshooting', 'Cable Management', 'Performance Tuning'],
      links: [
        {
          type: 'gallery',
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
          <SectionTitle>{dict.title}</SectionTitle>
          <div>

            <EncryptedTexts />
            <LogoDisplay />

          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div

                key={project.id}
                className="relative rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <DottedGlowBackground
                  className="absolute inset-0 -z-10"
                  color="#10f0a0"
                  glowColor="#10f0a0"
                  gap={32}
                  radius={2}
                  opacity={0.3}
                  glowColorLightVar="--emerald-300"
                />
                {project.image && (
                  <div className="relative w-full h-48 overflow-hidden bg-neutral-900/50">
                    <Image
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                  </div>
                )}
                <div className="relative p-6 flex-1 bg-gradient-to-b from-neutral-900/50">
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
                        target={link.url.startsWith('/') ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className={`px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${link.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        {...(link.disabled ? { 'aria-disabled': true, 'title': 'Coming soon' } : {})}
                      >
                        {link.type === 'github' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        )}
                        <span>{link.label}</span>
                        {link.type !== 'github' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
