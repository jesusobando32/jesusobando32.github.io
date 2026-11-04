import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ScrollReveal from './rb/ScrollReveal';
import DecryptedText from './rb/DecryptedText';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full py-12">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          <span className="text-accent-secondary font-mono">&lt;</span>
          <DecryptedText text="AboutMe" animateOn="view" speed={45} sequential revealDirection="start" />
          <span className="text-accent-secondary font-mono"> /&gt;</span>
        </h2>
        <div className="h-px flex-grow bg-card-border"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 relative overflow-hidden group"
      >
        <div className="absolute left-0 top-0 h-full w-1 bg-accent opacity-50"></div>
        
        <div className="mb-6 font-mono text-xs text-accent-secondary">
          /* src/data/portfolio.js */
        </div>
        
        <div className="about-reveal flex flex-col gap-6 text-muted-foreground">
          {[t.about.description1, t.about.description2, t.about.description3].map((d, i) => (
            <ScrollReveal key={i} baseOpacity={0.15} baseRotation={0} blurStrength={3} enableBlur wordAnimationEnd="bottom 70%">
              {d}
            </ScrollReveal>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
