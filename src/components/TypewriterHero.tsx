"use client";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

type WordType = {
  text: string;
  className?: string;
};

interface TypewriterHeroProps {
  className?: string;
}

export function TypewriterHero({ className = "" }: TypewriterHeroProps) {
  const [currentSet, setCurrentSet] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const words = [
    {
      text: "MC",
      className: "text-white text-sm md:text-base font-medium",
    },
  ];

  const words2 = [
    {
      text: "Code",
      className: "text-white text-sm md:text-base font-medium",
    },
  ];

  const words3 = [
    {
      text: "Get Ready",
      className: "text-white text-sm md:text-base font-medium",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSet((prev: number) => (prev + 1) % 3);
      setAnimationKey((prev: number) => prev + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSet]);

  const getCurrentWords = (): WordType[] => {
    switch (currentSet) {
      case 0:
        return words;
      case 1:
        return words2;
      case 2:
        return words3;
      default:
        return words;
    }
  };

  return (
    <div className={`inline-flex items-center h-full ${className}`}>
      <span className="text-emerald-400 text-sm md:text-base font-mono leading-none">
        {'<'}
      </span>
      <div className="relative -top-[1px]">
        <TypewriterEffectSmooth 
          key={animationKey}
          words={getCurrentWords()} 
          className="text-sm md:text-base font-medium mx-0.5 leading-none"
          cursorClassName="h-4"
        />
      </div>
      <span className="text-emerald-400 text-sm md:text-base font-mono leading-none">
        {'/>'}
      </span>
    </div>
  );
}
