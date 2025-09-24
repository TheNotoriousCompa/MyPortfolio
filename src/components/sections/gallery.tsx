'use client';

import Image from 'next/image';
import { useEffect, useRef, useMemo } from 'react';

// Keep the shuffle function for randomizing image order
function shuffleArray<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface ScrollingRowProps {
  reverse?: boolean;
  images: string[];
  speed?: number; // px / second
  pauseOnHover?: boolean;
  initialOffset?: number; // optional starting offset in px
}

export function ScrollingRow({
  reverse = false,
  images,
  speed = 60,
  pauseOnHover = true,
  initialOffset = 0,
}: ScrollingRowProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0); // current offset in px (0 .. singleWidth)
  const singleWidthRef = useRef(0); // width of one set
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  // Create a shuffled and duplicated list of images for seamless scrolling
  const loopList = useMemo(() => {
    // Use the provided images prop and shuffle them
    const shuffled = shuffleArray([...images]);
    // Duplicate the array to create seamless loop
    return [...shuffled, ...shuffled];
  }, [images]);

  // initialize offset (can be used to desync rows)
  useEffect(() => {
    offsetRef.current = initialOffset;
  }, [initialOffset]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const total = el.scrollWidth; // width of duplicated content
      if (total > 0) {
        singleWidthRef.current = total / 2;
        // normalize offset into the [0, singleWidth) range once we have width
        const s = singleWidthRef.current;
        if (s > 0) {
          offsetRef.current = ((offsetRef.current % s) + s) % s;
        }
      }
    };

    // measure initially and on layout changes (images loading, resize)
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);

    // animation loop (dt-based)
    const step = (now: number) => {
      if (!lastRef.current) lastRef.current = now;
      const dt = now - lastRef.current;
      lastRef.current = now;

      const s = singleWidthRef.current;
      if (s > 0 && !pausedRef.current) {
        const delta = (speed * dt) / 1000; // px to move this frame
        if (!reverse) {
          // move left => offset increases
          offsetRef.current = (offsetRef.current + delta) % s;
        } else {
          // move right => offset decreases
          offsetRef.current = (offsetRef.current - delta) % s;
          if (offsetRef.current < 0) offsetRef.current += s;
        }
        // set transform using negative offset so content scrolls correctly
        el.style.transform = `translateX(${-offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      lastRef.current = null;
    };
  }, [reverse, speed]);

  // hover pause handlers
  const onEnter = () => {
    if (pauseOnHover) pausedRef.current = true;
  };
  const onLeave = () => {
    if (pauseOnHover) pausedRef.current = false;
  };

  return (
    <div
      className="overflow-hidden w-full mb-6 px-4"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        ref={containerRef}
        className="flex gap-6"
        style={{
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {loopList.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            style={{
              minWidth: '300px',
              height: '200px',
              flexShrink: 0,
            }}
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={i < 6}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Gallery component that renders multiple ScrollingRows
function Gallery() {
  // Generate image paths
  const imagePaths = useMemo(() => {
    return Array.from({ length: 41 }, (_, i) => `/gallery/image${i + 1}.jpg`);
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <ScrollingRow 
        images={imagePaths} 
        speed={40} 
        initialOffset={0}
      />
      <ScrollingRow 
        images={imagePaths} 
        speed={60} 
        reverse 
        initialOffset={100}
      />
      <ScrollingRow 
        images={imagePaths} 
        speed={50} 
        initialOffset={50}
      />
    </div>
  );
}

export { Gallery };
export default Gallery;
