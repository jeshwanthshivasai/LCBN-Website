import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] flex items-center justify-between px-8 py-6',
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-12">
        <a href="/" className="text-xl font-bold tracking-tighter text-white hover:text-[#96CC39] transition-colors">
          LCBN
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {['The Blueprint', 'Investigation', 'Knowledge Center', 'Audience', 'Numbers'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#96CC39] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
        <div className="flex items-center gap-4 border-l border-white/10 pl-8">
          {['ENG', 'JPN', 'THA'].map((lang, i) => (
            <button key={lang} className={cn("hover:text-white transition-colors", i === 0 && "text-white")}>
              {lang}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
