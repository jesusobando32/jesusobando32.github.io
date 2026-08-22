import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Gradientes sutiles para cada tarjeta
const cardGradients = [
  "linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(2, 6, 23, 1) 100%)", // Cyan
  "linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(2, 6, 23, 1) 100%)", // Purple
  "linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(2, 6, 23, 1) 100%)", // Emerald
  "linear-gradient(135deg, rgba(244, 63, 94, 0.25) 0%, rgba(2, 6, 23, 1) 100%)", // Rose
];

const ProjectsCarousel = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === t.projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? t.projects.length - 1 : prev - 1));
  };

  // Autoplay functionality that resets timer on manual interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      nextProject();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, t.projects.length]);

  return (
    <section id="projects" className="w-full pt-12 pb-8 overflow-hidden">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          <span className="text-accent-secondary font-mono">const</span> projects = [
        </h2>
        <div className="h-px flex-grow bg-card-border"></div>
      </div>

      {/* Contenedor del Carrusel 3D */}
      <motion.div 
        className="relative w-full py-12 flex justify-center items-center min-h-[550px] overflow-hidden sm:overflow-visible"
        style={{ perspective: 1200, touchAction: "pan-y" }}
        onPanEnd={(e, info) => {
          if (info.offset.x < -50) {
            nextProject();
          } else if (info.offset.x > 50) {
            prevProject();
          }
        }}
      >
        {t.projects.map((project, index) => {
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);
          const isCenter = offset === 0;
          
          return (
            <motion.div
              key={project.id}
              initial={false}
              animate={{
                x: `${offset * 75}%`,
                scale: isCenter ? 1 : 0.85,
                rotateY: offset * -25,
                zIndex: 10 - absOffset,
                opacity: isCenter ? 1 : 0.3,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Custom spring-like easing
              className={`absolute w-[92%] sm:w-[75%] md:w-[70%] max-w-xl p-5 sm:p-8 md:p-10 rounded-2xl flex flex-col gap-4 sm:gap-6 border border-card-border shadow-2xl ${isCenter ? 'pointer-events-auto cursor-default' : 'cursor-pointer hover:opacity-50 transition-opacity'}`}
              style={{
                background: cardGradients[index % cardGradients.length],
                transformOrigin: "center center",
              }}
              onClick={() => {
                if (!isCenter) {
                  setCurrentIndex(index);
                }
              }}
            >
              <div className="font-mono text-sm text-accent-secondary">
                {`{ id: '${project.id}' }`}
              </div>
              
              {project.image && (
                <div className="w-full h-32 sm:h-40 relative rounded-lg overflow-hidden border border-card-border/50 shrink-0 mt-2">
                  <img src={project.image} alt={language === 'es' ? `Captura de pantalla de ${project.title}` : `Screenshot of ${project.title}`} className="object-cover w-full h-full" />
                </div>
              )}
              
              <div className="flex flex-col flex-grow relative mt-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>
                
                <p className="font-sans text-muted-foreground leading-relaxed mt-2 flex-grow">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-card-border/50">
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs font-mono text-accent">
                      [{tech.toUpperCase()}]
                    </span>
                  ))}
                </div>
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 border border-card-border bg-background/50 backdrop-blur-sm rounded-lg font-mono text-xs text-muted-foreground hover:text-accent hover:border-accent transition-all shrink-0 w-fit"
                    title={language === 'es' ? "Ver código fuente en GitHub" : "View source code on GitHub"}
                    onClick={(e) => isCenter ? null : e.preventDefault()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>{language === 'es' ? 'Ver Código' : 'View Source'}</span>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Controles del carrusel */}
      <div className="flex justify-center items-center gap-6 mt-4 relative z-20">
        <button 
          onClick={prevProject}
          className="p-3 border border-card-border text-muted-foreground hover:text-accent hover:border-accent transition-all bg-background/50 backdrop-blur-sm rounded-full hover:scale-110 active:scale-95"
          aria-label={language === 'es' ? 'Proyecto anterior' : 'Previous project'}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div className="flex gap-3 mx-4 items-center">
          {t.projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'w-8 bg-accent' 
                  : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              aria-label={language === 'es' ? `Ir al proyecto ${idx + 1}` : `Go to project ${idx + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextProject}
          className="p-3 border border-card-border text-muted-foreground hover:text-accent hover:border-accent transition-all bg-background/50 backdrop-blur-sm rounded-full hover:scale-110 active:scale-95"
          aria-label={language === 'es' ? 'Siguiente proyecto' : 'Next project'}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-2 text-right relative z-20">
        <h2 className="font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          ];
        </h2>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
