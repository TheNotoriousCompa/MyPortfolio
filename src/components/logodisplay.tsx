'use client';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiPython,
  SiElectron,
  SiFirebase,
  SiNetlify,
  SiBlender,
} from 'react-icons/si';
import Link from 'next/link';

interface LogoItem {
  icon: React.ReactNode;
  name: string;
  url: string;
}

const defaultLogos: LogoItem[] = [
  { icon: <SiReact size={32} />, name: 'React', url: 'https://react.dev/' },
  { icon: <SiNextdotjs size={32} />, name: 'Next.js', url: 'https://nextjs.org/' },
  { icon: <SiTypescript size={32} />, name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
  { icon: <SiTailwindcss size={32} />, name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { icon: <SiShadcnui size={32} />, name: 'Shadcn', url: 'https://ui.shadcn.com/' },
  { icon: <SiPython size={32} />, name: 'Python', url: 'https://www.python.org/' },
  { icon: <SiElectron size={32} />, name: 'Electron', url: 'https://www.electronjs.org/' },
  { icon: <SiFirebase size={32} />, name: 'Firebase', url: 'https://firebase.google.com/' },
  { icon: <SiNetlify size={32} />, name: 'Netlify', url: 'https://www.netlify.com/' },
  { icon: <SiBlender size={32} />, name: 'Blender', url: 'https://www.blender.org/' },
];

// Duplicate the logos array to create a seamless infinite loop.
// The inner track is twice as wide; we animate it by -50% so the
// second copy lines up perfectly with where the first started.
const scrollingLogos = [...defaultLogos, ...defaultLogos];

function LogoDisplay() {
  return (
    <div
      className="py-8 w-full overflow-hidden"
      style={{
        // Fade-in / fade-out mask on both edges
        maskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      {/* Scrolling track — hover pauses the animation */}
      <div
        className="flex items-center gap-6 md:gap-10 w-max will-change-transform"
        style={{
          animation: 'scroll-x 30s linear infinite',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running';
        }}
      >
        {scrollingLogos.map((logo, index) => (
          <Link
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-xl border border-transparent hover:border-emerald-500/40 hover:bg-white/5 transition-[border-color,background-color,transform] duration-300 ease-out hover:-translate-y-0.5 group"
          >
            <div className="text-white group-hover:scale-110 transition-transform duration-300 ease-out">
              {logo.icon}
            </div>
            <span className="mt-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
              {logo.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LogoDisplay;
