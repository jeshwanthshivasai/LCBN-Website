import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

export const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headingRef.current || !subRef.current) return;

    // Split text into characters for cinematic reveal
    const splitHeading = new SplitType(headingRef.current, { types: 'chars,words' });
    const splitSub = new SplitType(subRef.current, { types: 'lines,words' });

    const tl = gsap.timeline({ delay: 0.5 }); // Delay for preloader finish

    tl.fromTo(
      splitHeading.chars,
      { y: 100, opacity: 0, rotateX: -90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.02,
        duration: 1.2,
        ease: 'power4.out',
      }
    ).fromTo(
      splitSub.words,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.01,
        duration: 1,
        ease: 'power3.out',
      },
      "-=0.8"
    );

    return () => {
      splitHeading.revert();
      splitSub.revert();
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 pt-32 pb-16 z-10">
      
      {/* Background WebGL Placeholder (will be replaced by actual Canvas later) */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
        {/* Subtle Radial Gradient to simulate a glow before WebGL loads */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#96CC39]/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 
          ref={headingRef}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight leading-[0.9] mb-8"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          Let's Circle Back, <span className="text-[#96CC39] italic">Now!</span>
        </h1>
        
        <p 
          ref={subRef}
          className="max-w-2xl text-lg md:text-2xl text-white/70 font-sans font-light leading-relaxed"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          The Explorative, Investigative and Knowledge Engine for Global Material Intelligence.
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase mb-4 text-[#96CC39]">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#96CC39] to-transparent" />
        </div>
      </div>
    </section>
  );
};
