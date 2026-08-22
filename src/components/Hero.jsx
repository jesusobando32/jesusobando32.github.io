import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState('typing'); // typing, waiting, selecting, deleting
  
  useEffect(() => {
    let timeout;
    if (phase === 'typing') {
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, 100); // speed of typing
      } else {
        timeout = setTimeout(() => setPhase('waiting'), 3000);
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('selecting'), 50);
    } else if (phase === 'selecting') {
      timeout = setTimeout(() => setPhase('deleting'), 600); // stay selected 600ms
    } else if (phase === 'deleting') {
      setDisplayedText('');
      timeout = setTimeout(() => setPhase('typing'), 300); // brief pause before typing again
    }
    
    return () => clearTimeout(timeout);
  }, [displayedText, phase, text]);

  return (
    <span className="relative block text-accent font-mono text-left">
      {/* Texto completo invisible para reservar el espacio exacto y evitar saltos */}
      <span className="opacity-0 pointer-events-none select-none break-words whitespace-pre-wrap">
        [Hi, I'm {text}]|
      </span>
      {/* Texto que se escribe sobre el espacio reservado */}
      <span className="absolute top-0 left-0 w-full h-full break-words whitespace-pre-wrap">
        <span className={phase === 'selecting' ? 'bg-accent text-background px-1' : ''}>
          [Hi, I'm {displayedText}]
        </span>
        <span className={phase === 'selecting' ? 'hidden' : 'animate-blink text-accent'}>|</span>
      </span>
    </span>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-fit w-full flex-col items-start justify-center pt-24 pb-0 overflow-hidden">
      <div className="z-10 space-y-6 w-full max-w-2xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-2"
        >
          <span className="font-mono text-xl md:text-2xl text-muted-foreground font-semibold">
            <span className="text-accent-secondary">const</span> developer =
          </span>
          <h1 className="font-sans text-4xl md:text-6xl font-black tracking-tighter text-foreground mt-2">
            <TypewriterEffect text={t.hero.name} />
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl border-l-2 border-card-border pl-6"
        >
          <p className="font-mono text-base md:text-lg text-muted-foreground leading-relaxed">
            // {t.hero.title}.<br />
            // {t.hero.subtitle}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 pt-8 w-full"
        >
          <a href="#projects" className="flex items-center justify-center gap-2 border border-accent bg-accent px-6 py-3 font-mono text-sm font-bold uppercase text-background shadow-lg shadow-accent/20 transition-all hover:-translate-y-1 hover:bg-transparent hover:text-accent w-full sm:w-auto">
            {t.hero.ctaProjects || (t.about.skillsText.includes('experiencia') ? 'Ver Proyectos' : 'View Projects')}
            <ChevronRight className="h-4 w-4" />
          </a>
          <a href={`mailto:${t.contact.email}`} className="flex items-center justify-center gap-2 border border-card-border bg-transparent px-6 py-3 font-mono text-sm font-bold uppercase text-foreground transition-all hover:-translate-y-1 hover:bg-card w-full sm:w-auto">
            <Mail className="h-4 w-4" />
            {t.hero.ctaContact || (t.about.skillsText.includes('experiencia') ? 'Contáctame' : 'Contact Me')}
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="z-10 w-full flex justify-center pt-16"
      >
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl">
          {/* Email */}
          <a href={`mailto:${t.contact.email}`} className="flex flex-col items-center text-center gap-2 border border-card-border bg-background/50 backdrop-blur-sm p-4 rounded-xl w-[200px] sm:w-[220px] hover:border-accent transition-colors group">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-accent" />
              <span className="font-sans font-bold text-foreground">Email</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate w-full">{t.contact.email}</span>
          </a>
          
          {/* LinkedIn */}
          <a href={t.contact.linkedinUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center text-center gap-2 border border-card-border bg-background/50 backdrop-blur-sm p-4 rounded-xl w-[200px] sm:w-[220px] hover:border-accent transition-colors group">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span className="font-sans font-bold text-foreground">LinkedIn</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate w-full">{t.contact.linkedinLabel}</span>
          </a>
          
          {/* GitHub */}
          <a href={t.contact.githubUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center text-center gap-2 border border-card-border bg-background/50 backdrop-blur-sm p-4 rounded-xl w-[200px] sm:w-[220px] hover:border-accent transition-colors group">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span className="font-sans font-bold text-foreground">GitHub</span>
            </div>
            <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate w-full">{t.contact.githubLabel}</span>
          </a>
        </div>
      </motion.div>

      {/* Background code element for technical vibe */}
      <motion.div 
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 0.6, y: ["-50%", "-52%", "-50%"] }}
        transition={{ 
          opacity: { duration: 2, delay: 1 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden md:block pointer-events-none absolute md:right-10 lg:right-20 top-1/2 -z-0 opacity-60"
      >
        <pre className="font-mono text-sm md:text-base lg:text-lg text-accent-secondary p-4 drop-shadow-md">
          {`{
  "system": "online",
  "modules": ["frontend", "backend", "database"],
  "status": "compiling...",
  "focus": "ui/ux"
}`}
        </pre>
      </motion.div>
    </section>
  );
};

export default Hero;
