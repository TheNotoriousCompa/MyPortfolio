'use client';


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
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12"><span className="text-emerald-400">#</span> {dict.title}</h2>
        <div className="space-y-6">
          {educationItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-500 ease-out hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)] transform-gpu will-change-transform"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                <h3 className="text-xl font-bold text-white tracking-wider">{item.degree}</h3>
                <span className="text-emerald-400 font-mono text-sm whitespace-nowrap">{item.period}</span>
              </div>
              {item.institution && <p className="text-emerald-500 font-medium">{item.institution}</p>}
              {item.description && (
                <p className="text-neutral-300 mt-4">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
