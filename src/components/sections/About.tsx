'use client';

import React from 'react';
import { SectionTitle } from "@/components/sections/SectionTitle";

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

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-neutral-300 text-lg">
              I am a computer science student passionate about books, cinema, and videogames. My true passion is anything that combines creativity and technology at all its levels.
            </p>
            <p className="text-neutral-300 text-lg">
              I enjoy assembling fully customised PCs and mechanical keyboards since there is something deeply satisfying about seeing separate components becoming something functional and unique, with its own character.
            </p>
            <p className="text-neutral-300 text-lg">
              I am curious by nature and I like to understand how various things work, not just superficially. Whether it&apos;s taking apart a device, reading technical documentation, or programming a website, I always try to seek the balance between practicality and aesthetics.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-white/10 bg-neutral-900/50">
              <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-emerald-400 font-bold mb-2">Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.webDev.map((skill) => (
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
                <div className="mt-4">
                  <h4 className="text-emerald-400 font-bold mb-2">Programming</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill) => (
                      <a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 text-sm font-medium text-emerald-300 bg-emerald-500/10 rounded-full hover:bg-emergent-500/20 transition-colors"
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
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-neutral-900/50">
              <h3 className="text-2xl font-bold text-white mb-4">Languages</h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center">
                    <span className="font-bold text-emerald-400">{lang.name}</span>
                    <span className="text-emerald-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
