'use client';

import React from 'react';
import { SectionTitle } from "@/components/sections/SectionTitle";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const skills = {
  webDev: [
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', url: 'https://react.dev/' },
    { name: 'Next.js', url: 'https://nextjs.org/' },
    { name: 'TailwindCSS', url: 'https://tailwindcss.com/' },
    { name: 'Shadcn', url: 'https://ui.shadcn.com/' },
    { name: 'API', url: 'https://developer.mozilla.org/en-US/docs/Web/API' },
    { name: 'Firebase', url: 'https://firebase.google.com/' }
  ],
  programming: [
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

export function About({ dict }: { dict: any /* eslint-disable-line @typescript-eslint/no-explicit-any */ }) {
  return (
    <section id="about" className="pt-4 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>{dict.title}</SectionTitle>
        <div className="flex flex-col gap-8">
          <div className="space-y-6 text-lg text-neutral-300">
            <p>
              {dict.greeting}
            </p>
            <p>
              {dict.p2}
            </p>
            <p>
              {dict.p3}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CardSpotlight className="p-6 rounded-xl border border-white/5 bg-neutral-900/50 h-full">
              <h3 className="text-2xl font-bold text-white mb-4 relative z-20">{dict.technicalSkills}</h3>

              <div className="relative z-20 space-y-4">
                <div>
                  <h4 className="text-emerald-400 font-bold mb-2">Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.webDev.map((skill) => (
                      <a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm text-emerald-300 bg-emerald-500/10 rounded-full hover:bg-emerald-500/20 transition-colors relative z-20"
                      >
                        {skill.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-emerald-400 font-bold mb-2">Programming</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill) => (
                      <a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm font-medium text-emerald-300 bg-emerald-500/10 rounded-full hover:bg-emerald-500/20 transition-colors"
                      >
                        {skill.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-emerald-400 font-bold mb-2">Design & 3D</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.design.map((skill) => (
                      <a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm text-emerald-300 bg-emerald-500/10 rounded-full hover:bg-emerald-500/20 transition-colors"
                      >
                        {skill.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </CardSpotlight>

            <CardSpotlight className="p-6 rounded-xl border border-white/5 bg-neutral-900/50">
              <h3 className="text-2xl font-bold text-white mb-4 relative z-20">{dict.languages}</h3>
              <div className="relative z-20 space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center">
                    <span className="font-bold text-emerald-400 text-lg">{lang.name}</span>
                    <span className="text-emerald-300 font-medium">
                      {lang.level === 'Native' ? dict.native :
                        lang.level === 'C1 Level Certified' ? dict.certified : lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
