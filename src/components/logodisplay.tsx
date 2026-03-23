'use client';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiShadcnui, SiPython, SiElectron, SiFirebase, SiNetlify, SiBlender } from 'react-icons/si';
import Link from 'next/link';
interface LogoItem {
  icon: React.ReactNode;
  name: string;
  url: string;
}

interface LogoRowProps {
  logos: LogoItem[];
  className?: string;
}

function LogoRow({ logos, className = '' }: LogoRowProps) {
  return (
    <div className={`flex items-center gap-8 flex-wrap justify-center ${className}`}>
      {logos.map((logo, index) => (
        <Link
          key={index}
          href={logo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 hover:bg-white/5 rounded-lg transition-colors group"
        >
          <div className="text-4xl text-white group-hover:scale-110 transition-transform">{logo.icon}</div>
          <span className="mt-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">{logo.name}</span>
        </Link>
      ))}
    </div>
  );
}

// Example usage with some default logos
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

function LogoDisplay() {
  return (
    <div className="py-8 w-full">
      <LogoRow logos={defaultLogos} className="gap-8 md:gap-12" />
    </div>
  );
}
export default LogoDisplay;