import React, { useEffect, useState } from 'react';
import Spotlight from './components/Spotlight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DriftWall from './components/DriftWall';
import ProjectsCarousel from './components/ProjectsCarousel';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Antigravity from './components/Antigravity';
import CustomCursor from './components/CustomCursor';
import LanguageSwitcher from './components/LanguageSwitcher';
import Loader from './components/Loader';
import MobileCTA from './components/MobileCTA';
import { useLanguage } from './context/LanguageContext';
import ClickSpark from './components/rb/ClickSpark';
import DecryptedText from './components/rb/DecryptedText';
import ScrollVelocity from './components/rb/ScrollVelocity';

// Partículas WebGL solo en pantallas grandes, sin "reducir movimiento" y con la pestaña visible.
function useParticlesAllowed() {
  const query = () =>
    window.matchMedia('(min-width: 768px)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    !document.hidden;
  const [ok, setOk] = useState(query);
  useEffect(() => {
    const update = () => setOk(query());
    const mqs = ['(min-width: 768px)', '(prefers-reduced-motion: reduce)'].map((q) => window.matchMedia(q));
    mqs.forEach((m) => m.addEventListener('change', update));
    document.addEventListener('visibilitychange', update);
    return () => {
      mqs.forEach((m) => m.removeEventListener('change', update));
      document.removeEventListener('visibilitychange', update);
    };
  }, []);
  return ok;
}

function App() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const showParticles = useParticlesAllowed();

  // Respaldo: si la animación del loader se retrasa (pestaña en segundo plano), se quita igual.
  useEffect(() => {
    const id = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(id);
  }, []);
  
  return (
    <ClickSpark sparkColor="#38BDF8" sparkSize={10} sparkRadius={22} sparkCount={8} duration={450}>
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <LanguageSwitcher />
      <MobileCTA />
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        {/* Antigravity Base Layer */}
        {showParticles && (
        <div className="absolute inset-0 opacity-20">
          <Antigravity
            count={120}
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
        )}
        {/* Capa estática en lugar de un segundo canvas WebGL */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 0%, rgba(56,189,248,0.10), transparent 70%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(15,23,42,0.9), transparent 70%)' }} />
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
                  <DecryptedText text="TechnicalArsenal" animateOn="view" speed={40} sequential revealDirection="start" />
                  <span className="text-accent-secondary font-mono"> /&gt;</span>
                </h2>
                <div className="h-px flex-grow bg-card-border"></div>
              </div>
              <p className="font-mono text-sm text-muted-foreground">
                {t.about.skillsText}
              </p>
            </div>
            
            <div style={{ height: 480, width: '100%' }} className="overflow-hidden relative">
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

          <div className="w-screen -mx-6 md:-mx-12 py-6 overflow-hidden" aria-hidden="true">
            <ScrollVelocity
              texts={['REACT • VUE • NODE • JAVA • PYTHON • POSTGRESQL •', 'SPRING BOOT • DENO • DOCKER • TENSORFLOW • TAILWIND •']}
              velocity={60}
              numCopies={4}
              fadeEdges
              className="font-mono font-bold text-accent/40"
              parallaxClassName="vel-row"
              scrollerClassName="vel-scroller"
            />
          </div>

          <ProjectsCarousel />
          <Experience />
          <Contact />
        </main>
        
        <footer className="w-full border-t border-card-border bg-background/50 backdrop-blur-md py-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
            <div className="font-mono text-sm font-bold text-accent">
              <span className="mr-2">TERMINAL_ROOT</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button 
                onClick={() => alert("Política de Privacidad: Este portafolio no recopila datos personales sensibles. Cualquier información enviada a través de los enlaces de contacto será utilizada exclusivamente para responder a tu solicitud y no será compartida con terceros.")}
                className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors cursor-pointer"
              >
                Política de Privacidad
              </button>
              <div className="font-mono text-xs text-muted-foreground">
                © 2026 JESÚS_OBANDO. ALL_RIGHTS_RESERVED.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </ClickSpark>
  );
}

export default App;
