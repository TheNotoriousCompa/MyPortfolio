'use client';

import { SectionHeading } from '@/components/ui/section-heading';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const Education = ({ dict }: { dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */ }) => {
  const educationItems: EducationItem[] = [
    {
      id: 'cert-mastering-csharp',
      degree: dict.items.certMasteringCsharp?.degree || 'Mastering: C#',
      institution: dict.items.certMasteringCsharp?.institution || '',
      period: dict.items.certMasteringCsharp?.period || '',
      description: dict.items.certMasteringCsharp?.description,
    },
    {
      id: 'cert-nextjs',
      degree: dict.items.certNextjs?.degree || 'Next.js Certificate',
      institution: dict.items.certNextjs?.institution || '',
      period: dict.items.certNextjs?.period || '',
    },
    {
      id: 'hs-diploma',
      degree: dict.items.hs.degree,
      institution: dict.items.hs.institution,
      period: dict.items.hs.period || '2016 - 2021',
    },
  ];

  return (
    <section id="education" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={dict.title} />
        <div className="space-y-4">
          {educationItems.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-white/10 bg-[#0c0e0d] p-6"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="text-balance text-xl font-semibold tracking-tight text-white">
                  {item.degree}
                </h3>
                <span className="text-sm text-emerald-300">{item.period}</span>
              </div>
              {item.institution && (
                <p className="mt-1 text-sm text-emerald-300">{item.institution}</p>
              )}
              {item.description && (
                <p className="mt-3 max-w-[60ch] text-pretty text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
