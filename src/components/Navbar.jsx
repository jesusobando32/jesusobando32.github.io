import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-accent" />
          <span className="font-mono text-lg font-bold tracking-tighter text-accent">
            [DEV_PORTFOLIO]
          </span>
        </div>
        
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="font-mono text-sm font-medium uppercase text-muted-foreground transition-colors duration-200 hover:text-accent">
            .about()
          </a>
          <a href="#skills" className="font-mono text-sm font-medium uppercase text-muted-foreground transition-colors duration-200 hover:text-accent">
            #skills
          </a>
          <a href="#projects" className="font-mono text-sm font-medium uppercase text-muted-foreground transition-colors duration-200 hover:text-accent">
            .work()
          </a>
          <a href="#contact" className="font-mono text-sm font-medium uppercase text-muted-foreground transition-colors duration-200 hover:text-accent">
            {"{contact}"}
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a
            href={`${import.meta.env.BASE_URL}${language === 'es' ? 'cv-es.pdf' : 'cv-en.pdf'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 border border-accent bg-transparent px-4 py-2 font-mono text-sm font-bold uppercase text-accent transition-all duration-300 hover:bg-accent hover:text-background"
          >
            {language === 'es' ? 'DESCARGAR_CV' : 'DOWNLOAD_CV'}
          </a>
          <button 
            className="md:hidden text-accent focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-card-border shadow-xl">
          <nav className="flex flex-col items-center py-6 gap-6">
            <a href="#about" onClick={toggleMobileMenu} className="font-mono text-lg font-medium uppercase text-muted-foreground hover:text-accent">
              .about()
            </a>
            <a href="#skills" onClick={toggleMobileMenu} className="font-mono text-lg font-medium uppercase text-muted-foreground hover:text-accent">
              #skills
            </a>
            <a href="#projects" onClick={toggleMobileMenu} className="font-mono text-lg font-medium uppercase text-muted-foreground hover:text-accent">
              .work()
            </a>
            <a href="#contact" onClick={toggleMobileMenu} className="font-mono text-lg font-medium uppercase text-muted-foreground hover:text-accent">
              {"{contact}"}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${language === 'es' ? 'cv-es.pdf' : 'cv-en.pdf'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 border border-accent bg-transparent px-6 py-3 font-mono text-sm font-bold uppercase text-accent transition-all duration-300 hover:bg-accent hover:text-background"
            >
              {language === 'es' ? 'DESCARGAR_CV' : 'DOWNLOAD_CV'}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
