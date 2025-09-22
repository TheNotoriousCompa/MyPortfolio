import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-['Space_Mono']">
      <span className="text-emerald-400">#</span> {children}
    </h2>
  );
}
