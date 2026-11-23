'use client';

import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

type ProjectLink = {
  type: 'demo' | 'github' | 'releases';
  url: string;
  label: string;
  disabled?: boolean;
};

type ProjectMedia =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'phone'; src: string; alt: string }
  | { kind: 'print' };

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  status?: string;
  media?: ProjectMedia;
  featured?: boolean;
}

function PrintSheetPreview({ label }: { label: string }) {
  return (
    <div
      className="relative flex h-full items-center justify-center overflow-hidden bg-[#080a09] p-6"
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.1),transparent_62%)]" />
      <div className="relative grid w-full max-w-[280px] grid-cols-3 gap-1.5 rounded-sm border border-white/15 bg-[#0c0e0d] p-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="aspect-[63/88] rounded-[2px] border border-white/10 bg-gradient-to-br from-neutral-700/80 to-neutral-900 p-1"
          >
            <div className="h-full w-full rounded-[1px] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.18),transparent_55%),linear-gradient(160deg,#1c211f,#0d100f)]" />
          </div>
        ))}
      </div>
      <span className="absolute right-4 top-4 h-2 w-2 border-r border-t border-emerald-400/60" aria-hidden="true" />
    </div>
  );
}

function ProjectMedia({ media, printSheetLabel }: { media?: ProjectMedia; printSheetLabel: string }) {
  if (!media) return null;

  if (media.kind === 'print') {
    return (
      <div className="aspect-[4/3] border-b border-white/10">
        <PrintSheetPreview label={printSheetLabel} />
      </div>
    );
  }

  if (media.kind === 'phone') {
    return (
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.1),transparent_62%)]">
        <div className="relative aspect-[9/20] h-[92%] overflow-hidden rounded-[1.6rem] border border-white/15 bg-black shadow-2xl">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="180px"
            loading="eager"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-[#080a09]">
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover object-top"
      />
    </div>
  );
}

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link, index) => (
        <a
          key={`${link.url}-${index}`}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-md border border-white/10 px-3 text-xs font-medium text-neutral-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
        >
          {link.type === 'github' ? (
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function Projects({ dict }: { dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */ }) {
  const projects: Project[] = [
    {
      id: 'audit',
      title: 'Audit',
      description: dict.items.audit.description,
      technologies: ['TypeScript', 'Electron', 'Python', 'yt-dlp', 'FFmpeg'],
      media: {
        kind: 'image',
        src: '/audit-preview.png',
        alt: dict.media.auditAlt,
      },
      links: [
        {
          type: 'github',
          url: 'https://github.com/TheNotoriousCompa/Audit',
          label: dict.links.github
        },
        {
          type: 'releases',
          url: 'https://github.com/TheNotoriousCompa/Audit/releases',
          label: dict.links.releases
        }
      ],
      featured: true,
    },
    {
      id: 'openproxy',
      title: dict.items.openproxy.title,
      description: dict.items.openproxy.description,
      technologies: ['Tauri 2', 'Rust', 'React', 'TypeScript', 'SQLite'],
      media: { kind: 'print' },
      links: [
        {
          type: 'github',
          url: 'https://github.com/TheNotoriousCompa/openproxy-decks',
          label: dict.links.github
        },
        {
          type: 'releases',
          url: 'https://github.com/TheNotoriousCompa/openproxy-decks/releases',
          label: dict.links.releases
        }
      ],
      featured: true,
    },
    {
      id: 'audit-mobile',
      title: dict.items.auditMobile.title,
      description: dict.items.auditMobile.description,
      technologies: ['React Native', 'Expo', 'TypeScript', 'Kotlin', 'Media3'],
      media: {
        kind: 'phone',
        src: '/audit-mobile-preview.jpg',
        alt: dict.media.auditMobileAlt,
      },
      links: [],
      status: dict.status.preview,
      featured: true,
    },
    {
      id: 'spotter',
      title: dict.items.spotter.title,
      description: dict.items.spotter.description,
      technologies: ['SQL', 'Supabase'],
      links: [],
      status: dict.status.internal,
    },
    {
      id: 'phyron-checker',
      title: dict.items.phyronChecker.title,
      description: dict.items.phyronChecker.description,
      technologies: ['Python', 'HTTP'],
      links: [],
      status: dict.status.internal,
    },
    {
      id: 'portfolio',
      title: dict.items.portfolio.title,
      description: dict.items.portfolio.description,
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
      links: [
        {
          type: 'github',
          url: 'https://github.com/TheNotoriousCompa/MyPortfolio',
          label: dict.links.github
        }
      ],
    },
  ];

  const featured = projects.filter((project) => project.featured);
  const other = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={dict.title} />

        <div className="grid gap-5 lg:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0c0e0d]"
            >
              <ProjectMedia media={project.media} printSheetLabel={dict.media.printSheetAlt} />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-balance text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-emerald-500/10 bg-emerald-500/5 px-2 py-0.5 text-xs font-medium text-emerald-300/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.status && (
                  <p className="mt-4 text-xs font-medium text-amber-300/90">
                    {project.status}
                  </p>
                )}
                <div className="mt-auto pt-5">
                  <ProjectLinks links={project.links} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            {dict.other}
          </h3>
          <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
            {other.map((project) => (
              <div
                key={project.id}
                className="grid gap-3 py-5 md:grid-cols-[0.9fr_2fr_auto] md:items-center md:gap-6"
              >
                <h4 className="text-base font-semibold text-white">{project.title}</h4>
                <p className="max-w-[62ch] text-pretty text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 md:justify-end">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white/10 px-2 py-0.5 text-xs font-medium text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.status && (
                    <span className="text-xs font-medium text-amber-300/90">
                      {project.status}
                    </span>
                  )}
                  <ProjectLinks links={project.links} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
