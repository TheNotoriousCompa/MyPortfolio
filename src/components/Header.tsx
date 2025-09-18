'use client';

import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

interface Section {
  id: string;
  label: string;
}

interface HeaderProps {
  sections: Section[];
  scrollToSection: (id: string) => void;
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export function Header({ sections, scrollToSection, handleSmoothScroll }: HeaderProps) {
  return (
    <header className="sticky top-10 left-0 right-0 z-20 px-4 sm:px-6">
      <nav className="max-w-7xl w-full mx-auto backdrop-blur-xs bg-white/5 border border-white/10 shadow-lg shadow-emerald-500/5 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300 hover:bg-white/10">
        <button 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center font-['Space_Mono'] font-bold hover:opacity-80 transition-opacity"
        >
          <span className="text-emerald-400">{'<'}</span>
          <span className="text-white mx-1">MC</span>
          <span className="text-emerald-400">{'/>'}</span>
        </button>
        
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-2">
            {sections.slice(1).map((section) => (
              <NavigationMenuItem key={section.id}>
                <NavigationMenuLink 
                  href={`#${section.id}`}
                  onClick={(e) => handleSmoothScroll(e, section.id)}
                  className={cn(
                    'data-[active]:bg-emerald-500/20 data-[active]:text-emerald-400',
                    'bg-transparent hover:bg-emerald-500/10',
                    'text-neutral-300 hover:text-white',
                    'font-["Space_Mono"] font-bold',
                    'transition-colors duration-200',
                    'px-4 py-2 rounded-md text-sm font-medium'
                  )}
                >
                  {section.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-neutral-300 hover:text-white hover:bg-white/10 font-['Space_Mono'] font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="bg-neutral-900/95 backdrop-blur-sm border-0 p-0">
            <div className="flex flex-col space-y-4 mt-8 p-4">
              {sections.slice(1).map((section) => (
                <a 
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleSmoothScroll(e, section.id)}
                  className="text-neutral-300 hover:text-white text-lg py-2 px-4 rounded-lg hover:bg-white/10 transition-colors font-['Space_Mono'] font-bold"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
