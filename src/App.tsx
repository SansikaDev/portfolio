import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import { ScrollProgress } from './components/ScrollProgress';
import { PrismaHero } from '@/components/ui/prisma-hero';
import { scrollToId } from './lib/scroll';
import { PortfolioGate } from './components/Loader';

export function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const id = window.location.hash.replace('#', '');
    if (id) {
      window.setTimeout(() => scrollToId(id), 80);
    }
  }, [ready]);

  return (
    <PortfolioGate onReady={() => setReady(true)}>
      <div className="min-h-screen w-full overflow-x-hidden bg-birch text-pine">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-pine focus:px-4 focus:py-2 focus:text-birch"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main>
          <PrismaHero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </PortfolioGate>
  );
}
