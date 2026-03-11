import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const knowledgeData = [
  {
    id: 1,
    category: 'POLICY / MATERIAL',
    title: 'Catena-X Ecosystem',
    duration: '12 min watch',
    description: 'Concrete Analysis of the global material data space.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 2,
    category: 'POLICY / MATERIAL',
    title: 'Ouranos Initiative',
    duration: '12 min watch',
    description: 'Concrete Analysis on digital product passports.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 3,
    category: 'POLICY / MATERIAL',
    title: 'EU Battery Regulation',
    duration: '12 min watch',
    description: 'Concrete Analysis on latest material compliance standards.',
    image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&q=80&w=1000'
  }
];

export const KnowledgeCenter = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(containerRef.current.querySelectorAll('.knowledge-item'), 
      { x: 40, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        }
      }
    );
  }, []);

  return (
    <section id="knowledge-center" className="w-full bg-[#0a0a0a] px-8 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="mb-20">
          <h2 className="text-[#96CC39] text-sm font-medium tracking-[0.2em] uppercase mb-4">Knowledge Center</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">The Source of Truth</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {knowledgeData.map((item) => (
            <div key={item.id} className="knowledge-item group flex flex-col cursor-pointer">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm mb-8 bg-[#111]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 grayscale group-hover:grayscale-0" />
                
                {/* Visual Label */}
                <div className="absolute top-6 left-6 flex flex-col gap-1 items-start">
                   <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">{item.category}</span>
                   <div className="w-8 h-[1px] bg-[#96CC39]" />
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-6 left-6 text-[10px] font-bold tracking-widest text-[#96CC39] bg-black/80 px-2 py-1 backdrop-blur-sm">
                   {item.duration}
                </div>
              </div>

              <h4 className="text-2xl font-serif text-white mb-4 group-hover:text-[#96CC39] transition-colors uppercase tracking-tight">
                {item.title}
              </h4>
              <p className="text-white/40 text-sm leading-relaxed mb-6 italic">
                {item.description}
              </p>
              
              <div className="w-fit flex items-center gap-2 group/link">
                 <span className="text-xs font-bold tracking-widest text-white group-hover/link:text-[#96CC39] transition-colors">VIEW IN YT</span>
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 group-hover/link:text-[#96CC39] transition-all transform group-hover/link:translate-x-1"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
