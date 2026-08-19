import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-md border border-card-border rounded-full shadow-lg hover:border-accent hover:text-accent transition-all group"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
      <span className="font-mono text-sm font-bold tracking-wider text-foreground group-hover:text-accent transition-colors">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
