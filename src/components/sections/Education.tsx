'use client';

import { SectionTitle } from "@/components/sections/SectionTitle";

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  certificateLink?: string;
}

export function Education() {
  const educationItems: EducationItem[] = [

    {
      id: 'vercel-course',
      title: "Next.js Dashboard Analysis & Optimization",
      institution: "Vercel - Next.js Learn Course",
      period: "2026",
      description: "Completed the official Next.js Learn course, focusing on the fundamentals of modern routing, layouts, and navigation in Next.js.",
      certificateLink: "/dashboard-app-certificate.pdf"
    },
    {
      id: 'highschool',
      title: "Scientific High School Diploma",
      institution: "Liceo Scientifico Enriques",
      period: "2016 - 2021",
      description: "Graduated with a focus on scientific studies, including advanced mathematics, physics, and computer science fundamentals. Developed strong analytical and problem-solving skills through the scientific curriculum."
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Education</SectionTitle>
        <div className="space-y-6">
          {educationItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-white/10 bg-neutral-900/50 transition-all hover:border-emerald-500/30 hover:-translate-y-0.5"
            >
              <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
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
