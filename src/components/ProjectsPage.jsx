import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Página aparte con todos los proyectos en cuadrícula. Se abre en #/proyectos.
const ProjectsPage = () => {
  const { language, t } = useLanguage();
  const es = language === 'es';

  return (
    <main className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 md:px-12">
      <a
        href="#/"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {es ? 'Volver al inicio' : 'Back home'}
      </a>

      <div className="mb-12 mt-8 flex items-center gap-4">
        <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          <span className="font-mono text-accent-secondary">const</span> projects = [
        </h1>
        <div className="h-px flex-grow bg-card-border" />
      </div>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {t.projects.map((p, i) => (
          <motion.li
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card transition-colors hover:border-accent"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-card-border/60 bg-background/60">
              {p.image ? (
                <img
                  src={p.image}
                  loading="lazy"
                  alt={es ? `Captura de pantalla de ${p.title}` : `Screenshot of ${p.title}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
                  <span className="font-mono text-5xl font-bold text-accent/70">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-mono text-xs text-muted-foreground">{p.tech.join(' · ')}</span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <p className="font-mono text-xs text-accent-secondary">{p.role}</p>
                <h2 className="mt-1 text-2xl font-bold text-foreground">{p.title}</h2>
              </div>
              <p className="flex-1 leading-relaxed text-muted-foreground">{p.description}</p>
              {p.mine && (
                <p className="border-l-2 border-accent pl-3 font-mono text-xs leading-relaxed text-foreground/80">
                  <span className="text-accent">{es ? 'Mi parte: ' : 'My part: '}</span>
                  {p.mine}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((x) => (
                  <span key={x} className="font-mono text-xs text-accent">[{x.toUpperCase()}]</span>
                ))}
              </div>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-card-border bg-background/50 px-4 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-accent hover:text-accent"
              >
                {es ? 'Ver código' : 'View source'}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </main>
  );
};

export default ProjectsPage;
