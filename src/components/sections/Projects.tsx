'use client';

import LogoDisplay from "@/components/logodisplay";
import { useParams } from "next/navigation";
import { EncryptedTexts } from "../textencrypted";

import { ProjectCard, Project } from "@/components/ui/project-card";

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12"><span className="text-emerald-400">#</span> {dict.title}</h2>
          <div>

            <EncryptedTexts text={dict.toolsTitle} />
            <LogoDisplay />

          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
