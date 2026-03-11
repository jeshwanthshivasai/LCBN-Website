import { Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Preloader } from './components/layout/Preloader';
import { HeroCanvas } from './canvas/HeroCanvas';
import { useLenis } from './hooks/useLenis';

import { Blueprint } from './components/home/Blueprint';
import { Investigation } from './components/home/Investigation';
import { KnowledgeCenter } from './components/home/KnowledgeCenter';
import { Audience } from './components/home/Audience';
import { Stats } from './components/home/Stats';

function App() {
  // Initialize Lenis smooth scroll globally
  useLenis();

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white selection:bg-[#96CC39] selection:text-black">
      <Suspense fallback={null}>
        <Preloader />
      </Suspense>

      <Navbar />
      
      <main className="relative w-full z-10">
        <HeroCanvas />
        <Hero />
        <Blueprint />
        <Investigation />
        <KnowledgeCenter />
        <Audience />
        <Stats />
      </main>

      <Footer />
    </div>
  );
}

export default App;
