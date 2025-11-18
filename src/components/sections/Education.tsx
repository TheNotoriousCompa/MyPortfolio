'use client';

import { SectionTitle } from "@/components/sections/SectionTitle";

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
}

export function Education() {
  const educationItems: EducationItem[] = [
    {
      id: 'university',
      title: "Bachelor's Degree in Computer Science",
      institution: "University of Florence",
      period: "2022 - Ongoing",
      description: "Currently pursuing a degree in Computer Science with a focus on software development and computer systems. Coursework includes algorithms, data structures, web development, and database management."
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
              <p className="text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
