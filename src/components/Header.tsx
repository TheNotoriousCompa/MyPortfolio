"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

interface HeaderProps {
  sections: Section[];
  isGalleryPage?: boolean;
}

export function Header({ sections, isGalleryPage = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <motion.div
        className={cn(
          "mx-auto w-full px-4 pt-4 transition-all duration-300",
          isScrolled ? "max-w-3xl" : "max-w-4xl"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.nav
          className={cn(
            "flex items-center justify-between p-6 rounded-full border border-white/5 bg-neutral-900/50 hover:border-emerald-500/30 transition-all",
            isScrolled && "shadow-lg"
          )}
          animate={{
            padding: isScrolled ? "0.5rem 1.5rem" : "0.5rem 1.5rem",
            boxShadow: isScrolled
              ? "0 4px 30px rgba(16, 185, 129, 0.2)"
              : "0 2px 15px rgba(16, 185, 129, 0.1)",
            backdropFilter: "blur(8px)"
          }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* Logo */}
          <a
            href={isGalleryPage ? '/' : '#'}
            className="flex items-center space-x-2 px-2 py-1 text-sm font-normal text-white hover:text-emerald-400 transition-colors"
            onClick={closeMobileMenu}
          >
            <span className="text-emerald-400">{'<'}</span>
            <span className="mx-1">MC</span>
            <span className="text-emerald-400">{'/>'}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={isGalleryPage ? `/#${section.id}` : `#${section.id}`}
                onClick={closeMobileMenu}
                className="group relative px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 rounded-md overflow-hidden"
              >
                <span className="relative z-10">{section.label}</span>
                <span className="absolute inset-0 w-full h-full bg-emerald-500/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-md" />
              </a>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-emerald-400 transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 rounded-xl bg-black/90 p-4 backdrop-blur-md border border-white/10 shadow-xl"
            >
              <div className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={isGalleryPage ? `/#${section.id}` : `#${section.id}`}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

export default Header;