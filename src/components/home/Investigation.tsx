import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const investigationData = [
  {
    type: 'INTERVIEW',
    category: 'STEEL',
    title: 'The Next War Will Be Fought Over Dirt',
    description: 'A deep dive into the critical mineral supply chain and the geopolitical battle for resources.',
    ytLink: 'https://youtube.com',
    size: 'large', // Full width or 2/3 width
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000'
  },
  {
    type: 'INTERVIEW',
    category: 'PLASTIC',
    title: 'The Age of EPR',
    description: 'Extended Producer Responsibility: The new global standard.',
    ytLink: 'https://youtube.com',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1526951521990-620dc14c214b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    type: 'INTERVIEW',
    category: 'MATERIAL',
    title: "Lithium's Journey",
    description: 'Tracing the lifecycle of an EV battery from mine to wheel.',
    ytLink: 'https://youtube.com',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000'
  }
];

export const Investigation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const items = containerRef.current.querySelectorAll('.investigation-card');
    
    gsap.fromTo(items, 
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="investigation" className="w-full bg-[#0a0a0a] px-8 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[#96CC39] text-sm font-medium tracking-[0.2em] uppercase mb-4">Investigation</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">Uncovering the Material Truth</h3>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {investigationData.map((item, i) => (
            <a 
              key={i} 
              href={item.ytLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`investigation-card group relative block overflow-hidden rounded-2xl bg-[#111] border border-white/5 no-underline transition-transform duration-500 hover:scale-[0.98] ${
                item.size === 'large' ? 'md:col-span-6 lg:col-span-4 h-[500px]' : 'md:col-span-3 lg:col-span-2 h-[500px]'
              }`}
            >
              {/* Background Image With Overlay */}
              <div className="absolute inset-0 z-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#96CC39] text-black text-[10px] font-bold rounded-sm">{item.type}</span>
                  <span className="text-white/40 text-[10px] font-bold tracking-[0.2em]">{item.category}</span>
                </div>
                
                <h4 className="text-3xl md:text-4xl font-serif text-white mb-4 group-hover:text-[#96CC39] transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-white/60 text-sm md:text-md max-w-sm mb-8 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {item.description}
                </p>

                <div className="flex items-center gap-4 group/btn">
                   <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#96CC39] group-hover:border-[#96CC39]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-black transition-colors translate-x-0.5"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                   <span className="text-xs font-bold tracking-widest uppercase">View in YT</span>
                </div>
              </div>

              {/* Grid Background Effect on Hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-[radial-gradient(#96CC39_1px,transparent_1px)] [background-size:20px_20px]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
