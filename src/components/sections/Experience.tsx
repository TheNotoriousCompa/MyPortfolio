'use client';

import { SectionHeading } from '@/components/ui/section-heading';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
}

export const Experience = ({ dict }: { dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */ }) => {
  const experienceItems: ExperienceItem[] = [
    {
      id: 'ibi',
      title: dict.items.ibi?.title || 'Web Developer',
      company: dict.items.ibi?.company || 'IBI',
      companyUrl: dict.items.ibi?.companyUrl || 'https://www.ibi.it/',
      period: dict.items.ibi?.period || '',
      description: dict.items.ibi?.description || ''
    },
    {
      id: 'it-support',
      title: dict.items.itSupport?.title || 'IT Support',
      company: dict.items.itSupport?.company || 'ML Tech',
      companyUrl: dict.items.itSupport?.companyUrl || 'https://mltech.store/',
      period: dict.items.itSupport?.period || '',
      description: dict.items.itSupport?.description || ''
    },
    {
      id: 'field-survey',
      title: dict.items.survey?.title || 'Field Survey Operator',
      company: dict.items.survey?.company || 'Master Electric',
      companyUrl: dict.items.survey?.companyUrl || 'https://www.masterelectric.it/',
      period: dict.items.survey?.period || '',
      description: dict.items.survey?.description || ''
    }
  ];

  return (
    <section id="experience" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={dict.title} />
        <div className="space-y-4">
          {experienceItems.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-white/10 bg-[#0c0e0d] p-6"
            >
              <h3 className="text-balance text-xl font-semibold text-white">{item.title}</h3>
              <div className="mt-1 flex flex-col gap-1 text-sm text-emerald-300 sm:flex-row sm:items-center">
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-emerald-200 hover:underline"
                  >
                    {item.company}
                  </a>
                ) : (
                  <span>{item.company}</span>
                )}
                <span className="hidden text-neutral-600 sm:inline" aria-hidden="true">•</span>
                <span className="text-xs text-neutral-400">{item.period}</span>
              </div>
              <p className="mt-4 max-w-[60ch] text-pretty text-sm leading-relaxed text-neutral-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
