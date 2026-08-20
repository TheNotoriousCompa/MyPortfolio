'use client';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    type: 'demo' | 'github' | 'releases';
    url: string;
    label: string;
    disabled?: boolean;
  }[];
}

export function Projects({ dict }: { dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */ }) {
  const projects: Project[] = [
    {
      id: 'audit',
      title: 'Audit',
      description: dict.items.audit.description,
      technologies: ['TypeScript', 'Electron', 'Python', 'yt-dlp', 'FFmpeg'],
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
    },
    {
      id: 'spotter',
      title: dict.items.spotter.title,
      description: dict.items.spotter.description,
      technologies: ['SQL', 'Supabase'],
      links: [],
    },
    {
      id: 'phyron-checker',
      title: dict.items.phyronChecker.title,
      description: dict.items.phyronChecker.description,
      technologies: ['Python', 'HTTP'],
      links: [],
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

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12"><span className="text-emerald-400">#</span> {dict.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div

                key={project.id}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md transition-[transform,border-color,box-shadow] duration-500 ease-out hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)] transform-gpu will-change-transform h-full flex flex-col"
              >
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
