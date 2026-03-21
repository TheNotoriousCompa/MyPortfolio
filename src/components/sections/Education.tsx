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
      id: 'hs-diploma',
      degree: dict.items.hs.degree,
      institution: dict.items.hs.institution,
      period: dict.items.hs.period || '2016 - 2021',
    },
    {
      id: 'cert-nextjs',
      degree: dict.items.certNextjs?.degree || 'Next.js Certificate',
      institution: dict.items.certNextjs?.institution,
      period: dict.items.certNextjs?.period,
      certificateLink: '/dashboard-app-certificate.pdf'
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
                <h3 className="text-xl font-bold text-white tracking-wider">{item.degree}</h3>
                <span className="text-emerald-400 font-mono text-sm whitespace-nowrap">{item.period}</span>
              </div>
              <div className="mb-4">
                {item.institution && <p className="text-emerald-500 font-medium">{item.institution}</p>}
                {item.period && <p className="text-neutral-400 text-sm mt-1">{item.period}</p>}
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
