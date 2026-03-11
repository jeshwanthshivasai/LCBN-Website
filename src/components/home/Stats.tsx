import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const statsData = [
  { value: 150, suffix: '+', label: 'Companies Tracked' },
  { value: 12, suffix: '', label: 'Sectors Mapped' },
  { value: 85, suffix: '%', label: 'Compliance Accuracy' },
  { value: 500, suffix: 'M+', label: 'Data Points' }
];

export const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const counters = containerRef.current.querySelectorAll('.stat-number');
    
    counters.forEach((counter: any) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      
      gsap.fromTo(counter, 
        { innerText: 0 }, 
        {
          innerText: target,
          duration: 2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 90%',
          },
          snap: { innerText: 1 },
        }
      );
    });
  }, []);

  return (
    <section id="numbers" className="w-full bg-[#0a0a0a] px-8 md:px-24 py-32">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
          {statsData.map((stat, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="flex items-baseline gap-1">
                <span 
                  className="stat-number text-5xl md:text-8xl font-serif text-[#96CC39] tracking-tighter" 
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="text-3xl md:text-5xl font-serif text-[#96CC39]">{stat.suffix}</span>
              </div>
              <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-white/30 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
