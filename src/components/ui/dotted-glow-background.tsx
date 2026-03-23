"use client";

import React from "react";
import { cn } from "@/lib/utils";

type DottedGlowBackgroundProps = {
  className?: string;
  gap?: number;
  radius?: number;
  color?: string;
  darkColor?: string;
  glowColor?: string;
  darkGlowColor?: string;
  colorLightVar?: string;
  colorDarkVar?: string;
  glowColorLightVar?: string;
  glowColorDarkVar?: string;
  opacity?: number;
  backgroundOpacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
};

export const DottedGlowBackground = ({
  className,
  gap = 32,
  radius = 2,
  color = "#10f0a0",
  opacity = 0.3,
}: DottedGlowBackgroundProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        className
      )}
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle at center, ${color} ${radius}px, transparent ${radius}px)`,
        backgroundSize: `${gap}px ${gap}px`,
        maskImage: 'radial-gradient(ellipse at center, white 0%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, white 0%, transparent 80%)',
      }}
    />
  );
};
