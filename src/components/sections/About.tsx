'use client';

import React from 'react';

import { CardSpotlight } from "@/components/ui/card-spotlight";

const skills = {
  frontend: [
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', url: 'https://react.dev/' },
    { name: 'Next.js', url: 'https://nextjs.org/' },
    { name: 'TailwindCSS', url: 'https://tailwindcss.com/' },
    { name: 'Shadcn/UI', url: 'https://ui.shadcn.com/' },
  ],
  backendApi: [
    { name: '.NET', url: 'https://dotnet.microsoft.com/' },
    { name: 'API', url: 'https://developer.mozilla.org/en-US/docs/Web/API' },
    { name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL' },
    { name: 'Firebase', url: 'https://firebase.google.com/' }
  ],
  programming: [
    { name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
    { name: 'Python', url: 'https://www.python.org/' },
    { name: 'Java', url: 'https://www.java.com/' }
  ],
  design: [
    { name: 'Blender', url: 'https://www.blender.org/' },
    { name: 'GIMP', url: 'https://www.gimp.org/' },
    { name: 'Photoshop', url: 'https://www.adobe.com/products/photoshop.html' },
    { name: 'Canva', url: 'https://www.canva.com/' }
  ]
};

const languages = [
  { name: 'Italian', level: 'Native' },
  { name: 'English', level: 'C1 Level Certified' }
];

export function About({ dict, locale }: { 
  dict: any; /* eslint-disable-line @typescript-eslint/no-explicit-any */
  locale: string;
}) {
  const badgeClassName =
    "px-3 py-1.5 text-sm font-medium text-neutral-400 bg-white/[0.03] border border-white/5 rounded-md backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]";

  return (
    <section id="about" className="pt-4 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12"><span className="text-emerald-400">#</span> {dict.title}</h2>
        <div className="flex flex-col gap-8">
          <div className="space-y-5 text-base md:text-lg text-neutral-300 leading-relaxed max-w-5xl">
            <p className="text-neutral-200">
              {dict.greeting}
            </p>
            <p>
              {dict.p2}
            </p>
            <p>
              {dict.p3}
            </p>
          </div>

          <CardSpotlight className="p-6 md:p-8 rounded-xl border border-white/5 bg-black/40 w-full overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-10 relative z-20">
              {/* Technical Skills - 2/3 width on desktop */}
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-emerald-500/50 hidden md:block"></span>
                  {dict.technicalSkills}
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-emerald-400 font-bold mb-3 text-sm uppercase tracking-wider">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill) => (
                        <a
                          key={skill.name}
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={badgeClassName}
                        >
                          {skill.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-emerald-400 font-bold mb-3 text-sm uppercase tracking-wider">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((skill) => (
                        <a
                          key={skill.name}
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={badgeClassName}
                        >
                          {skill.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-emerald-400 font-bold mb-3 text-sm uppercase tracking-wider">Backend & APIs</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.backendApi.map((skill) => (
                        <a
                          key={skill.name}
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={badgeClassName}
                        >
                          {skill.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-emerald-400 font-bold mb-3 text-sm uppercase tracking-wider">Design & 3D</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.design.map((skill) => (
                        <a
                          key={skill.name}
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={badgeClassName}
                        >
                          {skill.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages - 1/3 width on desktop */}
              <div className="lg:border-l lg:border-white/10 lg:pl-10 space-y-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {dict.languages}
                </h3>
                <div className="space-y-6">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex flex-col gap-1">
                      <span className="font-bold text-emerald-400 text-lg uppercase tracking-tight">{lang.name}</span>
                      <span className="text-neutral-400 font-medium text-sm">
                        {lang.level === 'Native' ? dict.native :
                          lang.level === 'C1 Level Certified' ? dict.certified : lang.level}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 hidden lg:block">
                  <div className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                    <p className="text-xs text-neutral-400 italic">
                      {locale === 'it' 
                        ? "Sempre pronto ad imparare nuove tecnologie e linguaggi per risolvere problemi complessi."
                        : "Always ready to learn new technologies and languages to solve complex problems."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
}
