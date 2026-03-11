import { useState } from 'react';

const audienceData = [
  {
    title: 'Manufacturers & OEMs',
    benefit: 'Supply Chain visibility',
    expectation: 'Tailored for CXOs, tech leads, supply chain, sales, and procurement'
  },
  {
    title: 'Recyclers',
    benefit: 'Material Valorization',
    expectation: 'Market intelligence & tech insights (Beyond simple scrapping facilities)'
  },
  {
    title: 'Material Producers',
    benefit: 'Lifecycle Tracking',
    expectation: 'Impact analysis & strategic materials planning'
  },
  {
    title: 'Researchers',
    benefit: 'Knowledge Access',
    expectation: 'Deep-dive reports & data sets for Academia and R&D'
  },
  {
    title: 'Government Policy Makers',
    benefit: 'Data-Driven Governance',
    expectation: 'Global best practices & impact analysis'
  },
  {
    title: 'Investors & Startups',
    benefit: 'ESG Alpha & Innovation',
    expectation: 'Sustainability trends, ROI modeling & market intelligence'
  }
];

export const Audience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="audience" className="w-full bg-[#0a0a0a] px-8 md:px-24 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[#96CC39] text-sm font-medium tracking-[0.2em] uppercase mb-4">Audience</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">Who Can Gain What</h3>
        </div>

        <div className="border-t border-white/10">
          {audienceData.map((item, i) => (
            <div 
              key={i} 
              className="group border-b border-white/10 cursor-pointer overflow-hidden" 
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <div className="flex items-center justify-between py-8">
                 <div className="flex items-center gap-12">
                   <span className="text-white/20 font-serif text-xl">0{i + 1}</span>
                   <h4 className={`text-2xl md:text-4xl font-serif transition-colors ${openIndex === i ? 'text-[#96CC39]' : 'text-white/70 group-hover:text-white'}`}>
                     {item.title}
                   </h4>
                 </div>
                 <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'rotate-180 bg-[#96CC39] border-[#96CC39]' : ''}`}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={openIndex === i ? 'text-black' : 'text-white'}><polyline points="6 9 12 15 18 9"></polyline></svg>
                 </div>
              </div>
              
              <div 
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] ${openIndex === i ? 'grid-rows-[1fr] pb-12 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pl-20">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-[#96CC39] uppercase mb-4 block">Benefit</span>
                      <p className="text-xl text-white font-serif">{item.benefit}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest text-[#96CC39] uppercase mb-4 block">Expectation</span>
                      <p className="text-md text-white/50 leading-relaxed max-w-sm">{item.expectation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
