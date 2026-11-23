'use client';



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
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12"><span className="text-emerald-400">#</span> {dict.title}</h2>
        <div className="space-y-6">
          {experienceItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-500 ease-out hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)] transform-gpu will-change-transform"
            >
              <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
              <div className="flex items-center text-emerald-400 mb-4">
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-emerald-300 transition-colors"
                  >
                    {item.company}
                  </a>
                ) : (
                  <span>{item.company}</span>
                )}
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
