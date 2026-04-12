"use client";

import React, { useLayoutEffect, useRef, useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';


export type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo?: React.ReactNode;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  locale?: string;
  onLocaleChange?: (target: "en" | "it") => string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  locale,
  onLocaleChange
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 300;

    const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = 'visible';
      contentEl.style.pointerEvents = 'auto';
      contentEl.style.position = 'static';
      contentEl.style.height = 'auto';

      // Re-read offsetHeight to force layout
      void contentEl.offsetHeight;

      const topBar = 60;
      const padding = 32; // More breathing room at the bottom
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + padding;
    }
    
    return 340; // Increased base height
  }, []);

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.4, 
      ease, 
      stagger: 0.08 
    }, '-=0.1');

    return tl;
  }, [calculateHeight, ease]);

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline, items]);

  useEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded, items, calculateHeight, createTimeline]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => {
        setIsExpanded(false);
        gsap.set(navRef.current, { height: 60 });
      });
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={cn(
        "card-nav-container fixed left-1/2 -translate-x-1/2 w-[95%] max-w-[1000px] z-[99] top-[1.2em] md:top-[2em]",
        className
      )}
    >
      <nav
        ref={navRef}
        className={cn(
          "card-nav block h-[60px] p-0 rounded-2xl shadow-2xl relative overflow-hidden will-change-[height] border border-white/5",
          isExpanded ? 'open' : ''
        )}
        style={{ 
          backgroundColor: isExpanded ? '#000' : baseColor, 
          backdropFilter: isExpanded ? 'none' : 'blur(20px)' 
        }}


      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[10] bg-inherit">
          <div
            className={cn(
               "hamburger-menu group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none",
               isHamburgerOpen ? 'open' : ''
            )}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#fff' }}
          >
            <div
              className={cn(
                "hamburger-line w-[24px] h-[2px] bg-current transition-all duration-300 ease-out",
                isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
              )}
            />
            <div
              className={cn(
                "hamburger-line w-[24px] h-[2px] bg-current transition-all duration-300 ease-out",
                isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
              )}
            />
          </div>

          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            {typeof logo === 'string' ? (
               <Image 
                 src={logo} 
                 alt={logoAlt} 
                 width={112} 
                 height={28} 
                 className="logo h-[28px] w-auto object-contain" 
                 priority
               />
            ) : (

               logo
            )}
          </div>

          <div className="hidden md:flex items-center gap-1 order-3 pr-2 border-l border-white/10 ml-2 pl-2">
            <Link
               href={onLocaleChange?.("en") || "#"}
               className={cn(
                  "px-2 py-1 text-xs font-bold rounded-md transition-all",
                  locale === 'en' ? "text-emerald-400 bg-emerald-500/10" : "text-neutral-500 hover:text-white"
               )}
            >
               EN
            </Link>
            <Link
               href={onLocaleChange?.("it") || "#"}
               className={cn(
                  "px-2 py-1 text-xs font-bold rounded-md transition-all",
                  locale === 'it' ? "text-emerald-400 bg-emerald-500/10" : "text-neutral-500 hover:text-white"
               )}
            >
               IT
            </Link>
          </div>
        </div>

        <div
          className={cn(
            "card-nav-content absolute left-0 right-0 top-[60px] p-2 md:p-4 flex flex-col items-stretch gap-2 md:gap-4 justify-start z-[1]",
            isExpanded ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none',
            "md:flex-row md:items-stretch md:h-[calc(100%-80px)] overflow-y-auto md:overflow-visible"
          )}
          aria-hidden={!isExpanded}
        >
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-5 p-6 rounded-xl min-w-0 flex-1 shadow-inner border border-emerald-500/20"


              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-bold tracking-tight text-[18px] md:text-[22px] border-b border-emerald-500/30 pb-3 flex-shrink-0">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-2.5 flex-grow">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer transition-all duration-300 hover:translate-x-2 hover:text-emerald-400 text-[14px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={() => {
                        if (isExpanded) toggleMenu();
                    }}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0 w-4 h-4" aria-hidden="true" />
                    <span className="truncate">{lnk.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
