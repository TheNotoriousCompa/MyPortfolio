'use client';

import * as React from 'react';
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"

interface Section {
  id: string;
  label: string;
}

interface HeaderProps {
  sections: Section[];
  scrollToSection: (id: string) => void;
}

export function Header({ sections, scrollToSection }: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    // Always use the scrollToSection prop which is provided by the parent component
    scrollToSection(id);
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen(prev => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {open && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}
      
      <header className="sticky top-4 left-0 right-0 z-50 px-4 sm:px-6">
       <nav className="relative max-w-7xl w-full mx-auto bg-white/5 backdrop-blur-[4px] border border-white/10 shadow-lg shadow-emerald-500/5 rounded-full px-4 sm:px-2 py-3 flex items-center justify-between transition-all duration-300 hover:bg-white/10">
        
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center font-['Space_Mono'] font-bold hover:opacity-80 transition-opacity touch-manipulation"
        >
          <span className="text-emerald-400">{'<'}</span>
          <span className="text-white mx-1">MC</span>
          <span className="text-emerald-400">{'/>'}</span>
        </button>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-2">
            {sections.map((section) => (
              <NavigationMenuItem key={section.id} className="relative group">
                {section.id === 'gallery' ? (
                  <NavigationMenuLink asChild>
                    <a
                      href="/gallery"
                      className={cn(
                        'relative px-4 py-2 text-sm font-medium font-["Space_Mono"]',
                        'text-neutral-300 hover:text-white',
                        'transition-all duration-200',
                        'before:absolute before:inset-0 before:border-2 before:border-transparent',
                        'before:rounded-md before:transition-all before:duration-300',
                        'hover:before:border-emerald-500/50 hover:before:scale-105',
                        'after:absolute after:inset-0 after:bg-emerald-500/10',
                        'after:rounded-md after:opacity-0 after:transition-opacity',
                        'hover:after:opacity-100',
                        'z-0 overflow-hidden'
                      )}
                    >
                      <span className="relative z-10">{section.label}</span>
                    </a>
                  </NavigationMenuLink>
                ) : (
                  <NavigationMenuLink
                    href={`#${section.id}`}
                    onClick={(e) => handleNavigation(e, section.id)}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium font-["Space_Mono"]',
                      'text-neutral-300 hover:text-white',
                      'cursor-pointer',
                      'transition-all duration-200',
                      'before:absolute before:inset-0 before:border-2 before:border-transparent',
                      'before:rounded-md before:transition-all before:duration-300',
                      'hover:before:border-emerald-500/50 hover:before:scale-105',
                      'after:absolute after:inset-0 after:bg-emerald-500/10',
                      'after:rounded-md after:opacity-0 after:transition-opacity',
                      'hover:after:opacity-100',
                      'z-0 overflow-hidden'
                    )}
                  >
                    <span className="relative z-10">{section.label}</span>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="text-neutral-300 hover:text-white hover:bg-white/10 font-['Space_Mono'] font-bold transition-all duration-300 touch-manipulation min-h-[44px] min-w-[44px]"
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={cn(
                  "block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out",
                  open ? "rotate-45" : "-translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out absolute",
                  open ? "-rotate-45" : "translate-y-1.5"
                )}
              />
            </div>
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </div>

        {/* Sticky Menu */}
        
          <div 
            className={cn(
             "md:hidden fixed left-1/2 -translate-x-1/2 top-20 z-50 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden w-[calc(100%-2rem)] rounded-2xl",
              open ? "max-h-[100vh] max-w-[100vw] opacity-100" : "max-h-0 max-w-0 opacity-0"
            )}
          >
          <div className="w-full h-full flex justify-center">
            <nav className="w-full max-w-xs py-4 space-y-2">
              {sections.map((section) =>
                section.id === "gallery" ? (
                  <a
                    key={section.id}
                    href="/gallery"
                    onClick={closeMenu}
                    className="relative block w-full text-center px-6 py-3 text-base font-medium text-neutral-300 group transition-all duration-200 font-['Space_Mono'] touch-manipulation"
                  >
                    <span className="relative z-10">{section.label}</span>
                    <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-emerald-500/50 group-hover:scale-105 transition-all duration-300 -z-10"></span>
                    <span className="absolute inset-0 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-20"></span>
                  </a>
                ) : (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => handleNavigation(e, section.id)}
                    className="relative block w-full text-center px-6 py-3 text-base font-medium text-neutral-300 group transition-all duration-200 font-['Space_Mono'] touch-manipulation"
                  >
                    <span className="relative z-10">{section.label}</span>
                    <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-emerald-500/50 group-hover:scale-105 transition-all duration-300 -z-10"></span>
                    <span className="absolute inset-0 bg-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-20"></span>
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}
