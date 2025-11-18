import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiShadcnui, SiPython, SiElectron, SiFirebase, SiNetlify } from 'react-icons/si';

interface LogoItem {
  icon: React.ReactNode;
  name: string;
}

interface LogoRowProps {
  logos: LogoItem[];
  className?: string;
}

function LogoRow({ logos, className = '' }: LogoRowProps) {
  return (
    <div className={`flex items-center gap-8 flex-wrap justify-center ${className}`}>
      {logos.map((logo, index) => (
        <div key={index} className="flex flex-col items-center p-4 hover:bg-white/5 rounded-lg transition-colors">
          <div className="text-4xl text-white">{logo.icon}</div>
          <span className="mt-2 text-sm font-medium text-white/80">{logo.name}</span>
        </div>
      ))}
    </div>
  );
}

// Example usage with some default logos
const defaultLogos: LogoItem[] = [
  { icon: <SiReact size={32} />, name: 'React' },
  { icon: <SiNextdotjs size={32} />, name: 'Next.js' },
  { icon: <SiTypescript size={32} />, name: 'TypeScript' },
  { icon: <SiTailwindcss size={32} />, name: 'Tailwind CSS' },
  { icon: <SiShadcnui size={32} />, name: 'Shadcn' },
  { icon: <SiPython size={32} />, name: 'Python' },
  { icon: <SiElectron size={32} />, name: 'Electron' },
  { icon: <SiFirebase size={32} />, name: 'Firebase' },
  { icon: <SiNetlify size={32} />, name: 'Netlify' },
];

function LogoDisplay() {
  return (
    <div className="py-8 w-full">
      <LogoRow logos={defaultLogos} className="gap-8 md:gap-12" />
    </div>
  );
}
export default LogoDisplay;