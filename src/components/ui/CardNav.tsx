"use client";

import React, { useLayoutEffect, useRef, useState, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
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
  menuLabel?: string;
  closeLabel?: string;
  onLocaleChange?: (target: "en" | "it") => string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#08090a',
  menuColor,
  locale,
  menuLabel = 'Menu',
  closeLabel = 'Close',
  onLocaleChange
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
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

      void contentEl.offsetHeight;

      const topBar = 60;
      const padding = 32;
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + padding;
    }

    return 340;
  }, []);

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: reduceMotion ? 0 : 50, opacity: reduceMotion ? 1 : 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: reduceMotion ? 0 : 0.4,
      ease
    });

    tl.to(cardsRef.current, {
      y: 0,
      opacity: 1,
      duration: reduceMotion ? 0 : 0.4,
      ease,
      stagger: reduceMotion ? 0 : 0.08
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

  const toggleMenu = useCallback(() => {
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
  }, [isExpanded]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        toggleMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded, toggleMenu]);

  useEffect(() => {
    if (!isExpanded) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleMenu();
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !navRef.current) return;

      const focusable = Array.from(
        navRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isExpanded, toggleMenu]);

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
          "card-nav block h-[60px] p-0 rounded-xl shadow-none relative overflow-hidden will-change-[height] border border-white/10",
          isExpanded ? 'open' : ''
        )}
        style={{
          backgroundColor: isExpanded ? '#08090a' : baseColor,
        }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[10] bg-inherit">
          <button
            ref={menuButtonRef}
            type="button"
            className={cn(
              "hamburger-menu group flex h-full items-center justify-center gap-2 rounded-md px-2 text-left order-3 md:order-none",
              isHamburgerOpen ? 'open' : ''
            )}
            onClick={toggleMenu}
            aria-label={isExpanded ? closeLabel : menuLabel}
            aria-expanded={isExpanded}
            aria-controls="card-nav-content"
            style={{ color: menuColor || '#fff' }}
          >
            <span className="flex flex-col gap-[6px]" aria-hidden="true">
              <span
                className={cn(
                  "hamburger-line block h-[2px] w-[24px] bg-current transition-transform duration-300 ease-out",
                  isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
                )}
              />
              <span
                className={cn(
                  "hamburger-line block h-[2px] w-[24px] bg-current transition-transform duration-300 ease-out",
                  isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
                )}
              />
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.16em] sm:inline">
              {isExpanded ? closeLabel : menuLabel}
            </span>
          </button>

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

          <div className="order-2 flex items-center gap-1 border-l border-white/10 ml-2 pl-2 pr-1 md:order-none">
            <Link
              href={onLocaleChange?.('en') || '#'}
              aria-current={locale === 'en' ? 'page' : undefined}
              className={cn(
                "flex min-h-11 items-center rounded-md px-2 text-xs font-medium transition-colors",
                locale === 'en'
                  ? "bg-emerald-500/10 text-emerald-300"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white"
              )}
            >
              EN
            </Link>
            <Link
              href={onLocaleChange?.('it') || '#'}
              aria-current={locale === 'it' ? 'page' : undefined}
              className={cn(
                "flex min-h-11 items-center rounded-md px-2 text-xs font-medium transition-colors",
                locale === 'it'
                  ? "bg-emerald-500/10 text-emerald-300"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white"
              )}
            >
              IT
            </Link>
          </div>
        </div>

        <div
          id="card-nav-content"
          className={cn(
            "card-nav-content absolute left-0 right-0 top-[60px] p-2 md:p-4 flex flex-col items-stretch gap-2 md:gap-4 justify-start z-[1] overscroll-contain",
            isExpanded ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none',
            "md:flex-row md:items-stretch md:h-[calc(100%-80px)] overflow-y-auto md:overflow-visible"
          )}
          aria-hidden={!isExpanded}
        >
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card relative flex min-w-0 flex-1 flex-col gap-5 rounded-lg border border-white/10 p-6"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label flex-shrink-0 border-b border-white/10 pb-3 text-base font-semibold tracking-tight md:text-lg">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-1 flex-grow">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm text-neutral-300 no-underline transition-colors hover:bg-white/5 hover:text-emerald-300 md:text-[15px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={() => {
                      if (isExpanded) toggleMenu();
                    }}
                  >
                    <ArrowUpRight className="nav-card-link-icon shrink-0 w-4 h-4" aria-hidden="true" />
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
