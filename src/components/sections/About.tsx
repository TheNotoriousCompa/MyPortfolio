'use client';

import React from 'react';
import { SectionTitle } from "./SectionTitle";

const skills = {
  webDev: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'Shadcn'],
  programming: ['Python', 'Java'],
  design: ['Blender', 'GIMP', 'Photoshop', 'Canva']
};

const languages = [
  { name: 'Italian', level: 'Native' },
  { name: 'English', level: 'C1 Level' }
];

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative z-10 bg-white/5 backdrop-blur-[2px]">
      <div className="max-w-6xl mx-auto w-full">
        <div>
          <SectionTitle>About Me</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-neutral-300 mb-6 text-lg">
                I am a computer science student passionate about books, cinema, and videogames. My true passion is anything that combines creativity and technology at all its levels.
              </p>
              <p className="text-neutral-300 mb-6 text-lg">
                I enjoy assembling fully customised PCs and mechanical keyboards since there is something deeply satisfying about seeing separate components becoming something functional and unique, with its own character.
              </p>
              <p className="text-neutral-300 text-lg">
                I am curious by nature and I like to understand how various things work, not just superficially. Whether it&apos;s taking apart a device, reading technical documentation, or programming a website, I always try to seek the balance between practicality and aesthetics.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-neutral-800/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Mono']">Technical Skills</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-emerald-400 mb-2">Web Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.webDev.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 mb-2">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 mb-2">Design & 3D</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.design.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-800/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Mono']">Languages</h3>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-neutral-300">{lang.name}</span>
                        <span className="text-sm text-neutral-400">{lang.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
