import React from 'react';
import { Mail, Phone, MapPin, Link as LinkIcon, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="w-full py-12">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          <span className="text-accent-secondary font-mono">export default</span> Contact;
        </h2>
        <div className="h-px flex-grow bg-card-border"></div>
      </div>

      <div className="glass-card p-8 md:p-12 w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
            <div className="p-3 border border-card-border rounded-lg group-hover:border-accent bg-background">
              <Mail className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase">Email</span>
              <a href={`mailto:${t.contact.email}`} className="text-foreground font-medium">{t.contact.email}</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
            <div className="p-3 border border-card-border rounded-lg group-hover:border-accent bg-background">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase">{language === 'es' ? 'Teléfono' : 'Phone'}</span>
              <a href={`https://wa.me/${t.contact.phone.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium">{t.contact.phone}</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
            <div className="p-3 border border-card-border rounded-lg group-hover:border-accent bg-background">
              <LinkIcon className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase">LinkedIn</span>
              <a href={t.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium">{t.contact.linkedinLabel}</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group">
            <div className="p-3 border border-card-border rounded-lg group-hover:border-accent bg-background">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono uppercase">GitHub</span>
              <a href={t.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium">{t.contact.githubLabel}</a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center border-l border-card-border pl-12 h-full w-full opacity-60">
           <Terminal className="h-24 w-24 text-card-border mb-4" />
           <span className="font-mono text-sm text-muted-foreground text-center">
             {language === 'es' ? 'Sistema listo para recibir conexiones.' : 'System ready to receive connections.'}
           </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
