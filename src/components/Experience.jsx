import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="w-full py-12">
      <div className="flex flex-col gap-12 md:flex-row md:gap-24">
        {/* Experience Column */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              <span className="text-accent-secondary font-mono">&lt;</span>
              Experience
              <span className="text-accent-secondary font-mono"> /&gt;</span>
            </h2>
          </div>
          
          <div className="relative pl-6 border-l-2 border-card-border space-y-12">
            {t.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute w-3 h-3 rounded-full bg-accent -left-[31px] top-1.5 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-sm text-accent-secondary">{exp.year}</span>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <h4 className="font-sans text-sm font-medium text-accent">{exp.subtitle}</h4>
                  <p className="mt-2 font-sans text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              <span className="text-accent-secondary font-mono">&lt;</span>
              Education
              <span className="text-accent-secondary font-mono"> /&gt;</span>
            </h2>
          </div>
          
          <div className="relative pl-6 border-l-2 border-card-border space-y-12">
            {t.education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute w-3 h-3 rounded-full bg-accent-secondary -left-[31px] top-1.5 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-sm text-accent">{edu.year}</span>
                  <h3 className="text-xl font-bold text-foreground">{edu.title}</h3>
                  <p className="mt-2 font-sans text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
