import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlueprintCanvas } from '../../canvas/BlueprintCanvas';

gsap.registerPlugin(ScrollTrigger);

const blueprintData = [
  {
    index: '01',
    title: 'Tracking & Traceability',
    description: 'Implementation of comprehensive chain of custody protocols to ensure complete visibility. We utilize digital chains and material passports to facilitate a true cradle-to-cradle lifecycle, ensuring compliance with Extended Producer Responsibility (EPR) standards.',
    tags: ['CHAIN OF CUSTODY', 'DIGITAL CHAIN', 'CRADLE-TO-CRADLE', 'MATERIAL PASSPORTS', 'EPR']
  },
  {
    index: '02',
    title: 'Closed Loop Management',
    description: 'Redefining waste as a design flaw, we engineer systems that visualize and manage the return journey of every product. Our advanced reverse logistics networks ensure materials are recovered and reintegrated efficiently, closing the production loop.',
    tags: ['WASTE IS A DESIGN FLAW', 'VISUALISING RETURN JOURNEY', 'REVERSE LOGISTICS']
  },
  {
    index: '03',
    title: 'Circular Economy',
    description: 'Moving beyond linear consumption to a regenerative model where circular intelligence drives decision-making. We aim to trace every atom, fostering a system where resources are kept in use for as long as possible through regenerative design principles.',
    tags: ['CIRCULAR INTELLIGENCE', 'EVERY ATOM TRACED', 'REGENERATIVE DESIGN']
  },
  {
    index: '04',
    title: 'GHG Emissions',
    description: 'Precise measurement and management of Greenhouse Gas emissions across Scope 1, 2, and 3. We employ carbon footprint mapping and real-time tracking technologies to identify hotspots and drive actionable reduction strategies.',
    tags: ['SCOPE 1/2/3 MEASUREMENT', 'CARBON FOOTPRINT MAPPING', 'REAL-TIME TRACKING']
  },
  {
    index: '05',
    title: 'Carbon Neutrality',
    description: 'Charting clear pathways to net-zero through strategic decarbonization roadmaps. We assist organizations in integrating renewable energy sources and optimizing operations to achieve and sustain carbon neutrality goals.',
    tags: ['NET-ZERO PATHWAYS', 'DECARBONIZATION ROADMAPS', 'RENEWABLE INTEGRATION']
  },
  {
    index: '06',
    title: 'Carbon Credits',
    description: 'Navigating voluntary carbon markets to secure high-quality, verified carbon credits. We help build robust offset portfolios that complement reduction efforts, ensuring environmental integrity and financial value.',
    tags: ['VOLUNTARY CARBON MARKETS', 'CREDIT VERIFICATION', 'OFFSET PORTFOLIOS']
  },
  {
    index: '07',
    title: 'Supplier Discovery',
    description: 'Unlocking a global network of sustainable partners through advanced supplier mapping. Our proprietary sustainability scoring and risk assessment tools ensure you collaborate with suppliers who meet your ethical and environmental standards.',
    tags: ['GLOBAL SUPPLIER MAPPING', 'SUSTAINABILITY SCORING', 'RISK ASSESSMENT']
  },
  {
    index: '08',
    title: 'Resilience',
    description: 'Fortifying supply chains against global uncertainties through rigorous stress testing and disruption modeling. We implement proactive risk mitigation strategies to ensure business continuity and adaptability in volatile markets.',
    tags: ['SUPPLY CHAIN STRESS TESTING', 'DISRUPTION MODELING', 'RISK MITIGATION']
  },
  {
    index: '09',
    title: 'Financing',
    description: 'Facilitating access to sustainable finance options including green bonds and sustainability-linked loans. We align your initiatives with ESG investment frameworks to attract responsible capital and fund green transitions.',
    tags: ['GREEN BONDS', 'SUSTAINABILITY-LINKED LOANS', 'ESG INVESTMENT FRAMEWORKS']
  },
  {
    index: '10',
    title: 'Human Resource',
    description: 'Empowering the workforce for the green economy through strategic talent mapping and skills gap analysis. We focus on workforce sustainability, ensuring your team is equipped to drive and support circular initiatives.',
    tags: ['TALENT MAPPING', 'SKILLS GAP ANALYSIS', 'WORKFORCE SUSTAINABILITY']
  },
  {
    index: '11',
    title: 'Manufacturing Resource',
    description: 'Optimizing manufacturing assets for maximum efficiency and minimal waste. Through smart factory integration and production analysis, we enhance resource utilization to support sustainable manufacturing practices.',
    tags: ['ASSET OPTIMIZATION', 'PRODUCTION EFFICIENCY', 'SMART FACTORY INTEGRATION']
  },
  {
    index: '12',
    title: 'As-a-Service',
    description: 'Transitioning from ownership to access with Product-as-a-Service models. We help design servitization strategies and performance contracts that incentivize product longevity, reuse, and responsible end-of-life management.',
    tags: ['PRODUCT-AS-A-SERVICE MODELS', 'SERVITIZATION', 'PERFORMANCE CONTRACTS']
  }
];

export const Blueprint = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !leftRef.current || !rightRef.current) return;

    const sections = gsap.utils.toArray('.blueprint-step');
    
    // Pin the right side (3D Canvas)
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: rightRef.current,
      scrub: true,
    });

    // Handle index updates on scroll
    sections.forEach((section: any, i: number) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="blueprint" className="relative w-full bg-[#0a0a0a] flex flex-col md:flex-row">
      
      {/* Scrollable Left Side: Text Content */}
      <div ref={leftRef} className="w-full md:w-1/2 px-8 md:px-24 py-32 flex flex-col gap-32">
        <div className="mb-12">
          <h2 className="text-[#96CC39] text-sm font-medium tracking-[0.2em] uppercase mb-4">The Blueprint</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">Our 12-Point Architecture</h3>
        </div>

        {blueprintData.map((item, i) => (
          <div key={item.index} className="blueprint-step min-h-[60vh] flex flex-col justify-center gap-6 opacity-40 transition-opacity duration-500" style={{ opacity: activeIndex === i ? 1 : 0.2 }}>
            <span className="text-[#96CC39] text-5xl md:text-7xl font-serif font-light">{item.index}</span>
            <h4 className="text-3xl md:text-5xl font-serif text-white">{item.title}</h4>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-white/10 text-[10px] tracking-widest text-[#96CC39] rounded-full uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {/* Spacer for bottom */}
        <div className="h-[20vh]" />
      </div>

      {/* Pinned Right Side: 3D Canvas */}
      <div ref={rightRef} className="hidden md:flex w-1/2 h-screen items-center justify-center p-12">
        <div className="w-full h-full relative">
          {/* Decorative frame overlay */}
          <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-2xl" />
          <div className="absolute top-8 left-8 text-[10px] tracking-[0.3em] text-white/20 uppercase">Intelligence Unit // Blueprint 00{activeIndex + 1}</div>
          
          <BlueprintCanvas activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
};
