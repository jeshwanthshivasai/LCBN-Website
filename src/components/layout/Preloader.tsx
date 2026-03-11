import React, { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import gsap from 'gsap';

export const Preloader = () => {
  const { progress } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for Drei useProgress to hit 100%
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
        
        // The "Theater Curtain" animation from `awwwards-page-transitions`
        gsap.to('.preloader-curtain', {
          yPercent: -100,
          duration: 1.5,
          ease: 'power4.inOut',
          stagger: 0.1,
          onComplete: () => {
            gsap.set('.preloader-container', { display: 'none' });
          }
        });
      }, 500); // Small buffer to ensure GSAP is ready

      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div className="preloader-container fixed inset-0 z-[100] flex flex-col pointer-events-none">
      
      {/* The visible text/logo while loading */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="overflow-hidden">
          <h1 className="text-[#96CC39] font-serif text-3xl md:text-5xl tracking-tighter mix-blend-difference">
            LCBN {progress.toFixed(0)}%
          </h1>
        </div>
      </div>

      {/* The 3 curtains that slide up independently for a premium feel */}
      <div className="preloader-curtain w-full h-1/3 bg-[#0a0a0a]" />
      <div className="preloader-curtain w-full h-1/3 bg-[#0a0a0a]" />
      <div className="preloader-curtain w-full h-1/3 bg-[#0a0a0a]" />
      
    </div>
  );
};
