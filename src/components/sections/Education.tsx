'use client';

import { SectionTitle } from "@/components/sections/SectionTitle";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  certificateLink?: string;
}

export const Education = ({ dict }: { dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */ }) => {
  const educationItems: EducationItem[] = [
    {
      id: 'salerno-uni',
      degree: dict.items.university.degree,
      institution: dict.items.university.institution,
      period: '2023 - Present',
      description: dict.items.university.description
    },
    {
      id: 'hs-diploma',
      degree: dict.items.hs.degree,
      institution: dict.items.hs.institution,
      period: '2015 - 2020',
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{dict.title}</SectionTitle>
        <div className="space-y-6">
          {educationItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-white/10 bg-neutral-900/50 transition-all hover:border-emerald-500/30 hover:-translate-y-0.5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">{item.degree}</h3>
                <span className="text-emerald-400 font-mono text-sm whitespace-nowrap">{item.period}</span>
              </div>
              <div className="flex items-center text-emerald-400 mb-4">
                <span>{item.institution}</span>
                <span className="mx-2">•</span>
                <span className="text-neutral-400">{item.period}</span>
              </div>
              <p className="text-neutral-300 mb-4">
                {item.description}
              </p>
              {item.certificateLink && (
                <a
                  href={item.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
