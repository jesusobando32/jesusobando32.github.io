import React from 'react';
import { Terminal } from 'lucide-react';

const Navbar = () => {
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
          <button className="flex items-center gap-2 border border-accent bg-transparent px-4 py-2 font-mono text-sm font-bold uppercase text-accent transition-all duration-300 hover:bg-accent hover:text-background">
            DOWNLOAD_CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
