'use client';

import React from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { SectionHeading } from '@/components/ui/section-heading';

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
  backend: ['C#', '.NET', 'ASP.NET Core', 'SQL', 'Supabase'],
  desktop: ['Electron', 'Tauri', 'Rust', 'Kotlin', 'React Native'],
};

const languages = [
  { id: 'italian', level: 'native' },
  { id: 'english', level: 'certified' },
] as const;

export function About({
  dict,
}: {
  dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */;
}) {
  const badgeClassName =
    'px-3 py-1.5 text-sm font-medium text-neutral-300 bg-white/[0.03] border border-white/10 rounded-md';

  const groups = [
    { key: 'frontend', label: dict.groups?.frontend || 'Frontend', items: skills.frontend },
    { key: 'backend', label: dict.groups?.backend || 'Backend & Data', items: skills.backend },
    { key: 'desktop', label: dict.groups?.desktop || 'Desktop & Mobile', items: skills.desktop },
  ];

  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={dict.title} />
        <div className="flex flex-col gap-8">
          <div className="max-w-[68ch] space-y-5 text-pretty text-base leading-relaxed text-neutral-300 md:text-lg">
            <p className="text-neutral-200">{dict.greeting}</p>
            <p>{dict.p2}</p>
            <p>{dict.p3}</p>
          </div>

          <CardSpotlight className="w-full overflow-hidden p-6 md:p-8">
            <div className="grid gap-10 lg:grid-cols-4">
              <div className="space-y-6 lg:col-span-3">
                <h3 className="text-xl font-semibold text-white">
                  {dict.technicalSkills}
                </h3>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {groups.map((group) => (
                    <div key={group.key}>
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                        {group.label}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span key={skill} className={badgeClassName}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6 lg:border-l lg:border-white/10 lg:pl-10">
                <h3 className="text-xl font-semibold text-white">
                  {dict.languages}
                </h3>
                <div className="space-y-5">
                  {languages.map((lang) => (
                    <div key={lang.id} className="flex flex-col gap-1">
                      <span className="text-lg font-semibold text-white">
                        {dict.languageNames?.[lang.id] || lang.id}
                      </span>
                      <span className="text-sm text-neutral-400">
                        {lang.level === 'native' ? dict.native : dict.certified}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
}
