import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 px-8 py-24 mt-32 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        
        {/* Contact CTA */}
        <div className="max-w-md">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
            Ready to investigate your material horizons?
          </h2>
          <p className="text-white/60 mb-8">Connect with the LCBN intelligence unit.</p>
          <a href="mailto:letscirclebacknow@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-[#96CC39] text-black font-semibold rounded-full hover:bg-white transition-colors">
            letscirclebacknow@gmail.com
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 text-sm font-medium">
          <a href="#" className="hover:text-[#96CC39] transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-[#96CC39] transition-colors">X (TWITTER)</a>
          <a href="#" className="hover:text-[#96CC39] transition-colors">INSTAGRAM</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-32 pt-8 border-t border-white/5 text-xs text-white/40">
        <p>LCBN© 2026 Let's Circle Back, Now!</p>
        <p className="tracking-widest">GLOBAL MATERIAL INTELLIGENCE</p>
      </div>
    </footer>
  );
};
