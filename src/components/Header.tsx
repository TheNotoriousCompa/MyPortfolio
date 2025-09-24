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
}

export function Header({ sections }: HeaderProps) {
  const [open, setOpen] = React.useState(false);

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
       <nav className="relative max-w-7xl w-full mx-auto bg-white/5 backdrop-blur-[4px] border border-white/10 shadow-lg shadow-emerald-500/5 rounded-full px-4 sm:px-2 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#hero"
          className="flex items-center font-bold hover:opacity-80 transition-opacity touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          onClick={closeMenu}
        >
          <span className="text-emerald-400">{'<'}</span>
          <span className="text-white mx-1">MC</span>
          <span className="text-emerald-400">{'/>'}</span>
        </a>
        
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
                        'relative px-4 py-2 text-sm font-medium',
                        'text-neutral-300 hover:text-white',
                        'transition-all duration-200',
                        'overflow-hidden group/link',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                      )}
                    >
                      <span className="relative z-10">{section.label}</span>
                      <span 
                        className="absolute inset-0 border-2 border-transparent rounded-md transition-transform duration-200 group-hover/link:border-emerald-500/50 -z-10" 
                      ></span>
                      <span 
                        className="absolute inset-0 bg-emerald-500/10 rounded-md opacity-0 transition-opacity duration-150 group-hover/link:opacity-100 -z-20"
                      ></span>
                    </a>
                  </NavigationMenuLink>
                ) : (
                  <NavigationMenuLink
                    href={`#${section.id}`}
                    onClick={closeMenu}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium',
                      'text-neutral-300 hover:text-white',
                      'cursor-pointer',
                      'transition-all duration-200',
                      'overflow-hidden group/link',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
                    )}
                  >
                    <span className="relative z-10">{section.label}</span>
                    <span className="absolute inset-0 border-2 border-transparent rounded-md transition-transform duration-200 group-hover/link:border-emerald-500/50 -z-10"></span>
                    <span className="absolute inset-0 bg-emerald-500/10 rounded-md opacity-0 transition-opacity duration-150 group-hover/link:opacity-100 -z-20"></span>
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
            className="text-neutral-300 hover:text-white hover:bg-white/10 font-bold transition-all duration-300 touch-manipulation min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
              "md:hidden fixed left-1/2 -translate-x-1/2 top-20 z-50 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-200 ease-out overflow-hidden w-[calc(100%-2rem)] rounded-2xl",
              open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
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
                    className="relative block w-full text-center px-6 py-3 text-base font-medium text-neutral-300 touch-manipulation"
                  >
                    <span className="relative">{section.label}</span>
                  </a>
                ) : (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={closeMenu}
                    className="relative block w-full text-center px-6 py-3 text-base font-medium text-neutral-300 touch-manipulation"
                  >
                    <span className="relative">{section.label}</span>
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
