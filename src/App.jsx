import React from 'react';
import Spotlight from './components/Spotlight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DriftWall from './components/DriftWall';
import ProjectsCarousel from './components/ProjectsCarousel';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Silk from './components/Silk'; // Assuming shadcn creates it here
import Antigravity from './components/Antigravity';
import CustomCursor from './components/CustomCursor';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();
  
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <CustomCursor />
      <LanguageSwitcher />
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        {/* Antigravity Base Layer */}
        <div className="absolute inset-0 opacity-20">
          <Antigravity
            count={300}
            magnetRadius={10}
            ringRadius={10}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={2}
            lerpSpeed={0.1}
            color="#38BDF8" // Accent color (light blue) instead of pink
            autoAnimate={true} // True so it moves even without cursor

            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
        {/* Silk Overlay Layer */}
        <div className="absolute inset-0 mix-blend-screen opacity-60">
          <Silk
            speed={3}
            scale={1}
            color="#0F172A" // Slate-900 (Darker)
            noiseIntensity={1.2}
            rotation={0}
          />
        </div>
      </div>

      {/* Main Content (z-index ensures it's above Silk) */}
      <div className="relative z-10 w-full">
        <Spotlight />
        <Navbar />
        <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 md:px-12">
          <Hero />
          <About />
          
          <section id="skills" className="w-full py-12">
            <div className="flex flex-col gap-2 mb-12">
              <div className="flex items-center gap-4">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  <span className="text-accent-secondary font-mono">&lt;</span>
                  TechnicalArsenal
                  <span className="text-accent-secondary font-mono"> /&gt;</span>
                </h2>
                <div className="h-px flex-grow bg-card-border"></div>
              </div>
              <p className="font-mono text-sm text-muted-foreground">
                {t.about.skillsText}
              </p>
            </div>
            
            <div style={{ height: 600, width: '100%' }} className="overflow-hidden relative">
              <DriftWall
                items={t.driftWallItems}
                columns={12}
                tileWidth={140}
                tileHeight={140}
                gap={24}
                speed={25}
                direction="up"
                overlayColor="#0F172A"
                fade={0.3}
                dim={0.85}
              />
            </div>
          </section>

          <ProjectsCarousel />
          <Experience />
          <Contact />
        </main>
        
        <footer className="w-full border-t border-card-border bg-background/50 backdrop-blur-md py-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
            <div className="font-mono text-sm font-bold text-accent">
              <span className="mr-2">TERMINAL_ROOT</span>
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              © 2026 JESÚS_OBANDO. ALL_RIGHTS_RESERVED.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
