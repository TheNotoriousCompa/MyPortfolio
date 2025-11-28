'use client';

import Image from 'next/image';
import { useEffect, useRef, useMemo, useState } from 'react';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { motion } from 'framer-motion';

// Image metadata interface
interface ImageData {
  src: string;
  title: string;
  description: string;
  alt: string;
}



interface ScrollingRowProps {
  reverse?: boolean;
  images: ImageData[];
  speed?: number;
  pauseOnHover?: boolean;
  initialOffset?: number;
  onImageClick: (index: number) => void;
  isVisible?: boolean;
}

function ScrollingRow({
  reverse = false,
  images,
  speed = 60,
  pauseOnHover = true,
  initialOffset = 0,
  onImageClick,
  isVisible = true,
}: ScrollingRowProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const singleWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  // Create duplicated list without shuffling to maintain order
  const loopList = useMemo(() => {
    return [...images, ...images];
  }, [images]);

  useEffect(() => {
    offsetRef.current = initialOffset;
  }, [initialOffset]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const total = el.scrollWidth;
      if (total > 0) {
        singleWidthRef.current = total / 2;
        const s = singleWidthRef.current;
        if (s > 0) {
          offsetRef.current = ((offsetRef.current % s) + s) % s;
        }
      }
    };

    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);

    const step = (now: number) => {
      if (!lastRef.current) lastRef.current = now;
      const dt = now - lastRef.current;
      lastRef.current = now;

      const s = singleWidthRef.current;
      if (s > 0 && !pausedRef.current) {
        const delta = (speed * dt) / 1000;
        if (!reverse) {
          offsetRef.current = (offsetRef.current + delta) % s;
        } else {
          offsetRef.current = (offsetRef.current - delta) % s;
          if (offsetRef.current < 0) offsetRef.current += s;
        }
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

  const onEnter = () => {
    if (pauseOnHover) pausedRef.current = true;
  };
  const onLeave = () => {
    if (pauseOnHover) pausedRef.current = false;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="overflow-hidden w-full mb-6 px-4 py-4"
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
        {loopList.map((image, i) => (
          <motion.div
            key={i}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            style={{
              minWidth: '300px',
              height: '200px',
              flexShrink: 0,
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              const originalIndex = images.findIndex(img => img.src === image.src);
              onImageClick(originalIndex);
            }}
            role="button"
            tabIndex={0}
            aria-label={`View ${image.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const originalIndex = images.findIndex(img => img.src === image.src);
                onImageClick(originalIndex);
              }
            }}
          >
            {/* Image */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-110"
              sizes="300px"
              loading="lazy"
            />

            {/* Emerald glow border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500 transition-all duration-300 rounded-lg shadow-lg group-hover:shadow-emerald-500/50" />

            {/* Overlay with info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
              <p className="text-neutral-300 text-sm line-clamp-2">{image.description}</p>
            </div>

            {/* Click indicator */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Main Gallery component
function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Custom keyboard names and descriptions
  const allImages: ImageData[] = useMemo(() => {
    return [

      {
        src: '/gallery/image2.jpg',
        title: 'Tofuwood White',
        description: '3D render of a Tofu60 with wooden keycaps on pristine white background',
        alt: '3D rendered Tofuwood White mechanical keyboard',
      },
      {
        src: '/gallery/image3.jpg',
        title: 'GMMK Pro Roman',
        description: '3D render of a GMMK Pro featuring elegant Roman-style keycaps',
        alt: '3D rendered GMMK Pro with Roman keycaps',
      },
      {
        src: '/gallery/image4.jpg',
        title: 'GMMK Monochrome',
        description: '3D render of a GMMK with classic black and white color scheme',
        alt: '3D rendered GMMK Monochrome keyboard',
      },
      {
        src: '/gallery/image5.jpg',
        title: 'GMMK Pro Rainbow',
        description: '3D render of a GMMK Pro with vibrant rainbow RGB lighting',
        alt: '3D rendered GMMK Pro Rainbow keyboard',
      },
      {
        src: '/gallery/image6.jpg',
        title: 'GMMK 60% Lilac',
        description: '3D render of a compact GMMK 60% in elegant white and lilac purple',
        alt: '3D rendered GMMK 60% Lilac keyboard',
      },
      {
        src: '/gallery/image7.jpg',
        title: 'GMMK Pro Galaxy',
        description: '3D render of a GMMK Pro with stunning galaxy-inspired color scheme',
        alt: '3D rendered GMMK Pro Galaxy keyboard',
      },
      {
        src: '/gallery/image8.jpg',
        title: 'GMMK Pro Lime',
        description: '3D render of a GMMK Pro with fresh white and lime green accents',
        alt: '3D rendered GMMK Pro Lime keyboard',
      },
      {
        src: '/gallery/image9.jpg',
        title: 'BM60 Blue Ocean',
        description: '3D render of a BM60 with deep blue ocean-inspired colorway',
        alt: '3D rendered BM60 Blue Ocean keyboard',
      },
      {
        src: '/gallery/image10.jpg',
        title: 'Tofu Blue Ocean',
        description: '3D render of a Tofu60 with serene blue ocean aesthetic',
        alt: '3D rendered Tofu Blue Ocean keyboard',
      },
      {
        src: '/gallery/image11.jpg',
        title: 'GMMK Sky',
        description: '3D render of a GMMK with beautiful sky-inspired gradient colors',
        alt: '3D rendered GMMK Sky keyboard',
      },
      {
        src: '/gallery/image12.jpg',
        title: 'GMMK Strawberry',
        description: '3D render of a GMMK with sweet strawberry pink colorway',
        alt: '3D rendered GMMK Strawberry keyboard',
      },
      {
        src: '/gallery/image13.jpg',
        title: 'Tofu60 RGB Lilac',
        description: '3D render of a Tofu60 RGB with elegant lilac purple theme',
        alt: '3D rendered Tofu60 RGB Lilac keyboard',
      },
      {
        src: '/gallery/image14.jpg',
        title: 'Tofu Korean',
        description: '3D render of a Tofu60 featuring Korean hangul keycaps',
        alt: '3D rendered Tofu Korean keyboard',
      },
      {
        src: '/gallery/image15.jpg',
        title: 'Tofu Pharaoh Black',
        description: '3D render of a Tofu60 with mysterious black pharaoh theme',
        alt: '3D rendered Tofu Pharaoh Black keyboard',
      },
      {
        src: '/gallery/image16.jpg',
        title: 'GMMK Pro Rainbow Top',
        description: '3D render of a GMMK Pro rainbow edition from top-down view',
        alt: '3D rendered GMMK Pro Rainbow top view',
      },
      {
        src: '/gallery/image17.jpg',
        title: 'GMMK Pro Rainbow Exposed',
        description: '3D render of a GMMK Pro rainbow with visible keycap stems',
        alt: '3D rendered GMMK Pro Rainbow with exposed keycaps',
      },
      {
        src: '/gallery/image18.jpg',
        title: 'GMMK Pro Roman Exposed',
        description: '3D render of a GMMK Pro with exposed Roman keycaps',
        alt: '3D rendered GMMK Pro Roman with exposed keycaps',
      },
      {
        src: '/gallery/image19.jpg',
        title: 'Glass Tofu RGB',
        description: '3D render of a Tofu60 RGB with transparent glass-like case',
        alt: '3D rendered Glass Tofu RGB keyboard',
      },
      {
        src: '/gallery/image20.jpg',
        title: 'Split Japanese',
        description: '3D render of a split ergonomic keyboard with Japanese keycaps',
        alt: '3D rendered split keyboard with Japanese keycaps',
      },
      {
        src: '/gallery/image21.jpg',
        title: 'GMMK Pro Roman Exposed Alt',
        description: '3D render of a GMMK Pro with exposed Roman keycaps, alternative view',
        alt: '3D rendered GMMK Pro Roman exposed alternative',
      },
      {
        src: '/gallery/image22.jpg',
        title: 'Blood Tofu60 Black',
        description: '3D render of a Tofu60 with dark blood-red theme on black case',
        alt: '3D rendered Blood Tofu60 Black keyboard',
      },
      {
        src: '/gallery/image23.jpg',
        title: 'Blood Tofu60 White',
        description: '3D render of a Tofu60 with blood-red theme on white case',
        alt: '3D rendered Blood Tofu60 White keyboard',
      },
      {
        src: '/gallery/image24.jpg',
        title: 'Tofu Sakura',
        description: '3D render of a Tofu60 with soft white, gray, and light pink sakura theme',
        alt: '3D rendered Tofu Sakura keyboard',
      },
      {
        src: '/gallery/image25.jpg',
        title: 'Tofu Panda',
        description: '3D render of a Tofu60 with white, gray, and black panda colorway',
        alt: '3D rendered Tofu Panda keyboard',
      },
      {
        src: '/gallery/image26.jpg',
        title: 'Tofu Sakura Alt',
        description: '3D render of a Tofu60 with white, gray, and light pink sakura theme, alternative view',
        alt: '3D rendered Tofu Sakura alternative keyboard',
      },
      {
        src: '/gallery/image27.jpg',
        title: 'Tofu Arboreal',
        description: '3D render of a Tofu60 with nature-inspired very light green forest theme',
        alt: '3D rendered Tofu Arboreal keyboard',
      },
      {
        src: '/gallery/image28.jpg',
        title: 'Tofu Chocolate60',
        description: '3D render of a Tofu60 with rich chocolate brown colorway',
        alt: '3D rendered Tofu Chocolate60 keyboard',
      },
      {
        src: '/gallery/image29.jpg',
        title: 'Tofu60 Galaxy Light',
        description: '3D render of a Tofu60 with light galaxy-inspired theme',
        alt: '3D rendered Tofu60 Galaxy Light keyboard',
      },
      {
        src: '/gallery/image30.jpg',
        title: 'Tofu Mint60',
        description: '3D render of a Tofu60 with refreshing mint green colorway',
        alt: '3D rendered Tofu Mint60 keyboard',
      },
      {
        src: '/gallery/image31.jpg',
        title: 'Tofu Purple RGB',
        description: '3D render of a Tofu60 RGB with vibrant purple theme',
        alt: '3D rendered Tofu Purple RGB keyboard',
      },
      {
        src: '/gallery/image32.jpg',
        title: 'Tofu Purple',
        description: '3D render of a Tofu60 with elegant purple theme, non-RGB',
        alt: '3D rendered Tofu Purple keyboard',
      },
      {
        src: '/gallery/image33.jpg',
        title: 'Tofu Purple White Case',
        description: '3D render of a Tofu60 with purple keycaps on white case',
        alt: '3D rendered Tofu Purple White Case keyboard',
      },
      {
        src: '/gallery/image34.jpg',
        title: 'Tofu Pharaoh Glass',
        description: '3D render of a Tofu60 pharaoh theme with transparent glass case',
        alt: '3D rendered Tofu Pharaoh Glass keyboard',
      },
      {
        src: '/gallery/image35.jpg',
        title: 'Tofu Remax Sponsor',
        description: '3D render of a Tofu60 with Remax sponsor branding',
        alt: '3D rendered Tofu Remax Sponsor keyboard',
      },
      {
        src: '/gallery/image36.jpg',
        title: 'Arial Tofu60',
        description: '3D render of a Tofu60 with clean Arial font keycaps',
        alt: '3D rendered Arial Tofu60 keyboard',
      },
      {
        src: '/gallery/image37.jpg',
        title: 'Arial Tofu60 RGB',
        description: '3D render of a Tofu60 RGB with Arial font keycaps',
        alt: '3D rendered Arial Tofu60 RGB keyboard',
      },
      {
        src: '/gallery/image38.jpg',
        title: 'Tofu Arboreal RGB',
        description: '3D render of a Tofu60 RGB with forest green arboreal theme',
        alt: '3D rendered Tofu Arboreal RGB keyboard',
      },
      {
        src: '/gallery/image39.jpg',
        title: 'Tofu Pine',
        description: '3D render of a Tofu60 with pine green and black colorway',
        alt: '3D rendered Tofu Pine keyboard',
      },
      {
        src: '/gallery/image40.jpg',
        title: 'Keyboard 40',
        description: '3D render of a custom mechanical keyboard with unique design',
        alt: '3D rendered mechanical keyboard 40',
      },
      {
        src: '/gallery/image41.jpg',
        title: 'GMMK Pro Rainbow Black',
        description: '3D render of a GMMK Pro rainbow edition with black case',
        alt: '3D rendered GMMK Pro Rainbow Black keyboard',
      },
    ];
  }, []);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div ref={sectionRef} className="space-y-8 py-12">
      <SectionTitle>3D Keyboard Gallery</SectionTitle>

      {/* Scrolling rows with parallax effect */}
      <ScrollingRow
        images={allImages}
        speed={40}
        initialOffset={0}
        onImageClick={handleImageClick}
        isVisible={isVisible}
      />
      <ScrollingRow
        images={allImages}
        speed={60}
        reverse
        initialOffset={100}
        onImageClick={handleImageClick}
        isVisible={isVisible}
      />
      <ScrollingRow
        images={allImages}
        speed={50}
        initialOffset={50}
        onImageClick={handleImageClick}
        isVisible={isVisible}
      />

      {/* Lightbox */}
      <ImageLightbox
        images={allImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

export { Gallery };
export default Gallery;
