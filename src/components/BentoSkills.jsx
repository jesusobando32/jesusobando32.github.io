import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const BentoSkills = () => {
  return (
    <section id="skills" className="w-full py-12 border-b border-card-border">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          <span className="text-accent-secondary font-mono">&lt;</span>
          TechnicalArsenal
          <span className="text-accent-secondary font-mono"> /&gt;</span>
        </h2>
        <div className="h-px flex-grow bg-card-border"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6"
      >
        {portfolioData.skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className={`glass-card p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-300 ${skillGroup.colSpan}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-accent font-mono text-xs">/*</span>
              <h3 className="font-mono text-sm font-semibold uppercase text-foreground">
                {skillGroup.category}
              </h3>
              <span className="text-accent font-mono text-xs">*/</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 bg-primary border border-card-border rounded text-xs font-mono text-muted-foreground hover:text-accent transition-colors cursor-default"
                >
                  [{item}]
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BentoSkills;
