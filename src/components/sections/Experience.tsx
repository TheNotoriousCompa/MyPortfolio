'use client';

import { SectionTitle } from "@/components/sections/SectionTitle";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export function Experience() {
  const experienceItems: ExperienceItem[] = [
    {
      id: 'field-survey',
      title: 'Field Survey Assistant',
      company: 'Masterelectric s.r.l',
      period: '10/2024 - 12/2024',
      description: 'Recorded and geolocated public lighting infrastructure using digital tools and maps. Worked completely independently with unscheduled hours, managing the project autonomously.'
    },
    {
      id: 'it-support',
      title: 'IT Support',
      company: 'ML Tech',
      period: '2022 - 2025',
      description: 'Provided technical support services, including assembling gaming computers and workstations. Resolved hardware and software issues, tested components, and ensured optimal system performance.'
    },
    {
      id: 'guest-reception',
      title: 'Guest Reception',
      company: 'Le Case di Camin Bianco',
      period: '2023 - 2024',
      description: 'Provided guest reception and customer service in a rural hospitality setting. Handled check-in/out procedures, offered information about local attractions, and ensured a pleasant guest experience.'
    },
    {
      id: 'construction',
      title: 'Construction Artisan',
      company: 'Compagnone s.r.l',
      period: '2021 - 2024',
      description: 'Worked as a construction apprentice following safety regulations, collaborating in teams, and executing tasks according to instructions. Developed strong teamwork and problem-solving skills.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-6">
          {experienceItems.map((item) => (
            <div 
              key={item.id}
              className="p-6 rounded-xl border border-white/10 bg-neutral-900/50 hover:border-emerald-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
              <div className="flex items-center text-emerald-400 mb-4">
                <span>{item.company}</span>
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
