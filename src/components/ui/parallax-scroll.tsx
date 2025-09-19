"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ParallaxScrollProps {
  images: string[];
  className?: string;
  onImageClick?: (imageUrl: string) => void;
}

export const ParallaxScroll = ({
  images,
  className,
  onImageClick,
}: ParallaxScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={cn("w-full min-h-screen py-20 flex items-center justify-center overflow-hidden", className)}
        ref={containerRef}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4">
          <div className="grid gap-10">
            {firstPart.map((el, idx) => (
              <motion.div
                style={{ y: translateFirst }}
                key={"grid-1-" + idx}
                className="relative h-80 w-full cursor-pointer"
                onClick={() => onImageClick?.(el)}
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden hover:opacity-90 transition-opacity flex items-center justify-center">
                  <Image
                    src={el}
                    fill
                    className="object-cover object-center rounded-lg"
                    alt={`Gallery image ${idx + 1}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 3}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {secondPart.map((el, idx) => (
              <motion.div 
                style={{ y: translateSecond }} 
                key={"grid-2-" + idx}
                className="relative h-80 w-full cursor-pointer"
                onClick={() => onImageClick?.(el)}
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden hover:opacity-90 transition-opacity flex items-center justify-center">
                  <Image
                    src={el}
                    fill
                    className="object-cover object-center rounded-lg"
                    alt={`Gallery image ${firstPart.length + idx + 1}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={firstPart.length + idx < 3}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {thirdPart.map((el, idx) => (
              <motion.div 
                style={{ y: translateThird }} 
                key={"grid-3-" + idx}
                className="relative h-80 w-full cursor-pointer"
                onClick={() => onImageClick?.(el)}
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden hover:opacity-90 transition-opacity flex items-center justify-center">
                  <Image
                    src={el}
                    fill
                    className="object-cover object-center rounded-lg"
                    alt={`Gallery image ${firstPart.length + secondPart.length + idx + 1}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={firstPart.length + secondPart.length + idx < 3}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
